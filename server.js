var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var user_routes = require("./routes/user_routes.js");
var auth_routes = require("./routes/auth_routes.js");
var multer = require("multer");
const port = 8080;
const cors = require("cors");
const app = express();

const fileStorage = multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,"/images");
  },
  filename:(req,file,cb) => {
    cb(null, new Date.toISOString() +"-"+ file.originalName)
  }
});
const fileFilter = (req,file,cb) => {
  if(file.mimetype == "png" || file.mimetype == "jpg" || file.mimetype == "gif"){
    cb(null,true);
  }else{
    cb(null,false);
  }
}

app.use(cors());

app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single("image"));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname,"public")));

app.use((req,res,next)=>{

  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,POST,PUT,DELETE");
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept')

  next();

});

app.use(user_routes);
app.use(auth_routes);

app.use((error,req,res,next)=>{

  if(error){
    res.status(error.statusCode).send({message:error.message});
  }
  res.end();


});

mongoose.connect("mongodb+srv://marcokhodr116:nincada12@cluster0.9nkwh9b.mongodb.net/blogit?retryWrites=true&w=majority").then((response,err)=>{

  if(!response){
    return;
  }

  app.listen(port,()=>{
    console.log("App running on localhost:"+port);
  });

});
