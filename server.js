var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var user_routes = require("./routes/user_routes.js");
const port = 3003;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(req,res,next){
  req.setHeader("Access-Control-Allow-Origin","*")
  req.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,POST,PUT,DELETE");
  req.setHeader("Access-Control-Allow-Header","Content-Type: Authorization")

}
app.use(user_routes);

app.listen(port,()=>{

  console.log("App running on localhost:"+port);
})
