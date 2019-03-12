importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ef5113bce2d64aa7386.js",
    "revision": "0947e59742da9cd051974cc37a3d44be"
  },
  {
    "url": "/_nuxt/1d6c2e6c412be310c140.js",
    "revision": "81ab5dff6a2afbdde7f3a6f32619239e"
  },
  {
    "url": "/_nuxt/c629588719b6c7565ad3.js",
    "revision": "1e89c632752ccf7c6c7b6c5d126cd08f"
  },
  {
    "url": "/_nuxt/d9c9a4ca63a3d5f9f028.js",
    "revision": "081dbbaaf7a940daace9a5b25325936c"
  }
], {
  "cacheId": "personal-website",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
