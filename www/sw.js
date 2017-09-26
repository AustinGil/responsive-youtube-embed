importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.global.js",
    "revision": "2eab51fa98ed28b23cf1de2416e32427"
  },
  {
    "url": "build/app.js",
    "revision": "868091172f889589cc1d240009accc89"
  },
  {
    "url": "build/app.registry.json",
    "revision": "8f9c12b59d19b1c910b78270278c98c5"
  },
  {
    "url": "build/app/4cdqmaki.css",
    "revision": "08033da8232f51e4b0befd54ad3ccdea"
  },
  {
    "url": "build/app/app.bimwyhdt.pf.js",
    "revision": "a93e54df7101825d1ffa9f6043e878e5"
  },
  {
    "url": "build/app/app.opuojsxl.js",
    "revision": "c6571648301ba8c4137fa64cdb59abf1"
  },
  {
    "url": "build/app/fehey3ti.js",
    "revision": "c2b3143bed52e5154e63ccc32c2916c3"
  },
  {
    "url": "build/app/if0opbrp.js",
    "revision": "921a0f2053ba0a1728845286a22d9e61"
  },
  {
    "url": "build/app/imd9xidt.js",
    "revision": "2286d47e08db8815a3d1046e6f67975d"
  },
  {
    "url": "build/app/t89fh3lc.js",
    "revision": "5a501be1ab5d104fdfa01e2cbcf14516"
  },
  {
    "url": "build/app/uyykddxl.css",
    "revision": "3d50550407a0c0d076cccbe0d3ec717b"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "6a67b71456e800be56ce36186ee2fcfc"
  },
  {
    "url": "manifest.json",
    "revision": "2a184e97fcded4850709730575c65e19"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
