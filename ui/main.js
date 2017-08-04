console.log('Loaded!');

// made some changes

var element = document.getElementById("new");
element.innerHTML="New Value";

//move the  image

var img = doucument.getElementById("madi");
img.onclick = function () {
    img.style.marginLeft = '100px';
}