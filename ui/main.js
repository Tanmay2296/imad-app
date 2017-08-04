console.log('Loaded!');

var button = document.getElementById("counter");

button.onclick = function() {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
        //Take some action
    if(request.status === 200) {    
    var counter = request.responseText;        
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
        }
        
        }
        
    };
    //request
    request.open("GET","http://tanmayrox1996.imad.hasura-app.io/counter",true);
    request.send(null);
    
}

var nameInput = document.getElementById("name");
var name = nameInput.value;
var Submit = document.getElementById("submit");
submit.onclick = function() {
    //make a request to server
    // display
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for (var i=0;i<names.length;i++){
        list += '<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
};