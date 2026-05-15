const CACHE_VERSION = 'trantham-v2'
const STATIC_CACHE = `static-${CACHE_VERSION}`
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`

const STATIC_ASSETS_EXTS = ['.js', '.css', '.ico', '.png', '.svg', '.webp', '.woff2']
const GOOGLE_FONTS_ORIGINS = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(['/', '/manifest.json'])).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (request.method !== 'GET') return

  // Google Fonts: stale-while-revalidate
  if (GOOGLE_FONTS_ORIGINS.includes(url.origin)) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE))
    return
  }

  // Only handle same-origin from here
  if (url.origin !== self.location.origin) return

  // Navigation requests: network-first, fallback to cached '/'
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then((response) => {
        const clone = response.clone()
        caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone))
        return response
      }).catch(() => caches.match('/').then((r) => r || new Response('Offline', { status: 503 })))
    )
    return
  }

  // Static assets: cache-first
  const ext = url.pathname.substring(url.pathname.lastIndexOf('.'))
  if (STATIC_ASSETS_EXTS.includes(ext)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE))
    return
  }
})

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request)
  if (cached) return cached
  const response = await fetch(request)
  if (response.ok) {
    const cache = await caches.open(cacheName)
    cache.put(request, response.clone())
  }
  return response
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request)
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      caches.open(cacheName).then((cache) => cache.put(request, response.clone()))
    }
    return response
  })
  return cached || fetchPromise
}
