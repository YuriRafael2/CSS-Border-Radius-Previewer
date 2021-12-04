const box = document.getElementById("box");
const boxWidth = document.getElementById("boxWidth");
const boxHeight = document.getElementById("boxHeight");
const topLeft = document.getElementById("topLeft");
const topRight = document.getElementById("topRight");
const botLeft = document.getElementById("botLeft");
const botRight = document.getElementById("botRight");
const widthSpan = document.getElementById("widthSpan");
const heightSpan = document.getElementById("heightSpan");
const topLeftSpan = document.getElementById("topLeftSpan");
const topRightSpan = document.getElementById("topRightSpan");
const botLeftSpan = document.getElementById("botLeftSpan");
const botRightSpan = document.getElementById("botRightSpan");
const resetButton = document.getElementById("reset");
const randomButton = document.getElementById("random");
const copyButton = document.getElementById("copyButton");
const inputIn = document.getElementById("writeIn");

function changeTopLeft() {

    let x = this.value;
    
    if(x > 100 || x < 0) {
        alert(`Invalid number, only values between 0% and 100% are valid`)
    } else {
        
        box.style.borderTopLeftRadius = x+"%";
        
        topLeftSpan.innerHTML = x+"%";
        
        inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`

    }

}

function changeTopRight() {

    let x = this.value;

    if(x > 100 || x < 0) {
        alert(`Invalid number, only values between 0% and 100% are valid`)
    } else {

        box.style.borderTopRightRadius = x+"%";

        topRightSpan.innerHTML = x+"%";
        
        inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`
    
    }

}

function changeBotLeft() {

    let x = this.value;

    if(x > 100 || x < 0) {
        alert(`Invalid number, only values between 0% and 100% are valid`)
    } else {

        box.style.borderBottomLeftRadius = x+"%";

        botLeftSpan.innerHTML = x+"%";
        
        inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`
    
    }

}

function changeBotRight() {

    let x = this.value;

    if(x > 100 || x < 0) {
        alert(`Invalid number, only values between 0% and 100% are valid`)
    } else {

        box.style.borderBottomRightRadius = x+"%";

        botRightSpan.innerHTML = x+"%";
        
        inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`
    
    }

}

function changeWidth() {

    let x = this.value;

    if(x > 360 || x < 0) {
        alert(`Invalid number, only values between 0px and 360px are valid`)
    } else {

        box.style.width = x+"px";

        widthSpan.innerHTML = x+"px";
    
        inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`
    
    }

}

function changeHeight() {

    let x = this.value;

    if(x > 240 || x < 0) {
        alert(`Invalid number, only values between 0px and 240px are valid`)
    } else {

        box.style.height = x+"px";
    
        heightSpan.innerHTML = x+"px";
        
        inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`
    
    }

}

function reset() {

    box.style.width = "360px";
    box.style.height = "240px";
    box.style.borderRadius = "0%";
    widthSpan.innerHTML = "360px";
    heightSpan.innerHTML = "240px";
    topLeftSpan.innerHTML = "0%";
    topRightSpan.innerHTML = "0%";
    botLeftSpan.innerHTML = "0%";
    botRightSpan.innerHTML = "0%";

    topLeft.value = parseInt(box.style.borderTopLeftRadius);
    topRight.value = parseInt(box.style.borderTopRightRadius);
    botLeft.value = parseInt(box.style.borderBottomLeftRadius);
    botRight.value = parseInt(box.style.borderBottomRightRadius);
    boxHeight.value = parseInt(box.style.height);
    boxWidth.value = parseInt(box.style.width);

    inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`

}

function randomize() {

    let min = 0;
    let max = 100;
    let maxWidth = 360;

    box.style.borderTopLeftRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    box.style.borderTopRightRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    box.style.borderBottomLeftRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    box.style.borderBottomRightRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    box.style.height = Math.floor(Math.random() * (maxWidth - min + 1)) + min + "px";
    box.style.width = Math.floor(Math.random() * (maxWidth - min + 1)) + min + "px";

    topLeft.value = parseInt(box.style.borderTopLeftRadius);
    topRight.value = parseInt(box.style.borderTopRightRadius);
    botLeft.value = parseInt(box.style.borderBottomLeftRadius);
    botRight.value = parseInt(box.style.borderBottomRightRadius);
    boxHeight.value = parseInt(box.style.height);
    boxWidth.value = parseInt(box.style.width);

    topLeftSpan.innerHTML = box.style.borderTopLeftRadius;
    topRightSpan.innerHTML = box.style.borderTopRightRadius;
    botLeftSpan.innerHTML = box.style.borderBottomLeftRadius;
    botRightSpan.innerHTML = box.style.borderBottomRightRadius;
    heightSpan.innerHTML = box.style.height;
    widthSpan.innerHTML = box.style.width;

    inputIn.value = `{width: ${widthSpan.innerHTML}; height: ${heightSpan.innerHTML}; border-top-left-radius: ${topLeftSpan.innerHTML}; border-top-right-radius: ${topRightSpan.innerHTML}; border-bottom-left-radius: ${botLeftSpan.innerHTML}; border-bottom-right-radius: ${botRightSpan.innerHTML};}`

}

function copyToClipboard() {

    inputIn.select()
    document.execCommand("Copy")

}

topLeft.addEventListener('change', changeTopLeft)
topRight.addEventListener('change', changeTopRight)
botLeft.addEventListener('change', changeBotLeft)
botRight.addEventListener('change', changeBotRight)
boxWidth.addEventListener('change', changeWidth)
boxHeight.addEventListener('change', changeHeight)
resetButton.addEventListener('click', reset)
randomButton.addEventListener('click', randomize)
copyButton.addEventListener('click', copyToClipboard)

