var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.post('/',function(req,res){
  var metric_value=req.body.metric_value;
  console.log("Metric value = "+metric_value);
  res.end("yes");
});
app.listen(8080,function(){
  console.log("Started on PORT 8080");
})