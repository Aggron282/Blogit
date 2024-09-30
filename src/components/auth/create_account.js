import React from "react";
import Banner from "./../../images/banner.png";
import Logo from "./../../images/logo.png";

class CreateAccount extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      profileImg:""
    }
  }
  render(){
    return (
      <div class="create_account_container">
        <div class="graphic_container">
          <img src = {Banner} />
        </div>

        <div class="create_account_container--form">
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
            <button class="auth_button auth_button--create">Create Account </button>
          </form>
        </div>

      </div>
    );
  }

}

export default CreateAccount;
