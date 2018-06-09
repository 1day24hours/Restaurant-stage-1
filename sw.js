// Service Workrer in sw.js
// cacheName 对应调试工具中高亮位置，缓存的名称
let cacheName = 'restaurant-cache';
//urlsToCache 为存放缓存文件的数组
let urlsToCache = [
    '/',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
];

// Install files to service worker's cache
self.addEventListener('install',  event => {
    //Perform install steps
    event.waitUntil(
        // cacheName 对应调试工具中高亮位置，缓存的名称
        // 调用 `cache.open` 方法后才可以缓存文件
        caches.open(cacheName)
            .then( cache => {
             // urlsToCache 为存放缓存文件的数组
                 console.log('Opened cache');
                 return cache.addAll(urlsToCache);
        }).then( ()=> {
            return self.skipWaiting();
        })
    );
});

// Installed or Waiting


// Activate
self.addEventListener('activate', event => {
    //delet extra cache version
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key != cacheName) {
                        return caches.delete(key);
                    }
                })
            )
        })
    )
    //The claim() method causes those pages to be controlled immediately. 
    event.waitUntil(clients.claim());
});

// Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
     caches.match(event.request, {ignoreSearch:true}).then(response => {
         return response || fetch(event.request);
     }).catch(err => console.log(err, event.request))
    );
});

