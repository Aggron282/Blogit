import React from "react";

import Navbar from "./../components/home/navbar.js";
import SubNavbar from "./../components/home/navbar.js";

import MostReleventBlogs from "./../components/home/most_relevant_blogs.js";
import MostReadBlogsTotal from "./../components/home/most_read_blogs.js";

import ReleventBlogs from "./../components/home/relevant_blogs.js";
import Blogs from "./../components/home/blogs.js";

import Slideshow from "./../components/home/slideshow.js";

class HomePage extends React.Component {

  async componentWillMount(){
    const posts = await fetch("/posts");
  }

  render(){

    return(

      <div>
        <Navbar/>
        <Slideshow />
        <MostReleventBlogs />
        <ReleventBlogs/>
        <Blogs />
        <MostReadBlogsTotal />
      </div>
    );

  }

}


export default HomePage;
