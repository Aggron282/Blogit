import React from "react";
import LongBlog from "./../blogs/long_blog_post.js";
import CatagoryIntro from "./unique/catagory_intro.js";

class MostReadBlogs extends React.Component {

    constructor(props){

      super(props);

      this.state = {
        limit:3
      }

      this.renderBlogs = this.renderBlogs.bind(this);

    }

    renderBlogs(){

        return this.props.blogs.map((blog,index)=>{
          if(index < this.state.limit){
            return <LongBlog blog ={blog} />
          }
        })

    }

    render(){

      return(
        <div class="row">
          <CatagoryIntro />
          {this.renderBlogs()}
        </div>
      )
    }

}

export default MostReadBlogs;
