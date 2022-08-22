const express = require('express');


const app = express();
// index root  home

app.get("/",function(request,response){
          console.log(request)

          return response.send("<h1>hola mundo </h1>")
})

app.listen(3000, function(){
    console.log('Server running on port 3000');
});