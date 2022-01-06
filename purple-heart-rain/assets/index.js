const addHeartInterval = 500
const removeHeartInterval = 5000
const arr = ["❤️", "💜", "💛", "💙", "🤍"]
function createHeart() {
    const heart = document.createElement('div')
    heart.classList.add('heart')

    heart.style.left = Math.random() * 100 + "vw"

    heart.innerText = arr[Math.floor(Math.random() * arr.length)]

    heart.style.animationDuration = Math.random() * 2 + 3 +'s'

    document.body.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, removeHeartInterval);
}

setInterval(createHeart, addHeartInterval);