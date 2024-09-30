var User = require("./../models/user.js");
var bcrypt = require("bcrypt");

const CreateAccount = (req,res)=>{

  var email = req.body.email;
  var password = req.body.password;
  var profileImg = req.body.profileImg;

  bcrypt.hash(password,12).then(async (new_password)=>{

    var user_ = {
      email:email,
      password:password,
      profileImg:profileImg
    }
    var new_user = new User(user_);
    await new_user.save();
    res.json(new_user);
  }).catch((err)=>{
    console.log(err);
    next(err);
  })

}

const Login = (req,res)=>{
  console.log(req.body)
}

module.exports.Login = Login;
module.exports.CreateAccount = CreateAccount;
