'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd2743d837f4218ccd436992c069c12f",
"assets/AssetManifest.bin.json": "e8eab5369bf2031f79ec60287c463db2",
"assets/AssetManifest.json": "5bfc36a8aeb5a683af19244cb1bf85ee",
"assets/assets/aboutus/arrow.png": "d5008b60e1c8390062b71f2155056e95",
"assets/assets/aboutus/certi1.png": "18a03117c8b908ec218f115f984d35ff",
"assets/assets/aboutus/certi2.png": "d2fda59ce71c033ac59f49630e368c87",
"assets/assets/aboutus/companies.png": "da870863e94e8bfb120b3265aaefa4c4",
"assets/assets/aboutus/eye.png": "99e82641be60350802562831f003511b",
"assets/assets/aboutus/values.png": "5babbf5f6f538b03e0f599237641537e",
"assets/assets/buyearn/buyearn1.png": "d5c0fa3efee85d1872b1cd5a42f11f33",
"assets/assets/buyearn/buyearn3.png": "ef976d8277493a7e0c8cf781d8d3a153",
"assets/assets/buyearn/evpartner.png": "53c0e3d2e3d180ae84700f6b875360c9",
"assets/assets/buyearn/monthly.jpg": "ad4cf681f990d95e9ff0f7d9c2a94ade",
"assets/assets/contactus/hoppy.png": "222e011da995186d8b89751b0a2e7923",
"assets/assets/dedicatedDriver/bag.png": "791c68c1fa5ba3be3d6e8ce4ad674d4e",
"assets/assets/dedicatedDriver/custom2.png": "2bedde10adbd79a8e3aa6586d85a8853",
"assets/assets/dedicatedDriver/customization.jpg": "db24146625aae505dca3238aec6969e5",
"assets/assets/dedicatedDriver/driverdelivery.jpg": "2a81316bcb1c988ef12e5ebaf5d1cd05",
"assets/assets/dedicatedDriver/lapmoney.png": "f4c61ba3bbe7a9dc9b96fd2c13519bef",
"assets/assets/dedicatedDriver/scooty.png": "222e011da995186d8b89751b0a2e7923",
"assets/assets/faq/faqbg.jpg": "b39c3a0fc1f52048cc501f36ae353618",
"assets/assets/groceryDelivery/bg.png": "2877a9d0bcf3380b1fb1e798ab40e8ca",
"assets/assets/groceryDelivery/bg2.png": "eaa992a2ed2af5ca7793acb34e03a923",
"assets/assets/groceryDelivery/faqbg.jpg": "b39c3a0fc1f52048cc501f36ae353618",
"assets/assets/homepage/callIcon.png": "a109dc3d6303ffced2ffa90217cdf82c",
"assets/assets/homepage/caro1.png": "8e0c4fdff08a5631ed8fc8ebd4aa9dc3",
"assets/assets/homepage/caro2.png": "e7cb46bf3d3dff3b76b38edd30dd620e",
"assets/assets/homepage/caro3.png": "f95059fae735f5781e6111de47ba36cf",
"assets/assets/homepage/caro4.jpg": "978900c36d74355bc3b141819c51516a",
"assets/assets/homepage/caro5.png": "e3bc3099fc8c03213b779dd174979749",
"assets/assets/homepage/hf12.png": "21ba8d887287235733ec5f4984697ed4",
"assets/assets/homepage/hf1box.png": "c629552e480c35fabf5e09c9dfa3624a",
"assets/assets/homepage/HM-logo.png": "06729d068720b2a1d3b42741a41f0a47",
"assets/assets/homepage/homeFirst1.jpg": "922c156b1d90686c4c0119720a427f9e",
"assets/assets/homepage/mail.png": "40d3fb352fa9b412c1e8fbc0b46f2e59",
"assets/assets/homepage/mainLogo.gif": "53ff3b0961a1f4af04eb53543f304919",
"assets/assets/homepage/ol1.png": "4af4c418e15c72cad5b7aef7acb29d45",
"assets/assets/homepage/ol2.png": "111a73d699e589e08fd6ef151a6f1dee",
"assets/assets/homepage/ol3.png": "d0d993448bceb69959a159a4cb85308e",
"assets/assets/homepage/playstore.png": "a600b92eb323c7ac7a4d873a11fcd2b7",
"assets/assets/homepage/poolamamaedurrrr.png": "1a8593dd5920cddb525450a6140ccdc5",
"assets/assets/homepage/s3icon1.png": "00e73fcd1ff2de27e9409dfb73a48390",
"assets/assets/homepage/s3icon2.png": "e3f9ea4c1fdb854f7b3c215522985b40",
"assets/assets/homepage/s3icon3.png": "00be060ea73ebfb528853376abc2c5dc",
"assets/assets/homepage/s4scooty.png": "ae7132e57a4d99112865468d4bcf27c0",
"assets/assets/homepage/sec11bg.jpg": "bd864285722e7e36106f2fac45879937",
"assets/assets/homepage/sec11call.png": "a109dc3d6303ffced2ffa90217cdf82c",
"assets/assets/homepage/sec5bg.jpg": "fbc1ab724caac810ed4362f56c366f34",
"assets/assets/homepage/sec5mobile.png": "e361c59ad092ca8d288dc5d0e75a3510",
"assets/assets/homepage/sec7bg.jpg": "c8de8e27f6f1ef512889839176669919",
"assets/assets/homepage/sec9bg.jpg": "c8de8e27f6f1ef512889839176669919",
"assets/assets/homepage/sec9maps.jpg": "98ade5973382009a29479f8b790695e8",
"assets/assets/Hoppypilot/benefits/career.png": "ee0e660cc5ec9a5941eae4b7a7e04fd2",
"assets/assets/Hoppypilot/benefits/goodincome.png": "4a18224360cee4c2e06a2579ef8590d0",
"assets/assets/Hoppypilot/benefits/incentive.png": "24fa1a0bd5058bbc0f7da98c047e5c7a",
"assets/assets/Hoppypilot/benefits/Licence.jpg": "eac520a649aad9c13de758183006ead5",
"assets/assets/Hoppypilot/benefits/noscooter.png": "95013318587320aabd669c30a18f4236",
"assets/assets/Hoppypilot/benefits/referral.png": "d9a9d86a7ad6eb3171f1a70b1334b979",
"assets/assets/Hoppypilot/Scroll/ambernath.png": "a749b64efad33b6f01d008fff3d150f3",
"assets/assets/Hoppypilot/Scroll/badlapur.png": "040533f2f5a4cf49bc93fa28fb508005",
"assets/assets/Hoppypilot/Scroll/bhayandar.png": "3c435e9d53288d31a694654a6367eba6",
"assets/assets/Hoppypilot/Scroll/dahisar.png": "8c502dd29992a85931179350022d4840",
"assets/assets/Hoppypilot/Scroll/dombivali.png": "aa8bc7261504cad5bfad19c2b18fc9c8",
"assets/assets/Hoppypilot/Scroll/hpilotgro.png": "eaa992a2ed2af5ca7793acb34e03a923",
"assets/assets/Hoppypilot/Scroll/kalyan.png": "8f27113d5153795a8f47f2f1e67e897c",
"assets/assets/Hoppypilot/Scroll/miraroad.png": "be58cc0f66b13ccb8f261e76c37d7886",
"assets/assets/Hoppypilot/Scroll/Naigoan.png": "82b5a5dcb3d870fdb49c2075b1c4824a",
"assets/assets/Hoppypilot/Scroll/navimumbai.png": "3b8902811b686d96bc9f26d02a59cd3b",
"assets/assets/Hoppypilot/Scroll/Palghar.png": "2edcba47eb23cdf2e26f610724e8aec1",
"assets/assets/Hoppypilot/Scroll/thane.png": "b27ccf3f247133c53d4516bdfd96d57a",
"assets/assets/Hoppypilot/Scroll/ulhasnagar.png": "5f076767ffb15b7d9f7a63882ee0d560",
"assets/assets/Hoppypilot/Scroll/vasai.png": "e1f16527c4c9805ee05b97312128bebe",
"assets/assets/Hoppypilot/Scroll/Virar.png": "831e93e4afebb90d29e03cf2d610dcff",
"assets/assets/hoppyteam/Amit.png": "2e7724d115b6f6c62dfdf1b8cf076620",
"assets/assets/hoppyteam/chandni.jpg": "2a551b99bf453022ff613affbed7df37",
"assets/assets/hoppyteam/jaydev.png": "b68345aa2c27a4595b79b331a0c1753b",
"assets/assets/hoppyteam/meetrteam.png": "b405363dc358ebc6a171644a52dab5cd",
"assets/assets/hoppyteam/surya.png": "bf9e5ae51b5c4df8659b3bfee95467a0",
"assets/assets/hoppyteam/umesh.jpg": "6e29ef04a9e0dcf2fe65750cdc421bdd",
"assets/assets/hoppyteam/vivek.png": "43d11e348a85530ac717254d06035233",
"assets/assets/hyperlocal/hyperlocal1.png": "222e011da995186d8b89751b0a2e7923",
"assets/assets/hyperlocal/hyperlocal2.jpg": "cd90fe0ee44b052f021ae7b3bf587a42",
"assets/assets/hyperlocal/hyperlocal3.png": "c3da0a9308c7cf4ee308ca2c103691d8",
"assets/assets/partnerWithUs/channel-partner.jpg": "3827379381594d0062d7d3a5b0fc4dff",
"assets/assets/partnerWithUs/companies.png": "ef976d8277493a7e0c8cf781d8d3a153",
"assets/assets/press/bossart.png": "593cf7676b9adc9c8b298511e55f6ae5",
"assets/assets/press/indiafront.png": "0017fbd59b798992a360ba78b7290891",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b06247699fc1ac006e5d5b2fc1722fd4",
"assets/NOTICES": "bc09326f760b076881fc816b391980ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e584104d7701dc58354c802ac2511f5f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b4f5c74cedccadebb5774c48b0714de8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "31ba3d37fd870e0ea0a869ad48a85e26",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "84f273d592e08b20c421faa6b5711b11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c0b6dd83e5c734f5fb11a9ca44d6af4",
"/": "7c0b6dd83e5c734f5fb11a9ca44d6af4",
"main.dart.js": "e00cf3b5387f9ba9a184c79c7e2407a1",
"manifest.json": "1eeb88213f580e3b3ce2616e140beb7b",
"version.json": "88768751cccdb5856ae877b02db7288c"};
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
