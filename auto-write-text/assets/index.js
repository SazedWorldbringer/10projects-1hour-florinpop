const text = "Brandon Sanderson writes the best Fantasy novels!"
let index = 0
const interval = 200

function writeText() {
    document.body.innerText = text.slice(0, index)
    index++
    if(index > text.length) {
        index = 0
    }
}

setInterval(writeText, interval)