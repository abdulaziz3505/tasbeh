const title = document.querySelector(".title")
let text = document.querySelector("h3")
const box = document.querySelector(".box")



// document = html
console.log(document.head);
console.log(title);
console.log(text);

console.log(box);


// loremIpsumDolor
// LoremIpsumDolor

function changeH3() {
    text.style.color = "red"
text.style.fontSize = "32px"
text.style.background = "gold"
}

function defaultH3() {
    text.style.color = "black"
    text.style.fontSize = "15px"
text.style.background = "white"
}

let number = 0
function rotateBox() {
    number++
    console.log(number);
    box.style.transform = `rotate(${number * 45}deg)`
}




















