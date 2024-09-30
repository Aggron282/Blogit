import React from "react";
import Catagory from "./sub_nav_catagory.js";

class SubNavbar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      limit: 5
    }

    this.renderCatagories = this.renderCatagories.bind(this);

  }

  renderCatagories(){

    return this.props.catagories.map((catagory)=>{
      return <Catagory catagory = {catagory} />
    });

  }

  render(){

    return(

      <div class="sub_navbar sub_navbar--user">

        <div class="sub_navbar_container--catagories">
          {this.renderCatagories()}
        </div>

        <div class="sub_navbar_container--input">
          <input class="form-control sub_navbar_input" placeholder = "Search Catagories"/>
        </div>

      </div>

    )

  }

}

export default SubNavbar;
