if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return n[e]||(c=new Promise(async c=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=c}else importScripts(e),c()})),c.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},c=(c,n)=>{Promise.all(c.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(c)};self.define=(c,i,a)=>{n[c]||(n[c]=Promise.resolve().then(()=>{let n={};const s={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return n;case"module":return s;default:return e(c)}})).then(e=>{const c=a(...e);return n.default||(n.default=c),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/08acc754599cadafbe9eacbb0f73be93ad4e66f1/_buildManifest.js",revision:"efec5c2d628974f2a51361ec09916244"},{url:"/_next/static/08acc754599cadafbe9eacbb0f73be93ad4e66f1/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.1027d52b5eac815f5437.js",revision:"7281b64d370e97a85579e695d8350a14"},{url:"/_next/static/chunks/framework.cb9d4afe4d07c46063c3.js",revision:"3307a0e03685c6c8c2162b0f54ef78b9"},{url:"/_next/static/chunks/main-de325e3141810da71e49.js",revision:"425a0a18a0f76704a38f346cd7c09178"},{url:"/_next/static/chunks/pages/_app-4c83f0653b903614d6d9.js",revision:"6cee015458cb2a560af54a843317e4f8"},{url:"/_next/static/chunks/pages/_error-a8275e509f6fe3273039.js",revision:"e1d863ba5bb7723ec3910aa77146b8ca"},{url:"/_next/static/chunks/pages/index-1b1b964da9cb62d31ac0.js",revision:"3299b24901aca962e45c6d3a0fed18dc"},{url:"/_next/static/chunks/polyfills-7abac9d858370c30536e.js",revision:"7bea24feabff45c925a69bded8519934"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/5409ed41e07076fc4c9c.css",revision:"189769177ad81e4c2ab7168134fc9a90"},{url:"/_next/static/css/f38c4b78b5dd05c6608a.css",revision:"64f725adbff84ee5d18c1bbeb401749e"},{url:"/browserconfig.xml",revision:"a0dea3417d07f1c91fcb63c23d1cdd4b"},{url:"/icons/android-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/android-icon-192x192.png",revision:"b09f5e0935946db61aa91846389d56be"},{url:"/icons/android-icon-36x36.png",revision:"e3489fa56c953999603c63be0208d16b"},{url:"/icons/android-icon-48x48.png",revision:"78d599ab243906beea919b5d2f3aa125"},{url:"/icons/android-icon-72x72.png",revision:"bfbcc83a7adcd6d9e543925a5b341bc8"},{url:"/icons/android-icon-96x96.png",revision:"e8da79ab70fab11ae501b359a658d02d"},{url:"/icons/apple-icon-114x114.png",revision:"62b06b3812a0bb190005fae2d0883467"},{url:"/icons/apple-icon-120x120.png",revision:"2f85f8c319cb51f32ef1a0d4e1659275"},{url:"/icons/apple-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/apple-icon-152x152.png",revision:"5d302a1e60178eb10b2b9f885c0e3771"},{url:"/icons/apple-icon-180x180.png",revision:"edca79e675ce0322de39dd6de68567cd"},{url:"/icons/apple-icon-57x57.png",revision:"1c012f651b408f71f3bbe1175447411a"},{url:"/icons/apple-icon-60x60.png",revision:"f48251581f5a80995d647a662e4ee15d"},{url:"/icons/apple-icon-72x72.png",revision:"bfbcc83a7adcd6d9e543925a5b341bc8"},{url:"/icons/apple-icon-76x76.png",revision:"f653f3f7ed82cd4591efb9f2879bec0a"},{url:"/icons/apple-icon-precomposed.png",revision:"a804c4e33c569d65ce5e8d15ec00e6fe"},{url:"/icons/apple-icon.png",revision:"a804c4e33c569d65ce5e8d15ec00e6fe"},{url:"/icons/favicon-16x16.png",revision:"84b73daec19af9edf9bef72db1c17a6b"},{url:"/icons/favicon-32x32.png",revision:"bfa9762ce85e959307a27412af2adf95"},{url:"/icons/favicon-96x96.png",revision:"e8da79ab70fab11ae501b359a658d02d"},{url:"/icons/favicon.ico",revision:"1c8f0a17358f4e90598115cf5df912db"},{url:"/icons/ms-icon-144x144.png",revision:"b117c318c70f1416782c2919ecbd5710"},{url:"/icons/ms-icon-150x150.png",revision:"dd1fdc386f077338e5e1cc58ca4b07aa"},{url:"/icons/ms-icon-310x310.png",revision:"a332a5543abd4dbdfe431e479280c16f"},{url:"/icons/ms-icon-70x70.png",revision:"934c3eb7891ca79c8b17f7afcb80757b"},{url:"/manifest.json",revision:"92db6fb4b1485ee08d788321730b3bbe"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
