'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e6397aacc0f0c25c86aeb2b1b9d5ef25",
"assets/AssetManifest.bin.json": "4e9ce8fd955571e7943cf4e8ef6f807d",
"assets/AssetManifest.json": "8354d6def098440110e1d737455016d0",
"assets/assets/banana.png": "b36cd49bf03647543a9b0308e3cc9689",
"assets/assets/banner.png": "415ec47b914b86211d42072a53532b0a",
"assets/assets/banner2023.png": "d9cdc9c3ecb9842344f15de6d0c895e3",
"assets/assets/comida-saudavel.png": "155ed53c3a45b40b65454b97344feb44",
"assets/assets/correndo.png": "880855fcdc18c02868428e1110c8511c",
"assets/assets/fundo.png": "1d35dc44e7ba1675f73ed52e92ccff58",
"assets/assets/fundomeioambiente.png": "c01a70a865efe3d3d5e599f16c22f937",
"assets/assets/fundoo.png": "e001b2bfac27cea9654d2440238b71c0",
"assets/assets/fundoplay.png": "3764e7fb3a3e6aa57319031514afc585",
"assets/assets/fundoprincipal.png": "f552f97936026e48a6505131d9ada8f0",
"assets/assets/icons/acao.png": "c85e13d05d0db704eebb8c9a2268c842",
"assets/assets/icons/cepon.png": "ca95c20ff14bfa92a6eb366f5da2e936",
"assets/assets/icons/health.png": "69f9dc54c18ca79cf3507061b64553ab",
"assets/assets/icons/home.png": "d2cb8074a9c3facb59a97ddea3547db3",
"assets/assets/icons/icon.png": "50d784463c360169a4db285f6a4072a2",
"assets/assets/icons/identify.png": "7aa9576790741984c87523ff77cd44c7",
"assets/assets/icons/inicio.png": "22aff17e83b8409cfebee0ef2e6a24e0",
"assets/assets/icons/meioambiente.png": "b90b2403aac73abe5df78f9f5363a9bd",
"assets/assets/icons/memory.png": "290057358264da66e6bda2251fdd26b2",
"assets/assets/icons/play.png": "47b24b6531657b5a8f85d689b20d6a97",
"assets/assets/icons/quiz.png": "df8f5c751b13e11a073e0ea053686f85",
"assets/assets/icons/sobre.png": "139a5810b5a5027a83f53f12a2f614bc",
"assets/assets/icons/sustentabilidade.png": "30499d6ac91cd21721e3c7808421eada",
"assets/assets/inicial/1.png": "2de5de6f894476e70dab52068972ad79",
"assets/assets/inicial/2.png": "ad2e4b5d7a6a8a48039a064ad252d234",
"assets/assets/inicial/3.jpg": "da03b06a53d08c069803717ead706871",
"assets/assets/inicial/4.jpg": "02d270ba5c076143ba731a85da98172b",
"assets/assets/inicial/5.jpg": "9055029b0dd9955566671f7bf9b483e6",
"assets/assets/inicial/6.jpg": "9055029b0dd9955566671f7bf9b483e6",
"assets/assets/inicial/7.jpg": "cb1ce9e2e2c3ff00822e3e911b3b733d",
"assets/assets/inicial/8.jpg": "33d8dcf1ea0a95552965f1b86d461d0c",
"assets/assets/jornal.png": "167abb857ffcc9ef20dafee515f9ea28",
"assets/assets/lixo.png": "4815d8601bb1223463b5ea01bcfc9a61",
"assets/assets/logoagrinho.png": "c4d22ee8fa5596dceb1e561d1923b88a",
"assets/assets/medica.png": "af353e3c2889f220f4064d4ffb3f6313",
"assets/assets/meninoagro.png": "92b46f675be4bdc915192afae92f155f",
"assets/assets/pet.png": "a8174888e19e131e532f56d720ff1781",
"assets/assets/saudavel/1.png": "245bb5998cb2cc8570a7e7eb0cc9329b",
"assets/assets/saudavel/2.png": "ff6c1ffe0907de8a8db2d55e50f96ed1",
"assets/assets/saudavel/3.png": "6c17d665bbafab65e1d433ed1f31e59f",
"assets/assets/saudavel/4.png": "405c6f8ed0a38a5205b23c02bc25c470",
"assets/assets/saudavel/5.png": "a6c58f243c4bbcb5dfe11d0ea02e8bf8",
"assets/assets/songs/correct.mp3": "bb81be530bec88972df97509c8df98ce",
"assets/assets/songs/final.wav": "fe765dbdcad2c66d6efb45682bd72189",
"assets/assets/songs/wrong.mp3": "63a8039f0a4fa086439ee5c950df38cd",
"assets/assets/terra.png": "80a2ff56fa78b36262c1e6cd095a278f",
"assets/assets/vidro.png": "650ee92bbe67205617db578f1ebe0734",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ea400365abaa5a6b2f3eaba8818c693a",
"assets/NOTICES": "57c49c92feb61a68ae9bf968da1e9681",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "0f7ee642847384ca2b068f3585d4c4fc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d47748059be6bccd8aa9888390bbb7f3",
"icons/Icon-192.png": "454d32c8d1b03366740cf4e34972a792",
"icons/Icon-512.png": "4ec8c0fd47fdbda9d2181bff00c2c086",
"icons/Icon-maskable-192.png": "454d32c8d1b03366740cf4e34972a792",
"icons/Icon-maskable-512.png": "4ec8c0fd47fdbda9d2181bff00c2c086",
"index.html": "b65f1c886ab13a43982b7d006fa7bdd3",
"/": "b65f1c886ab13a43982b7d006fa7bdd3",
"main.dart.js": "301244012d4ba192b295c1c922b17dc2",
"manifest.json": "3079d7d617632f4aabb514ce1657803e",
"version.json": "fad7a661368e6c2476d0ce2a9690bcb7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
