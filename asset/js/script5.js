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