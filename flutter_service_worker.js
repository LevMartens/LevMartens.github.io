'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "43bcfaf75827411414610bebd3780ebb",
"index.html": "5491b1758d8336583ca8e320f8afdef9",
"/": "5491b1758d8336583ca8e320f8afdef9",
"main.dart.js": "cbcf663d8b9e3defd51dfb298069827f",
"favicon.png": "994f04d24547c6b7a584dc8589c05679",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4c301e9f9e9da316704efa080b84f546",
"assets/AssetManifest.json": "9cb5b54d9699ab7fdf66d7dab237f6d4",
"assets/NOTICES": "1cb23d48ad2f0046819f0021c29c0c57",
"assets/FontManifest.json": "915f653997ce7afb7c9b51189739f794",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/Cormorant-Medium.ttf": "b4a728ee68719221ce96668be3c42eae",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/vocabexSS1.png": "4670d035e5abd6a9cfb282446db997e6",
"assets/assets/straightLineLogo.png": "994f04d24547c6b7a584dc8589c05679",
"assets/assets/sl1.jpg": "2f627ce11b881d35308f9ce67ce589e7",
"assets/assets/sl3.jpg": "f7f88bbc0b61a2e0e17929fd718e2c18",
"assets/assets/vocabexSS2.png": "5aebb20adb5c8871acd42ceb0224a7e2",
"assets/assets/vocabexSS3.png": "759ead7913a7d982d98e9ddf72c80e9f",
"assets/assets/sl2.jpg": "93ad7a6e04c7ca042010a2c10e3920e9",
"assets/assets/background1.png": "0039e3d53f1bb2d0f57729d8ede61343",
"assets/assets/sl5.jpg": "88596ff77b4aaa0b9ef2ed9371068298",
"assets/assets/vocabexSS4.png": "1c7c3ca06bcea191f7ebf3788349346d",
"assets/assets/javaLogo.png": "ebd4a0af23698bc6978bde51e4ba8960",
"assets/assets/sl4.jpg": "361e8eaea15769779e88ce460bdcb5e9",
"assets/assets/javaSS1.jpg": "8c5eaaff66a52e22216b241298d91ecd",
"assets/assets/TestFlight_Icon.png": "764050e4f65415b9f5ff65cac97341c2",
"assets/assets/road.jpg": "44c6b636b56cf02f1c7bc162b16f4bcf",
"assets/assets/verossaLogo.png": "6dc6908ad347778e5a546d1bb87a8fe3",
"assets/assets/javaSS2.jpg": "4192951f558a6b75fe451c1a98f87439",
"assets/assets/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"assets/assets/music.jpg": "11620fb49a04c28989c29adea2e8c2a9",
"assets/assets/javaSS3.jpg": "bd69e2708f6f6eeff5b6aca347bb1749",
"assets/assets/HomePageScreen.jpg": "9e262a9929e1023c98325758dcca4342",
"assets/assets/tyr.png": "abf32bef3c472b7de0c01f0b5833e528",
"assets/assets/testFlightRound.png": "3c659724a35ccb25fe7fd5ca9548bdcc",
"assets/assets/IMG_0888.png": "0fb0ea59d118791d163aa3d88f532d51",
"assets/assets/vocabexScreenS2.jpg": "424f92e8c890180d1102e4c9eaabfa04",
"assets/assets/face1.jpg": "5d1b7070be8603ad6e53b2446c49fc66",
"assets/assets/climb.png": "570fe6149f21f75c23964409d40017df",
"assets/assets/IMG_0888.jpg": "f8ec4a12405794d6588ad537b927ee0c",
"assets/assets/operator.png": "2a90f2c2327a8736c6307b67ec803f82",
"assets/assets/CommingSoon.jpg": "f1e3224a46c5098b5868e243e381b4cf",
"assets/assets/face2.jpg": "17af8209dc3edabb4619b4b051e4bd45",
"assets/assets/AppleAvailable.png": "afe262f628e37ea9799cb44c59a7ba02",
"assets/assets/face3.jpg": "7028e7436c077f12cb75fc96175a6820",
"assets/assets/indorama.png": "e3f8faf255c219dd35fff59e4829600d",
"assets/assets/stack.png": "908ddb42c65270e6c81adb805e62dc7c",
"assets/assets/screenshot-3.jpg": "53ce45a85dc2853469fd533ad855bcf4",
"assets/assets/googlePlayIcon.png": "90a6d0d45512a1f6a21807263ce324c8",
"assets/assets/IMG_8181.jpg": "c4ffa0ad304a0643bae21386eb19ccdc",
"assets/assets/github2.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/assets/screenshot1.jpg": "08d3f66482f49521dd2c35751e086568",
"assets/assets/LevHeader.jpg": "8715cf140494086177f2445d4a819151",
"assets/assets/IMG_1102.jpg": "fedf9d47c3c9c62d30d8b16396994eb3",
"assets/assets/face3-removebg-preview.png": "ea7a837dde710bf3dc1b9d946a915883",
"assets/assets/screenshot2.jpg": "5436007cc6c73cf5d7a4645565e85b14",
"assets/assets/screenshot3.jpg": "da3ee450e04e7d12fb5df9824a7c6fe4",
"assets/assets/IMG_8484.jpg": "f897aa242fb273cfb609de24f5e44488",
"assets/assets/screenshot6.jpg": "e4c514a796fbcf3a4f621443543368d1",
"assets/assets/screenshot4.jpg": "0d47ab0f2f05ae683783d24160f2195c",
"assets/assets/screenshot5.jpg": "db378f1965fba8c942204b978fbbaffd",
"assets/assets/VocabexLogo.png": "ded60c98c07ae97f1b339e09c469993d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
