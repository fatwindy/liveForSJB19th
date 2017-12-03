var dp = new DPlayer({
    container: document.getElementById('player1'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'http://13004.liveplay.myqcloud.com/live/13004_35348bb9c85d11e792905cb9018cf0d4_550.flv',
        type: 'flv'
    },
    danmaku: {
        id: 'testid',
        api: 'http://123.207.140.186:1207'
    },
    icons: {
        play: [
            '0 0 24 24',
            'M8 5v14l11-7z',
            '24' // Icon size
        ],
        pause: [
            '0 0 24 24',
            'M6 19h4V5H6v14zm8-14v14h4V5h-4z',
            '24' // Icon size
        ]
    }
});

const socket = io('http://127.0.0.1:1207');

socket.on("danma_push", (data) => {
    console.log(data);
    dp.danmaku.draw(data);
    console.log(Date.now())
})

dp.on("danmaku_send", (data) => {
    console.log(Date.now())
    console.log(data);
    socket.emit("danma_send", data);
    console.log("send a tanmu to server!");
});

