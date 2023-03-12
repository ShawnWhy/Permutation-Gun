var spellCheck = require('simple-spellchecker');

module.exports = function(app) {


  //getting the information from the stored results for movie search
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


  

}
 
 





 
   
     
   
