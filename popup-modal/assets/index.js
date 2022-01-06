const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const container = document.getElementById('container')


function openModal() {
    container.classList.add('active')
}

function closeModal() {
    container.classList.remove('active')
}

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)