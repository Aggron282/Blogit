const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Reader = new Schema(
  {
  name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  profileImg:{
    type:String,
    required:False
  },
  tags:{
    type:Array,
    required:true
  },
  read_blogs:{
    type:Array,
    required:true
  },
  reviews:{
    type:Array,
    required:true
  }

}

);


mongoose.model("readers",Reader);

module.exports = Reader;
