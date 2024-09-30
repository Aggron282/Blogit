var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email:{
    required:true,
    type:String
  },
  profileImg:{
    required:false,
    type:String
  },
  password:{
    required:true,
    type:String
  },
  status:{
    required:false,
    type:String
  },
  posts:[{
    ref:"Blogs",
    type:Schema.Types.ObjectId
  }]
})


module.exports = mongoose.model("users",User);
