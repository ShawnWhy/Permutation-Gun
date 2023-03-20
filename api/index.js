var path = require('path');
var express = require('express');
var spellCheck = require('./simple-spellchecker');


var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

app.set('port', process.env.PORT || 8080);

// require("/routes/apiRoutes")(app);

app.get('/api', (req, res) => {
  // const path = `/api/item/${v4()}`;
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end('Hello! Go to item:');
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

  app.post("/api/getSpellCheck",function(req,res){
    console.log("get dictionary")
    var step = 0
    var words = req.body
    console.log(words);
    var newArray = []
    var length = words.length;
    console.log(length)
    words.forEach((word) =>{
     

      
   
    spellCheck.getDictionary("en-US", function(err, dictionary) {
    if(!err) {
      
      step+=1
        var isWord =  dictionary.spellCheck(word);
        if(isWord) {
          console.log("new")
          console.log(word)
          newArray.push(word);
          console.log(newArray)
              
        }
             if(step>length-1){

     console.log(newArray)
    //  res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(JSON.stringify(newArray));
      return res.end();
      
    }
    }
    })
      
})

})


module.exports = app;

// var server = app.listen(app.get('port'), function() {
//   console.log('listening on port ', server.address().port);
// });