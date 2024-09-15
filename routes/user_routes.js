var router = require("express").Router();
var user_controller = require("./../controllers/user_controller.js");

router.get("/posts",user_controller.GetPosts)

module.exports = router;
