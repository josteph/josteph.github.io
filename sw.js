if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return n[e]||(c=new Promise(async c=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=c}else importScripts(e),c()})),c.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},c=(c,n)=>{Promise.all(c.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(c)};self.define=(c,s,i)=>{n[c]||(n[c]=Promise.resolve().then(()=>{let n={};const a={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return n;case"module":return a;default:return e(c)}})).then(e=>{const c=i(...e);return n.default||(n.default=c),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4169cd238cc8b991334137892b28bcf8e1bf54ce/_buildManifest.js",revision:"0a29abd38ee9a3fcfe5213652d204179"},{url:"/_next/static/4169cd238cc8b991334137892b28bcf8e1bf54ce/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.0c645bc1c3a40ec6500e.js",revision:"cd3f39bfb50694c067c5698c3cc04735"},{url:"/_next/static/chunks/framework.baa41d4dbf5d52db897c.js",revision:"34da50bf2f234c3162f92c7406756c59"},{url:"/_next/static/chunks/main-004ea222bf57aa82ad52.js",revision:"545b3df89169ea0519706cf1c0ea72cd"},{url:"/_next/static/chunks/pages/404-27be45303e091ea0a240.js",revision:"2677549ef6c2f49c3fc777b893af0810"},{url:"/_next/static/chunks/pages/_app-5bef3a438e4cc4f1d2d1.js",revision:"26cbf39960a189cef4659a65dd9fea40"},{url:"/_next/static/chunks/pages/_error-fb942535921b5be64a37.js",revision:"4ab0ebad37bce1af0dd352245a6b29ff"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-69408aca14ce47deb0e5.js",revision:"98ef4ad46610e29acbd1a65a4c8cc862"},{url:"/_next/static/chunks/pages/index-824c91e24ecc3e33784a.js",revision:"077253c702dafae9ab29c76e0609b150"},{url:"/_next/static/chunks/polyfills-11c8eba6a84e3fddec04.js",revision:"950295a8416ad5c28e5c1e51da0ee266"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/6c2b62797eb60e832415.css",revision:"a6d31468ed8cfeecf1a2d135979b916b"},{url:"/_next/static/css/ee04ded2fc529e191000.css",revision:"43977c924ab2d1829fbaf52711b79649"},{url:"/_next/static/css/f5ac54f680fd986efc41.css",revision:"320cc2cf1ae1d86c3877186cabd6e567"},{url:"/browserconfig.xml",revision:"a0dea3417d07f1c91fcb63c23d1cdd4b"},{url:"/icons/android-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/android-icon-192x192.png",revision:"b09f5e0935946db61aa91846389d56be"},{url:"/icons/android-icon-36x36.png",revision:"e3489fa56c953999603c63be0208d16b"},{url:"/icons/android-icon-48x48.png",revision:"78d599ab243906beea919b5d2f3aa125"},{url:"/icons/android-icon-72x72.png",revision:"bfbcc83a7adcd6d9e543925a5b341bc8"},{url:"/icons/android-icon-96x96.png",revision:"e8da79ab70fab11ae501b359a658d02d"},{url:"/icons/apple-icon-114x114.png",revision:"62b06b3812a0bb190005fae2d0883467"},{url:"/icons/apple-icon-120x120.png",revision:"2f85f8c319cb51f32ef1a0d4e1659275"},{url:"/icons/apple-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/apple-icon-152x152.png",revision:"5d302a1e60178eb10b2b9f885c0e3771"},{url:"/icons/apple-icon-180x180.png",revision:"edca79e675ce0322de39dd6de68567cd"},{url:"/icons/apple-icon-57x57.png",revision:"1c012f651b408f71f3bbe1175447411a"},{url:"/icons/apple-icon-60x60.png",revision:"f48251581f5a80995d647a662e4ee15d"},{url:"/icons/apple-icon-72x72.png",revision:"bfbcc83a7adcd6d9e543925a5b341bc8"},{url:"/icons/apple-icon-76x76.png",revision:"f653f3f7ed82cd4591efb9f2879bec0a"},{url:"/icons/apple-icon-precomposed.png",revision:"a804c4e33c569d65ce5e8d15ec00e6fe"},{url:"/icons/apple-icon.png",revision:"a804c4e33c569d65ce5e8d15ec00e6fe"},{url:"/icons/favicon-16x16.png",revision:"84b73daec19af9edf9bef72db1c17a6b"},{url:"/icons/favicon-32x32.png",revision:"bfa9762ce85e959307a27412af2adf95"},{url:"/icons/favicon-96x96.png",revision:"e8da79ab70fab11ae501b359a658d02d"},{url:"/icons/favicon.ico",revision:"1c8f0a17358f4e90598115cf5df912db"},{url:"/icons/ms-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/ms-icon-150x150.png",revision:"dd1fdc386f077338e5e1cc58ca4b07aa"},{url:"/icons/ms-icon-310x310.png",revision:"a332a5543abd4dbdfe431e479280c16f"},{url:"/icons/ms-icon-70x70.png",revision:"934c3eb7891ca79c8b17f7afcb80757b"},{url:"/manifest.json",revision:"92db6fb4b1485ee08d788321730b3bbe"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
