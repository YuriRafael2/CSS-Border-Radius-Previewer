const center = document.getElementById("center");

function topLeft() {
    
    let tLeft = document.getElementById("top-left").value;
    
    if(tLeft >= 0 && tLeft <= 100 && tLeft != "") {
        center.style.borderTopLeftRadius = tLeft + "%";
        document.getElementById("top-left-span").innerText = tLeft + "%;";
    } else if(tLeft == ""){
        center.style.borderTopLeftRadius = 0 + "%";
        document.getElementById("top-left-span").innerText = 0 + "%;";
    } else {
        alert("Invalid value, put a number between 0 and 100 for a valid value to the border percentage");
    }

}

function topRight() {

    let tRight = document.getElementById("top-right").value;

    if(tRight >= 0 && tRight <= 100 && tRight != "") {
        center.style.borderTopRightRadius = tRight + "%";
        document.getElementById("top-right-span").innerText = tRight + "%;";
    } else if(tRight == ""){
        center.style.borderTopRightRadius = 0 + "%";
        document.getElementById("top-right-span").innerText = 0 + "%;";
    } else {
        alert("Invalid value, put a number between 0 and 100 for a valid value to the border percentage");
    }


}

function bottomLeft() {

    let lBottom = document.getElementById("bottom-left").value;

    if(lBottom >= 0 && lBottom <= 100 && lBottom != "") {
        center.style.borderBottomLeftRadius = lBottom + "%";
        document.getElementById("bottom-left-span").innerText = lBottom + "%;";
    } else if(lBottom == ""){
        center.style.borderBottomLeftRadius = 0 + "%";
        document.getElementById("bottom-left-span").innerText = 0 + "%;";
    } else {
        alert("Invalid value, put a number between 0 and 100 for a valid value to the border percentage");
    }

}

function bottomRight() {

    let bRight = document.getElementById("bottom-right").value;

    if(bRight >= 0 && bRight <= 100 && bRight != "") {
        center.style.borderBottomRightRadius = lBottom + "%";
        document.getElementById("bottom-right-span").innerText = bRight + "%;";
    } else if(bRight == ""){
        center.style.borderBottomRightRadius = 0 + "%";
        document.getElementById("bottom-right-span").innerText = 0 + "%;";
    } else {
        alert("Invalid value, put a number between 0 and 100 for a valid value to the border percentage");
    }

}

function widthResize() {

    let newWidthSize = document.getElementById("width-resizer").value;

    if(newWidthSize >= 0 && newWidthSize <= 480 && newWidthSize != "") {
        center.style.width = newWidthSize + "px";
        document.getElementById("width-span").innerText = newWidthSize + "px;";
    } else if(newWidthSize == "") {
        center.style.width = 480 + "px";
        document.getElementById("width-span").innerText = 480 + "px;";
    } else {
        alert("Invalid value, put a number between 0 and 480 for a valid value to the width you want")
    }

}

function heightResize() {

    let newHeightSize = document.getElementById("height-resizer").value;

    if(newHeightSize >= 0 && newHeightSize <= 240 && newHeightSize != "") {
        center.style.height = newHeightSize + "px";
        document.getElementById("height-span").innerText = newHeightSize + "px;";
    } else if(newHeightSize == "") {
        center.style.height = 240 + "px";
        document.getElementById("height-span").innerText = 240 + "px;";
    } else { 
        alert("Invalid value, put a number between 0 and 240 for a valid value to the width you want");
    }

}

function reset() {
    
    center.style.borderRadius = 0 + "px";
    center.style.width = 480 + "px";
    center.style.height = 240 + "px";

    document.getElementById("top-left").value = "";
    document.getElementById("top-right").value = "";
    document.getElementById("bottom-left").value = "";
    document.getElementById("bottom-right").value = "";
    document.getElementById("width-resizer").value = "";
    document.getElementById("height-resizer").value = "";

    document.getElementById("width-span").innerText = "";
    document.getElementById("height-span").innerText = "";
    document.getElementById("top-left-span").innerText = "";
    document.getElementById("top-right-span").innerText = "";
    document.getElementById("bottom-left-span").innerText = "";
    document.getElementById("bottom-right-span").innerText = "";

}

function borderRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    center.style.borderTopLeftRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    center.style.borderTopRightRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    center.style.borderBottomLeftRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";
    center.style.borderBottomRightRadius = Math.floor(Math.random() * (max - min + 1)) + min + "%";

    document.getElementById("top-left-span").innerText = center.style.borderTopLeftRadius;
    document.getElementById("top-right-span").innerText = center.style.borderTopRightRadius;
    document.getElementById("bottom-left-span").innerText = center.style.borderBottomLeftRadius;
    document.getElementById("bottom-right-span").innerText = center.style.borderBottomRightRadius;

}

function widthRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    center.style.width = Math.floor(Math.random() * (max - min + 1)) + min + "px";

    document.getElementById("width-span").innerText = center.style.width;

}

function heightRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    center.style.height = Math.floor(Math.random() * (max - min + 1)) + min + "px";

    document.getElementById("height-span").innerText = center.style.height;

}

function apply() {
    topLeft();
    topRight();
    bottomLeft();
    bottomRight();
    widthResize();
    heightResize();
}

function random() {
    borderRandom(0, 100);
    widthRandom(0, 480);
    heightRandom(0, 240);
}