import React from "react";

import HomePage from "./containers/home_page.js";

class App extends React.Component{

  render(){
    return(
      <div class="blogit_app container-fluid">
        <HomePage />
      </div>
    )
  }

}


export default App;
