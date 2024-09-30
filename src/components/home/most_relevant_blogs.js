import React from "react";
import BigBlog from "./../blogs/big_blog_post.js";

class MostRelevantBlogs extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      limit:1
    }

    this.renderBlogs = this.renderBlogs.bind(this);

  }

  renderBlogs(){

      return this.props.blogs.map((blog,index)=>{
        if(index < this.state.limit){
          return <BigBlog blog ={blog}  EditBlog = {this.props.EditBlog} _id = {blog._id}/>
        }
      })

  }

  render(){

    return(
      <div class="row">
        {this.renderBlogs()}
      </div>
    )
  }

}

export default MostRelevantBlogs;
