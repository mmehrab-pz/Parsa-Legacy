// ----------------------------start----------------------------
// ------------sounds----------------
let music = document.getElementById('music')
let readySound = document.getElementById('readySound')
let whoosh = document.getElementById('whoosh')
// ---------------------------------------
let startBtn = document.getElementById('start-btn')
let mission = document.getElementById('mission')
let textBack = document.getElementById('textBack')
let startGame = document.getElementById('startGame')

let loadingBox = document.getElementById('loading')
const missionText = 'پارسا قربانیان، قاتل کدهای سرگردان کهکشان راه شیری، کسی‌ست که سیارات جاوااسکریپت و ری‌اکت را به‌همراه فرزندان معنوی‌اش فتح کرده است. در آخرین مأموریتش، در حالی که در تلاش برای فتح قله‌های هوش مصنوعی بود، ارتباطش را با سپاهیان خود از دست داد. اکنون او اسیر ربات‌های خون‌خوار کهکشان شده و در هزارتویی تاریک و عمیق زندانی‌ست. قهرمان قصه‌ی ما به کمک شما نیاز دارد تا از چنگال‌های آغشته به خونِ این ربات‌ها فرار کند. پارسا را نجات دهید تا عنوان قهرمان جدید کهکشان را از آنِ خود کنید.'
const word = missionText.split(' ')
let i = 0

startBtn.addEventListener('click' , ()=>{
    music.play()
    startBtn.style.display = 'none'
    textBack.style.opacity = '1'
    textBack.style.transform = 'scaleY(1)'
    typeWord()
})
function typeWord(){
    mission.style.display = 'inline-block'
    if(i < word.length){
        mission.innerHTML += word[i] + ' ';
        i++;
        setTimeout(typeWord, 150); // سرعت تایپ کلمه‌ها
    }else{
        startGame.style.display = 'flex'
    }
}

startGame.addEventListener('click' , ()=>{
    readySound.play()
    document.getElementById('start-frame').remove()
    startGame.remove()
    loadingBox.style.display = 'flex'
    music.pause()
    loading()
})

function loading(){
    setTimeout(() => {
        loadingBox.remove()
        document.getElementById('ship1').remove()
        document.getElementById('ship2').remove()
        whoosh.play()
    }, 6000);
}




















// ----------------------------game----------------------------
let parsa = document.getElementById('parsa')
let enemies = document.querySelectorAll(".enemy")
let finish = document.getElementById('finish')
let _top = 30
let _left = 165

function CheckCollision(a, b) {
    const aRect = a.getBoundingClientRect()
    const bRect = b.getBoundingClientRect()
    console.log(aRect);
    console.log(bRect);


    return !(
        aRect.right < bRect.left ||
        aRect.left > bRect.right ||
        aRect.bottom < bRect.top ||
        aRect.top > bRect.bottom
    );
}

function checkfinish(c , d){
    const cRect = c.getBoundingClientRect()
    const dRect = d.getBoundingClientRect()

    return !(
        cRect.right < dRect.left ||
        cRect.left > dRect.right ||
        cRect.bottom < dRect.top ||
        cRect.top > dRect.bottom
    );
}

document.addEventListener('keydown', (e) => {
    let keyword = e.key
    console.log(keyword);

    switch (keyword) {
        case 'd':
            _left += 10
            break;
        case 'a':
            _left -= 10
            break;
        case 'w':
            _top -= 10
            break;
        case 's':
            _top += 10
            break;
    }

    for (let enemy of enemies) {
        if (CheckCollision(parsa, enemy)) {
            parsa.style.left = `165px`
            parsa.style.top = `30px`
            _top = 30
            _left = 165
        }
    }

    if(checkfinish(parsa , finish)){
        alert("you win")
    }

    parsa.style.left = `${_left}px`
    parsa.style.top = `${_top}px`
})