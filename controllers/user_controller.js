var DummyPosts = require("./../data/dummy_posts.js");

const GetPosts = (req,res,next)=>{

  res.json({posts:DummyPosts})

}



module.exports.GetPosts = GetPosts;
