var router = require("express").Router();
var feed_controller = require("./../controllers/feed.js");

router.get("/posts",feed_controller.GetPosts)

module.exports = router;
