var dummy_posts = require("./../data/dummy_posts.js");
const formidable = require("formidable");
const {validationResult} = require("express-validator");

var default_posts = dummy_posts.CreateDummyPosts();

const BlogPost = require("./../models/blog_post.js");
const {ObjectId} = require("mongoose");
const GetPosts = async (req,res,next)=>{

  BlogPost.find({}).then(async (posts)=>{

      if(posts.length <= 0){
        throw new Error("No Posts Found");
      }

      res.status(200).json({posts:posts});

  }).catch((err)=>{
      err.statusCode = err.statusCode ? err.statusCode : 500;
      next(err);
  })

}

const DeletePost = (req,res,next) => {
  var _id = req.body._id;
  BlogPost.deleteOne({_id:_id}).then((result)=>{
  res.json(result)
  }).catch((err)=>{
    console.log(err);
    next(err);
  });
}

const EditPost =  (req,res,next) => {

  var _id = req.body._id;
  var selected_blog = req.body.blog;

  BlogPost.findById(_id).then(async (found_blog)=>{
    if(!found_blog){
      throw new Error("No Blog Found")
    }
    else{

      var new_blog = {...found_blog};
      var img_url = selected_blog.thumbnail ? selected_blog.thumbnail : found_blog.thumbnail;

      new_blog.thumbnail = img_url;

      var replace = {$set:{
        title:selected_blog.title,
        subtitle:selected_blog.subtitle,
        catagory:selected_blog.catagory,
        content:selected_blog.content,
        thumbnail:selected_blog.thumbnail
      }}
      console.log(replace);
      BlogPost.findByIdAndUpdate(_id,replace,{new: true}).then((result,err)=>{
        console.log(result);
          res.json({message:"Updated Blog",blog:new_blog})
      }).catch((err)=>{console.log(err)});

    }

  }).catch((err)=>{
    err.statusCode = 500;
    next(err);
  })

}

const FindOnePost = async(req,res,next) =>{

  var _id = req.params._id;

  BlogPost.findById(_id).then((blog)=>{

    if(!blog){
      throw new Error("Cannot Find Blog");
    }
    else{
      res.status(200).json({blog:blog,message:"Found Blog"});
    }

  }).catch((err)=>{
    err.statusCode = 500;
    next(err);
  });

}

const CreatePost = (req,res,next) => {

  var errs = validationResult(req);
  errs = errs.errors;

  if(errs.length <= 0){

    var { title,author,subtitle,catagory,content } =  req.body;
    var post = new dummy_posts.DummyPost(title,author,subtitle,catagory,content);
    var new_post = new BlogPost(post);

    new_post.save();

    res.json({post:post,posts:default_posts});

  }
  else{

    var new_error = new Error("Invalid Input for Blog Post Creation");

    new_error.statusCode = 422;

    throw new_error;

  }

}

module.exports.DeletePost = DeletePost;

module.exports.GetPosts = GetPosts;
module.exports.EditPost = EditPost;
module.exports.CreatePost = CreatePost;
module.exports.FindOnePost = FindOnePost;
