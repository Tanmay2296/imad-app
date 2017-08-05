var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
 'article-one': {
     title: 'Article One | Tanmay NT',
     date:'Aug 6, 2017',
     content: `  <p> 
                  This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.
                </p>
            
                    <p>
                      This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.
                    </p>
                    
                    <p>
                      This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.This is some content for article-one.
                    </p>`
                    
                    
},
 'article-two': {
     title: 'Article Two | Tanmay NT',
     heading: 'Article Two',
     date:'Aug 6, 2017',
     content: ` 
                 <p>
                 This is some content for article-Two.
                  </p>`
                  
},

 'article-three': {
    title: 'Article Three | Tanmay NT',
     heading: 'Article Three',
     date:'Aug 6, 2017',
     content: ` 
                <p> 
                  This is some content for article-Three.
                 </p>`
        
    }
    
};


function createTemplate (data) {
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = 
    `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head> 
        
        <body>
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            
            <div>
                ${date}
            </div>
            
            <div>
                ${content}
            
            </div>
            
            
            
            
        </body>
        
        
    
    </html>

`;
return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
    // article name = article - one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



/*var counter = 0;
app.get('/counter', function (req,res){
counter = counter + 1;
res.send(counter.toString());
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



/*var names = [];
app.get('/submit-name', function(req, res) {
   var name = req.query.name;
   
   names.push(name);
   
   res.send(JSON.stringify(names));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
*/


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
