const interval = 300
const arr = ["❤️", "💜", "💛", "💙", "🤍"]
function createHeart() {
    const heart = document.createElement('div')
    heart.classList.add('heart')

    heart.style.left = Math.random() * 100 + "vw"

    heart.innerText = arr[Math.floor(Math.random() * arr.length)]

    heart.style.animationDuration = Math.random() * 2 + 3 +'s'

    document.body.appendChild(heart)
}

setInterval(createHeart, interval);