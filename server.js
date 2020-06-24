const express = require("express");
const app = express();


app.get("/",function (req,res){
  res.send("<h1>Hello World!</h1>");
});


app.get("/contact", function (req,res){
  res.send("Contact me at gaurabroycse@gmail.com");
});

app.get("/about", function(req,res){
  res.send("I am Gaurab Roy");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Coffie</li><li>Cricket</li><li>Football</li><li>Computers</li></ul>");
});
app.listen(3000,function (){
  console.log("Listing from port number 3000");
});
