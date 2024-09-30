import React from "react";
// import "bulma/css/bulma.css";
import HomePage from "./containers/home_page.js";
import AuthPage from "./containers/auth_page.js";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:"/auth/login"
    }
  }
  render(){
    console.log(this.state)

    if(this.state.url == "/" || !this.state.url){

      return(
        <div class="blogit_app container-fluid">
          <HomePage />
        </div>
      )

    }
    else if(this.state.url.includes("/auth/")){
      return <AuthPage  url = {this.state.url}/>
    }

  }

}


export default App;
