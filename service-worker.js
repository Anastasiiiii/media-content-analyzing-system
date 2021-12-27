/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f03c0c3553cccd86e3f5908b17e5db9b"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.6dab912d.css",
    "revision": "14c14ae2149c6ed8eba72d18c089304e"
  },
  {
    "url": "assets/img/add_id_5.b48b8eb6.png",
    "revision": "b48b8eb6ccd2506ed31ccd59266457c8"
  },
  {
    "url": "assets/img/delete_id_2.69f780a9.png",
    "revision": "69f780a9a8215d823bcb861c34d32d5c"
  },
  {
    "url": "assets/img/EER-diagram.c3eca197.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "assets/img/get_all.4d16c3c6.png",
    "revision": "4d16c3c6fe88e2d8168c0b49b41cf9a8"
  },
  {
    "url": "assets/img/get_id_1.f6eaf1b5.png",
    "revision": "f6eaf1b560261bc1dd8180cdf2ff23aa"
  },
  {
    "url": "assets/img/get_id_3.f6c65117.png",
    "revision": "f6c651177dee80da89033806436a024c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update.c0e4327a.png",
    "revision": "c0e4327a0bec54664d8fbfd9e7c89b2e"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.e88c2f10.js",
    "revision": "088b8e03b243821fd63dfbff62e63ede"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.1235106f.js",
    "revision": "c189777185cac4fb7b86e60fd2724eb3"
  },
  {
    "url": "assets/js/14.46ab93fd.js",
    "revision": "881b4a2d96a2ab89fac2de82dcf9ed5f"
  },
  {
    "url": "assets/js/15.be5fee15.js",
    "revision": "5e0eec27f980761549d0a9d065fb6c6b"
  },
  {
    "url": "assets/js/16.845f1d0d.js",
    "revision": "6444b5aa95bef9a8af2f3762b89d7d0f"
  },
  {
    "url": "assets/js/17.2aa3b1e6.js",
    "revision": "1bc05970f52eedbb22d6b5b727d04a0f"
  },
  {
    "url": "assets/js/18.2002ca3b.js",
    "revision": "6af711dd7b6113961f64b141e3d6c4b6"
  },
  {
    "url": "assets/js/19.77f8ad78.js",
    "revision": "f771fb5c3a884ad273eedb73c1226994"
  },
  {
    "url": "assets/js/2.9586d0be.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.374134d6.js",
    "revision": "5a4251c1fc49cbffe5cac9fcc8282c98"
  },
  {
    "url": "assets/js/21.1d81cb65.js",
    "revision": "62132e3309f3a2ca6632dbe2ebafdc89"
  },
  {
    "url": "assets/js/22.4d4c4f29.js",
    "revision": "44e43356c0dc60a2f71edf3bdb9be1f0"
  },
  {
    "url": "assets/js/23.3ed25dc3.js",
    "revision": "2f9ba377eb3a05665516f9895f9a3afc"
  },
  {
    "url": "assets/js/24.0135063f.js",
    "revision": "2a06c6178560d5619d79706eb77305aa"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.1a17d55a.js",
    "revision": "da12692cacd0e29dd4f83a42314ba884"
  },
  {
    "url": "assets/js/4.1ac57b5d.js",
    "revision": "9a2f229d99e9afcfced89bcdb05e78d1"
  },
  {
    "url": "assets/js/5.5884a570.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.e6f8d4c6.js",
    "revision": "43172c669c0f0ebf0c90d6618f905acc"
  },
  {
    "url": "assets/js/7.65afe2dc.js",
    "revision": "f13a5d572304c1bc22de490459638c3b"
  },
  {
    "url": "assets/js/8.a49c3360.js",
    "revision": "df326aaaddeb4aa9f501deed1cc9b4ae"
  },
  {
    "url": "assets/js/9.8e47c8a5.js",
    "revision": "d2248106083086d391051d7041ba8ec3"
  },
  {
    "url": "assets/js/app.553beb38.js",
    "revision": "b45e5fc472749601b1069ac15ebb64da"
  },
  {
    "url": "conclusion/index.html",
    "revision": "55751660c62c287d42f5c204ca5c6129"
  },
  {
    "url": "design/index.html",
    "revision": "d8a4f7eea49fcc11cdf49f0e445c2d66"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "703f2037df2ac59066abfb1d28896a4f"
  },
  {
    "url": "intro/index.html",
    "revision": "40d70ae34ca42a10f257d52a81a3e5a2"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1dc8da2efc4b2e4d8d54d4f43108ae1f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4fc9d03f7110991de671ce2e8f8d0f16"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "db99a3dca83ea23fa700d07e53fc7b5b"
  },
  {
    "url": "software/index.html",
    "revision": "23f844529166e96621dcdccab0ded8f8"
  },
  {
    "url": "test/index.html",
    "revision": "84d7e08d94c7470c09baf40320fff439"
  },
  {
    "url": "use cases/index.html",
    "revision": "2c30ba5d8a60684184bacbafd9499bf3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
