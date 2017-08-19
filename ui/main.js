console.log('Loaded!');

var button = document.getElementById("counter");

var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit");
submit.onclick = function() {
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
        //Take some action
    if(request.status === 200) {
        console.log('user logged in!');
        alert('user logged in!');
    }else if (request.status === 403){
        console.log('Wrong Input!!');
        alert('Wrong Input!1');
    } 
         else if (request.status === 500) {
        alert('Something went wrong!');
    }
  
    //make a request to server
    // display
    var names = request.responseText;
    names = JSON.parse(names);
    var list = "";
    for (var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
        }
        
        }
    }    
        
    };
    //request
    request.open("GET","http://tanmayrox1996.imad.hasura-app.io/submit-name?name=" + name,true);
    request.send(null);
    
