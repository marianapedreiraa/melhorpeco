var cacheName = 'melhorpreco';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './images/images/appstore.png',
        './images/images/banner.png',
        './images/images/pic01.png',
        './images/images/Designer.png',
        './images/images/pic02.png',
        './images/images/pic03.png',
        './images/images/playstore.png',
        './images/images/spotlight01.png',
        './images/images/spotlight02(1).png',
        './images/images/spotlight03.png',
        './images/images/ios/16.png',
        './images/images/20.png',

        './assets/img/58/29.png',
        './assets/img/58/32.png',
        './assets/img/58/40.png',
        './images/AppImages/58.png',
        './images/AppImages/57.png',
        './images/AppImages/60.png',
        './images/AppImages/64.png',
        './images/AppImages/72.png',
        './images/AppImages/76.png',
        './images/AppImages/80.png',
        './images/AppImages/87.png',
        './images/AppImages/100.png',
        './images/AppImages/114.png',
        './images/AppImages/120.png',
        './images/AppImages/128.png',
        './images/AppImages/144.png',
        './images/AppImages/152.png',
        './images/AppImages/167.png',
        './images/AppImages/180.png',
        './images/AppImages/192.png',
        './images/AppImages/256.png',
        './images/AppImages/512.png',
        './images/AppImages/1024.png',
        './assets/img/01.png',
        './assets/img/02.png',
        './assets/img/03.png',
        './assets/img/04.png',
        './assets/img/05.png',
        './assets/img/06.png',
        './assets/img/07.png',
        './assets/img/08.png',
        './assets/img/09.png',
        './assets/img/10.png',
        './assets/img/11.png',
        './assets/img/12.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
