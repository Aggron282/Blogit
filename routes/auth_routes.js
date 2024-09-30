var router = require("express").Router();
var {body} = require("express-validator");
var auth_controller = require("./../controllers/auth_controller.js");
// router.get("/auth/create_account");
 router.post("/auth/create_account",
  body("email").isEmail().normalizeEmail().trim().withMessage("Not a valid email").custom(async(value,{req})=>{
    var user_found =  await User.findOne({email:value});
    if(user_found){
      return Promise.Reject("User Already Exists with Email")
    }
  }),
  body("password").isLength({min:5}).trim().withMessage("Password is not long enough"),);
// router.get("/auth/login");
// router.post("/auth/login");

module.exports = router;
