import React from "react";
import axios from "axios";
import Login from "./../components/auth/login.js";
import CreateAccount from "./../components/auth/create_account.js";

class Auth extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.url == "/auth/login")
    if(this.props.url == "/auth/login"){
      return <Login />
    }else if(this.props.url == "/auth/create_account"){
      return <CreateAccount />
    }
  }

}


export default Auth;
