var router = require("express").Router();
var user_controller = require("./../controllers/user_controller.js");

const {check,body} = require("express-validator");


router.get("/posts/find/one/:_id",user_controller.FindOnePost);
router.get("/posts",user_controller.GetPosts);
router.post("/posts/edit",user_controller.EditPost);
router.post("/posts/delete/one",user_controller.DeletePost);

router.post("/posts",
  check("title").trim().isLength({min:5}),
  check("content").trim().isLength({min:30,max:400000}),
  check("subtitle").trim().isLength({min:5}),
  check("thumbnail").trim().isLength({min:1}),
  check("catagory").trim().isLength({min:5}),user_controller.CreatePost);

module.exports = router;
