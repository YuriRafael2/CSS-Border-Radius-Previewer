const leftBot = document.getElementById("leftBot");
const leftTop = document.getElementById("leftTop");
const rightBot = document.getElementById("rightBot");
const rightTop = document.getElementById("rightTop");
const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const botLeft = document.getElementById("botLeft");
const botRight = document.getElementById("botRight");
const box = document.getElementById("box");

var borderRightBot = box.style.borderBottomRightRadius;
var borderRightTop = box.style.borderTopRightRadius;

leftBot.oninput = function() {

    let x = this.value;
    box.style.borderBottomLeftRadius = x+"%";

}

leftTop.oninput = function() {

    let x = this.value;
    box.style.borderTopLeftRadius = x+"%";

}

rightBot.oninput = function() {

    let x = this.value;
    box.style.borderBottomRightRadius = x+"%";

}

rightTop.oninput = function() {

    let x = this.value;
    box.style.borderTopRightRadius = x+"%";

}



