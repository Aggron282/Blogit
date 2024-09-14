var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var feed_routes = require("./routes/feed.js");
const port = 3003;

const app = express();

app.use(bodyParse.urlencoded({extended:false}));

app.use("/feed",feed_routes);

app.listen(port,()=>{
  console.log("App running on localhost:"+port);
})
