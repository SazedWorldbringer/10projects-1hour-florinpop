const sounds = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"]
const container = document.getElementById('container')
const colors = ['#022F40', '#38AECC', '#0090C1', '#183446', '#046E8F', '#B8336A', '#C490D1', '#FC440F', '#1EFFBC']

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.classList.add('btn')
    btn.setAttribute('id', 'btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    container.appendChild(btn)
})

const btn = document.getElementById('btn')
const btns = document.querySelectorAll('.btn')

for(let i = 0; i < btns.length; i++) {
    let n = Math.floor(Math.random() * colors.length)
    btns[i].style.backgroundColor = colors[n]
}

