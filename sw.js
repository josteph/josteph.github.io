if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return n[e]||(c=new Promise(async c=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=c}else importScripts(e),c()})),c.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},c=(c,n)=>{Promise.all(c.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(c)};self.define=(c,i,s)=>{n[c]||(n[c]=Promise.resolve().then(()=>{let n={};const a={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return n;case"module":return a;default:return e(c)}})).then(e=>{const c=s(...e);return n.default||(n.default=c),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/12394792a03ced93acd7c848a120d11795b38f7b/_buildManifest.js",revision:"0af522aa26718822c2a8e6c4fab5ec55"},{url:"/_next/static/12394792a03ced93acd7c848a120d11795b38f7b/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.0c645bc1c3a40ec6500e.js",revision:"cd3f39bfb50694c067c5698c3cc04735"},{url:"/_next/static/chunks/framework.baa41d4dbf5d52db897c.js",revision:"34da50bf2f234c3162f92c7406756c59"},{url:"/_next/static/chunks/main-004ea222bf57aa82ad52.js",revision:"545b3df89169ea0519706cf1c0ea72cd"},{url:"/_next/static/chunks/pages/_app-1e2388bb3a9c0d0c118a.js",revision:"5f17f6f225b6574aa29b869ccafa59ef"},{url:"/_next/static/chunks/pages/_error-f7d85dafed132dfe3f92.js",revision:"7018d2a3d308105df4265ff59c5376be"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-8d1d27c16c5133804a25.js",revision:"664c6cd6430dbad9c6fb19b8a307daa1"},{url:"/_next/static/chunks/pages/index-3dd98ba8b127d5067630.js",revision:"9fa3bf07073226047917181410310471"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/38f321ead0d4de70f492.css",revision:"3c8cefda47955b195359cb5208efc2ea"},{url:"/_next/static/css/3a765cd11de5b5f366fb.css",revision:"4d97e8416be377b4aa293a3a2377a2fe"},{url:"/browserconfig.xml",revision:"a0dea3417d07f1c91fcb63c23d1cdd4b"},{url:"/icons/android-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/android-icon-192x192.png",revision:"b09f5e0935946db61aa91846389d56be"},{url:"/icons/android-icon-36x36.png",revision:"e3489fa56c953999603c63be0208d16b"},{url:"/icons/android-icon-48x48.png",revision:"78d599ab243906beea919b5d2f3aa125"},{url:"/icons/android-icon-72x72.png",revision:"bfbcc83a7adcd6d9e543925a5b341bc8"},{url:"/icons/android-icon-96x96.png",revision:"e8da79ab70fab11ae501b359a658d02d"},{url:"/icons/apple-icon-114x114.png",revision:"62b06b3812a0bb190005fae2d0883467"},{url:"/icons/apple-icon-120x120.png",revision:"2f85f8c319cb51f32ef1a0d4e1659275"},{url:"/icons/apple-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/apple-icon-152x152.png",revision:"5d302a1e60178eb10b2b9f885c0e3771"},{url:"/icons/apple-icon-180x180.png",revision:"edca79e675ce0322de39dd6de68567cd"},{url:"/icons/apple-icon-57x57.png",revision:"1c012f651b408f71f3bbe1175447411a"},{url:"/icons/apple-icon-60x60.png",revision:"f48251581f5a80995d647a662e4ee15d"},{url:"/icons/apple-icon-72x72.png",revision:"bfbcc83a7adcd6d9e543925a5b341bc8"},{url:"/icons/apple-icon-76x76.png",revision:"f653f3f7ed82cd4591efb9f2879bec0a"},{url:"/icons/apple-icon-precomposed.png",revision:"a804c4e33c569d65ce5e8d15ec00e6fe"},{url:"/icons/apple-icon.png",revision:"a804c4e33c569d65ce5e8d15ec00e6fe"},{url:"/icons/favicon-16x16.png",revision:"84b73daec19af9edf9bef72db1c17a6b"},{url:"/icons/favicon-32x32.png",revision:"bfa9762ce85e959307a27412af2adf95"},{url:"/icons/favicon-96x96.png",revision:"e8da79ab70fab11ae501b359a658d02d"},{url:"/icons/favicon.ico",revision:"1c8f0a17358f4e90598115cf5df912db"},{url:"/icons/ms-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/ms-icon-150x150.png",revision:"dd1fdc386f077338e5e1cc58ca4b07aa"},{url:"/icons/ms-icon-310x310.png",revision:"a332a5543abd4dbdfe431e479280c16f"},{url:"/icons/ms-icon-70x70.png",revision:"934c3eb7891ca79c8b17f7afcb80757b"},{url:"/manifest.json",revision:"92db6fb4b1485ee08d788321730b3bbe"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
