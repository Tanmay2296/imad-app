console.log('Loaded!');

// made some changes

var element = document.getElementById("new");
element.innerHTML="New Value";

//move the  image

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + "px"; //concat
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
}