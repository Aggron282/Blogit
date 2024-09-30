import React from "react";
import BlogPost from "./../blogs/blog_post.js";

class RelevantBlogs extends React.Component {

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
            return <BlogPost blog ={blog} />
          }
        })

    }

    render(){

      return(
        <div class="row">
          {this.renderBlogs()}
        </div>
      );

    }

}

export default RelevantBlogs;
