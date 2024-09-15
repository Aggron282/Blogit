const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogPost = new Schema(
  {
  title:{
    type:String,
    required:true
  },
  ranking:{
    type:Number,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  authorID:{
    type:String,
    required:true
  },
  timestamp:{
    type:String,
    required:true
  },
  subtitle:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  tags:{
    type:Array,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  likes:{
    type:Number,
    required:true
  },
  views:{
    type:Number,
    required:true
  },
  dislikes:{
    type:Number,
    required:true
  },
  comments:{
    type:Array,
    required:true
  }
}
);


mongoose.model("blog_posts",BlogPost);

module.exports = BlogPost;
