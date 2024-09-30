import React from "react";

class BlogPostBig extends React.Component {

  render(){

    return (

      <div class="blog_post_col--big col-12">

        <div class="blog_post_container" _id = {this.props._id} onClick = {(e)=>{
          this.props.EditBlog(this.props._id);
        }}>

          <div class="blog_post_container--catagory">
            <p class="blog_post_text--catagory blog_post_text">
              {this.props.blog.catagory}
            </p>
          </div>

          <p class="blog_post_text blog_post_text--title">
            {this.props.blog.title}
          </p>

          <p class="blog_post_text blog_post_text--subtitle">
            {this.props.blog.subtitle}
          </p>

          <div class="blog_post_container--author" >
            <p>
              Authored by : {this.props.blog.author}
            </p>
          </div>

          <img class="blog_post_img" src = {this.props.blog.thumbnail}/>

        </div>

      </div>
    );

  }

}

export default BlogPostBig;
