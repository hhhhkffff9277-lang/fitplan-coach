const CACHE_VERSION = "fitplan-pwa-v4";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./service-worker.js",
  "./manifest.webmanifest",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/apple-touch-icon.svg"
];

const EXERCISE_ASSETS = [
  "./assets/exercises/短跑加速跑.gif",
  "./assets/exercises/Backward-Medicine-Ball-Throw.gif",
  "./assets/exercises/俯卧支撑划船.gif",
  "./assets/exercises/哑铃卧推.gif",
  "./assets/exercises/杠铃后蹲.gif",
  "./assets/exercises/椭圆机有氧.gif",
  "./assets/exercises/罗马尼亚硬拉.gif",
  "./assets/exercises/高位下拉.gif",
  "./assets/exercises/死虫式.gif",
  "./assets/exercises/壶铃摆动.gif",
  "./assets/exercises/标准俯卧撑.gif",
  "./assets/exercises/猫牛式.gif",
  "./assets/exercises/靠墙滑臂.gif",
  "./assets/exercises/鸟狗式.gif",
  "./assets/exercises/功率车间歇.jpg",
  "./assets/exercises/绳索抗旋推.gif",
  "./assets/exercises/坐姿划船.gif",
  "./assets/exercises/腿弯举.gif",
  "./assets/exercises/后束划船.gif",
  "./assets/exercises/引体向上.gif",
  "./assets/exercises/杠铃卧推.gif",
  "./assets/exercises/跳箱.gif",
  "./assets/exercises/器械夹胸.gif",
  "./assets/exercises/划船机.gif",
  "./assets/exercises/杠铃俯身划船.gif",
  "./assets/exercises/空心支撑.webp",
  "./assets/exercises/保加利亚分腿蹲.gif",
  "./assets/exercises/反向飞鸟.gif",
  "./assets/exercises/直臂下压.gif",
  "./assets/exercises/反向箭步蹲.gif",
  "./assets/exercises/跳绳.gif",
  "./assets/exercises/相扑硬拉.gif",
  "./assets/exercises/上斜俯卧撑.gif",
  "./assets/exercises/站姿推举.gif",
  "./assets/exercises/腿屈伸.gif",
  "./assets/exercises/高脚杯深蹲.gif",
  "./assets/exercises/髋屈肌拉伸.gif",
  "./assets/exercises/弓步转体拉伸.gif",
  "./assets/exercises/腿举.gif",
  "./assets/exercises/立定跳远.gif",
  "./assets/exercises/胸椎旋转.gif",
  "./assets/exercises/臀桥推髋.gif",
  "./assets/exercises/绳索面拉.gif",
  "./assets/exercises/平板支撑.gif",
  "./assets/exercises/哑铃侧平举.gif",
  "./assets/exercises/哑铃飞鸟.gif",
  "./assets/exercises/窄距俯卧撑.gif",
  "./assets/exercises/阿诺德推举.gif",
  "./assets/exercises/踝关节活动度训练.gif",
  "./assets/exercises/提踵.gif",
  "./assets/exercises/药球前抛.gif",
  "./assets/exercises/弹力带肩外旋.gif",
  "./assets/exercises/侧桥支撑.webp",
  "./assets/exercises/单边哑铃划船.gif",
  "./assets/exercises/Side-Plank-Hip-Adduction-Copenhagen-adduction.gif",
  "./assets/exercises/绳索夹胸.gif",
  "./assets/exercises/哑铃划船.gif"
];

const PRECACHE_ASSETS = [...CORE_ASSETS, ...EXERCISE_ASSETS];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => {
        if (key !== CACHE_VERSION) return caches.delete(key);
        return Promise.resolve();
      })))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200) return response;
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
