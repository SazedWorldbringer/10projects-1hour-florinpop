const imgs = document.getElementById('imgs')
let idx = 0
const img = document.querySelectorAll('#imgs img')

function runCarousel() {
    idx++

    imgs.style.transform = `translateX(${-idx * 500}px)`

    if(idx > imgs.length - 1) {
        idx = 0
        imgs.style.transform = `translateX(${idx})`
    }
}

setInterval(runCarousel, 2000)
