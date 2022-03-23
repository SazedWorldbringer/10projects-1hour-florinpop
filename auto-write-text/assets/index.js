const text = "Brandon Sanderson writes the best Fantasy novels!";
let index = 0;
const interval = 200;
const writeInPara = document.getElementById("write-text");

function writeText() {
  writeInPara.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    writeInPara.innerText = text;
  }
}

setInterval(writeText, interval);
