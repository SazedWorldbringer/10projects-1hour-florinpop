const btn = document.getElementById('btn')
const container = document.getElementById('container')
const timeout = 3000
btn.addEventListener('click', createNotification)

function createNotification() {
    const notif = document.createElement('div')
    notif.innerText = "This challenge is crazy!"
    notif.classList.add('toast')

    container.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    }, (timeout));
}