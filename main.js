let updateIntervalId; // 儲存 setInterval 的 ID

document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "伺服器的喵能量不足，正在充電！ 🔋🐱",
        "貓咪說今天不上班，請稍後再試！ 😼🚧",
        "Oops！小貓玩得太瘋，把網頁弄壞了！ 🤦‍♂️🐾",
        "我們的貓開發者正在修復問題，請耐心等候！ 💻🐾",
        "喵！你的請求被貓貓偷偷藏起來了！ 🐱🎁",
        "這不是你的問題，是貓咪的！ 🐈💥",
        "嘿，我們的貓管家正在整理線路，馬上回來！ 🛠️🐈",
        "喵嗚！小貓不小心把伺服器踢倒了，正在努力扶正喔！ 🐾💻😿",
        "糟糕！小貓跳上鍵盤，結果網站當機了……我們正在修復！ 🐱⌨️🚨",
        "喵～小貓太好奇，咬了一口網線，現在工程師正在接回去！ 🐈‍⬛🔌🔧",
        "喵的！伺服器變成貓抓板了，別擔心，我們正在修復中！ 🐾🖥️💥",
        "喔不！小貓鑽進機房，把電源線當玩具……我們馬上讓網站恢復！ 🐈⚡🔋",
        "不，是小貓趴在伺服器上睡著了……輕輕等一下喔！ 💤🐾💻",
        "喵喵！其實是小貓偷偷關了開關，已派工程師哄回來！ 😼🔘🔄",
        "抱歉，小貓踩到了『暫停』按鈕，我們馬上恢復運行！ 🐾⏸️🔄",
        "喵～網站被小貓叼走了，正在追回來的路上！ 🏃🐱💨",
        "喵嗚，原來是小貓覺得這個錯誤頁面很可愛，所以決定多停留一會兒～🥹🐈🎨",
        "哇嗚～網頁被貓爪刪除了，我們正在復原！ 🐾❌",
        "啊！此網頁目前被貓主子佔領，請稍後再試！ 🏰🐈",
        "小貓躺在伺服器上取暖，網站暫時冬眠中……❄️🐱🔥",
        "喵喵喵～貓咪開了飛航模式，我們正在降落回地球！🛬🐈📡",
        "貓咪上班第一天就打翻了資料庫，正在一頁一頁撿回來中～📚😿",
        "小貓正在用網頁當抓抓樂板，我們正請它放下爪子！🐾🖥️",
        "伺服器進入貓咪冥想模式中……請輕聲等候～🧘🐈‍⬛🌙",
        "開發貓走神去追雷射筆了，稍等一下牠回來修網頁！🔦🐱💨",
        "喵的，貓咪偷偷更改了原始碼……我們正在解碼！💻🐾🔍",
        "小貓以為按下的是零食機，結果是重啟鍵……🍗🔁🐈",
        "開發貓剛睡醒，還在伸懶腰～請給牠一點時間回神！🛌🐱☕",
        "喵～小貓把 CSS 捲成毛球帶走了，樣式正在尋回中！🎨🐾🧶",
        "抱歉，小貓今天開了隱身模式，我們找不到牠！🔍🐈‍⬛🫥",
        "網站目前進入貓咪午睡時段，請稍後回來～😴🐾🕐",
        "貓咪打了個噴嚏，整個後端斷線了……正在恢復！😹🌐💨",
        "喵星人正在重新排列 HTML，請容牠多想幾秒鐘！🧠🐱📄",
        "小貓誤以為這是貓砂區，埋了網站檔案……正在挖出來！⛏️🐈🪦",
        "系統正在等待貓主子簽核……牠還在磨爪子中 📝🐾😼",
        "不好意思，貓咪在和滑鼠吵架，網頁卡在中間了！🖱️🐱💢",
        "這不是你的問題，是我們的貓團隊集體打瞌睡！💤😹💻",
        "喵嗚！頁面迷路了，小貓正在聞線索找路回家～🔎🐾🗺️",
        "網站暫停，是因為小貓在跳鍵盤舞蹈秀～⌨️🐈🎶"
    ];

    function updateMessage() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const messageElement = document.getElementById("error-message");
        if (messageElement) {
            messageElement.innerText = randomMessage;
        }
    }

    updateMessage();
    updateIntervalId = setInterval(updateMessage, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".retry-button").addEventListener("click", function (event) {
        event.preventDefault();

        clearInterval(updateIntervalId); // 停止訊息輪播

        const errorMessages = document.querySelectorAll("#error-message");
        errorMessages.forEach(msg => msg.remove());

        document.body.innerHTML = '';
        document.body.style.backgroundColor = '#343541';

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'sleeping.css'; // 請確保這個 CSS 存在
        document.head.appendChild(link);

        const container = document.createElement('div');
        container.className = 'container';
        container.innerHTML = `
                    <div class="shadow"></div>
                    <div class="cat">
                        <div class="ear"></div>
                        <div class="eye"></div>
                        <div class="mouth"></div>
                        <div class="nose"></div>
                        <div class="tail"></div>
                        <div class="body"></div>
                        <div class="bubble"></div>
                    </div>
                    <p class="wake-up-message"><strong>請叫醒沉睡的喵師傅！讓牠起來修理調皮的小貓！</strong></p>
                    <button class="count-button">叫醒牠</button>
                `;
        document.body.appendChild(container);

        let clickCount = 0;
        document.querySelector(".cat").addEventListener("click", function () {
            clickCount++;
            if (clickCount >= 15) {
                document.querySelector(".wake-up-message").innerHTML = "<strong>喵師傅要醒拉！</strong>";
                document.querySelector(".cat").classList.add("awake");
                /*document.querySelector(".count-button").remove();*/
                setTimeout(() => {
                    window.location.href = 'https://catgpt.wvd.io/';
                }, 1500);
            }
        });
    });
});
