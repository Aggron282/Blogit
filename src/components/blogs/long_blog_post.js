import React from "react";

class LongBlogPost extends React.Component {

  render(){

    return (
      <div class="blog_post_col--long col-3">

        <div class="blog_post_container blog_post_container--long text-center">

          <div class="blog_post_container--long text-center">
            <p class="blog_post_text--catagory blog_post_text blog_post_text--small">
              {this.props.blog.catagory}
            </p>
          </div>

          <img class="blog_post_img" src = {this.props.blog.thumbnail} />

          <p class="blog_post_text blog_post_text--title">
            {this.props.blog.title}
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

export default LongBlogPost;
