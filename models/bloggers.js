const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blogger = new Schema(
  {
  name:{
    type:String,
    required:true
  },
  blogs:{
    type:Array,
    required:true
  },
  ranking:{
    type:Number,
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
  }

}
);


mongoose.model("bloggers",Blogger);

module.exports = Blogger;