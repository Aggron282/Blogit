import React from "react";
import Banner from "./../../images/login_graphic.png";
import Logo from "./../../images/logo.png";

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  }

  render(){
    return(
      <div class="login_container">

        <div class="form_container--login">

          <div class="login_container--form">
            <span class="company_name">
              <img src ={Logo} />
              Blogit
            </span>

            <p class="title">Create your account </p>
            <p class="question">Have an account? <a href="#">Log in now</a> </p>

            <form class="create_account_form">
              <label>
                Name
              </label>
              <input class="form-control auth_input auth_input--create" name = "name" value = {this.state.name}
                onChange = {(e)=>{
                this.setState({name:e.target.value});
              }}
              />
              <label>
                Email
                </label>
                <input class="form-control auth_input auth_input--create" name = "email" value = {this.state.email}
                onChange = {(e)=>{
                  this.setState({email:e.target.value});
                }}
                />
                <label>
                  Password
                </label>
                <input class="form-control auth_input auth_input--create" name = "password" type="password" value = {this.state.password}
                onChange = {(e)=>{
                  this.setState({password:e.target.value});
                }}
                />
                <label>
                Profile Image
                </label>
                <input class="form-control auth_input auth_input--create" type = "file" name = "profileImg" filename = {this.state.profileImg}
                onChange = {(e)=>{
                  this.setState({profileImg:e.target.value});
                }}
                />
                <button class="auth_button auth_button--login">Login </button>
                </form>
              </div>
              <div class="graphic_container--login">
                <div class="text_container text_container--login">
                  <p class="title"> Blogit to all your friends today! </p>
                  <p class="description">
                  Take your Blogging skills to the world with and share your wisdom, thoughts, opinions and more!
                  <br />
                  <br />
                   </p>
                  <button class="create_account_button--login">
                    <p class="button_text"> Create Account </p>
                    <span class="underline"> </span>
                  </button>

                </div>
                <img class="graphic--login" src = {Banner} />
              </div>

            </div>

          </div>
      )
  }


}

export default Login;
