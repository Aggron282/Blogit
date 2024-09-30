import React from "react";

class BlogPost extends React.Component {

  render(){

    return (
      <div class="blog_post_col--medium col-4">

        <div class="blog_post_container">

          <div class="blog_post_container--catagory">
            <p class="blog_post_text--catagory blog_post_text">
              {this.props.blog.catagory}
            </p>
          </div>

          <img class="blog_post_img" src = {this.props.blog.thumbnail} />

          <p class="blog_post_text blog_post_text--title">
            {this.props.blog.title}
          </p>

          <p class="blog_post_text blog_post_text--subtitle">
            {this.props.blog.subtitle}
          </p>

          <div  class="blog_post_container--author">
            <p>
              Authored by : {this.props.blog.author}
            </p>
          </div>

        </div>

      </div>
    )

  }

}

export default BlogPost;
