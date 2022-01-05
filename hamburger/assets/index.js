const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click', active)

function active() {
    nav.classList.toggle('active')
    btn.classList.toggle('active')
}