import React from "react";
import SubNavbar from "./sub_navbar.js";
import Logo from "./../../images/logo.png";

class Navbar extends React.Component {

  render(){

    return(
      <div class="navbar navbar--user">

        <div class="row navbar_row">

          <div class="col-3">

            <div class="navbar_container--logo">
              <img src = {Logo} class="company_logo company_logo--user" />
              <p class="company_name navbar_text">Blogit</p>
            </div>

          </div>

          <div class="col-5">

            <div class="navbar_container">
              <input class="form-control navbar_input--search_blogs" placeholder = "Search Blogs / Authors"/>
            </div>

          </div>

          <div class="col-2">

            <div class="navbar_container">
              <p class="navbar_dropdown_title navbar_text"> See More </p>
              <span class="navbar_dropdown navbar_dropdown--user">  </span>
            </div>

          </div>

          <div class="col-2">

            <div class="navbar_container">

              <span class="navbar_text navbar_auth--login"> Login </span>
              <span class="navbar_text navbar_auth--divider"> | </span>
              <span class="navbar_text navbar_auth--create_account"> Create Account </span>

            </div>

          </div>

        </div>

        <SubNavbar catagories = {this.props.catagories} />

      </div>

    )

  }

}

export default Navbar;
