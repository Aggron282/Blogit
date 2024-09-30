import React from "react";
import axios from "axios";

import Navbar from "./../components/home/navbar.js";
import SubNavbar from "./../components/home/navbar.js";

import MostReleventBlogs from "./../components/home/most_relevant_blogs.js";
import MostReadBlogsTotal from "./../components/home/most_read_blogs.js";

import ReleventBlogs from "./../components/home/relevant_blogs.js";
import Blogs from "./../components/home/blogs.js";
import Slideshow from "./../components/home/slideshow.js";

class HomePage extends React.Component {

  constructor(props){

    super(props);

    this.state = {

      most_read_blogs:[],
      most_relevant_blogs:[],
      relevant_blogs: [],
      all_blogs:[],
      catagories:[],
      selected_blog:null,
      didLoad:false,
      isEdit:false,
      modal:{
        title:"",
        catagory:"",
        content:"",
        thumbnail:"",
        subtitle:""
      }

    }

    this.OrganizePosts = this.OrganizePosts.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
    this.renderModalContent = this.renderModalContent.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.EditBlog = this.EditBlog.bind(this);

  }

  async componentDidMount(){

    this.Init();

  }

  async Init(){

    const data = await axios.get("http://localhost:8080/posts");

    var posts = data.data.posts;
    var organized_posts = this.OrganizePosts(posts);

    this.setState({
      most_read_blogs:organized_posts.most_read_blogs,
      most_relevant_blogs:organized_posts.most_relevant_blogs,
      relevant_blogs: organized_posts.relevant_blogs,
      all_blogs:organized_posts.all_blogs,
      catagories:organized_posts.catagories,
      didLoad :true,
      isModalActive:false
    });

  }

  OrganizePosts(posts){

    var most_read = [];
    var most_relevant = [];
    var relevant = [];
    var all = [];
    var catagories = [];

    posts.forEach((post) =>{

      if(catagories.length <= 0){
        catagories.push(post.catagory);
      }
      else{

        var isFound = false;

        for(var i = 0; i < catagories.length; i++){

          if(catagories[i] == post.catagory){
            isFound = true;
          }

        }

        if(!isFound){
          catagories.push(post.catagory);
        }

      }

      all.push(post);

      if(post.views > 5000){
        most_read.push(post);
      }
      else if(post.likes > 50 && post.likes < 3000 || post.views > 500){
        relevant.push(post)
      }

      if( post.likes >= 3000 || post.views > 4500) {
        most_relevant.push(post);
      }

    });

    return {
      most_read_blogs:most_read,
      all_blogs:all,
      relevant_blogs:relevant,
      catagories:catagories,
      most_relevant_blogs:most_relevant
    }

  }

  togglePopup(isOn){

    if(isOn == null || isOn == undefined){
      this.setState({isModalActive:!this.state.isModalActive});
    }
    else{
      this.setState({isModalActive:isOn});
    }

  }

  async EditBlog(_id){

    this.togglePopup(true);

    const blog_data = await axios.get("http://localhost:8080/posts/find/one/"+_id);
    var blog = blog_data.data.blog;
    var new_modal  = {...this.state.modal};

    new_modal.title = blog.title;
    new_modal.subtitle = blog.subtitle;
    new_modal.thumbnail = blog.thumbnail;
    new_modal.content = blog.content;
    new_modal.catagory = blog.catagory;

    this.setState({selected_blog:_id,modal:new_modal,url:"/posts/edit"});

  }

  async DeleteBlog(_id){
    this.togglePopup(false);
    const blog_data = await axios.post("http://localhost:8080/posts/delete/one/"+_id);
  }

  renderMainContent(){

    return(
      <div class="main_content">

        <p class="add_test" onClick = {()=>{
          this.togglePopup(true)
          this.setState({url:"/posts"});
        }}>+</p>

        <Slideshow  />

        <div style={{padding:"20px"}} class="blog_feed_container">
          <MostReleventBlogs EditBlog = {this.EditBlog} blogs = {this.state.most_relevant_blogs}/>
          <ReleventBlogs  blogs = {this.state.relevant_blogs}/>
          <Blogs  blogs = {this.state.all_blogs}/>
          <MostReadBlogsTotal  blogs = {this.state.most_read_blogs}/>
        </div>

     </div>

    )

  }
  renderDeleteButton(){
    if(this.state.selected_blog){
      return (<button class="delete_button" onClick = {async ()=>{
        await axios.post("http://localhost:8080/posts/delete/one",{_id:this.state.selected_blog})
        this.Init();
      }}>Delete</button>)
    }
  }
  renderModalContent(){

    return(
      <div class="modal_content">

        <p class="modal_text modal_text--title"> Enter Blog Post Here </p>

        <div class="create_post_modal_container--form" >

          <div class="row create_blog_modal_row">

            <div class="col-12 create_blog_modal_col">

              <input class="form_control modal_input" placeholder= "Enter Blog Title" type="file" name = "thumbnail"  onChange ={(e)=>{
                var modal = {...this.state.modal}
                modal.thumbnail = e.target.files[0].name;
                console.log(modal.thumbnail);
                this.setState({modal});
              }}
              filename = {this.state.modal.thumbnail}
              />

            </div>

            <div class="col-12 create_blog_modal_col">

              <input class="form_control modal_input" placeholder= "Enter Blog Title" name = "title"  onChange ={(e)=>{

                var modal = {...this.state.modal}

                modal.title = e.target.value
                this.setState({modal})

              }}

              value = {this.state.modal.title} />

            </div>

            <div class="col-12 create_blog_modal_col">

              <input class="form_control modal_input" onChange ={(e)=>{

                var modal = {...this.state.modal}

                modal.subtitle = e.target.value
                this.setState({modal})

              }} placeholder= "Enter Blog Subtitle" name = "subtitle" value = {this.state.modal.subtitle} />

            </div>

            <div class="col-12 create_blog_modal_col">

              <input class="form_control modal_input"
                placeholder= "Enter Blog Title"
                name = "catagory"  onChange ={(e)=>{

                var modal = {...this.state.modal}

                modal.catagory = e.target.value
                this.setState({modal})

              }} value = {this.state.modal.catagory} />

            </div>

            <div class="col-12 create_blog_modal_col">

              <textarea
                cols= "155" rows= "30"
                class="form_control modal_input create_blog_modal_col"
                placeholder= "Enter Content Here"
                name = "content"
                onChange ={(e)=>{

                  var modal = {...this.state.modal}

                  modal.content = e.target.value
                  this.setState({modal})

                }}
                value = {this.state.modal.content}
                ></textarea>

            </div>

          </div>

          <button onClick = {async (e)=>{

            var new_post_form = new FormData();
            console.log(this.state.modal.thumbnail)
            new_post_form.append("title",this.state.modal.title);
            new_post_form.append("subtitle",this.state.modal.subtitle);
            new_post_form.append("thumbnail",this.state.modal.thumbnail);
            new_post_form.append("content",this.state.modal.content);
            new_post_form.append("catagory",this.state.modal.catagory);
            console.log(this.state);
            if(this.state.selected_blog){
              new_post_form.append("_id",this.state.selected_blog);
              console.log("SS");
            }

            var url = "http://localhost:8080"+this.state.url;
            console.log(new_post_form.get("thumbnail"));

            const data = await axios.post(url,{
              _id:this.state.selected_blog,
              blog:{
                title:this.state.modal.title,
                subtitle:this.state.modal.subtitle,
                thumbnail:new_post_form.get("thumbnail"),
                content:this.state.modal.content,
                catagory:this.state.modal.catagory
              }
            },
            {
              headers: {
              'Content-Type': "application/x-www-form-urlencoded"
              }
            }
            );

           this.setState({isModalActive:false,selected_blog:null,isEdit:false});
           this.Init();

          }} class="btn submit_button--create"> Submit </button>

          {this.renderDeleteButton()}
        </div>

      </div>

    )

  }

  renderContent(){

    if(this.state.isModalActive){
      return this.renderModalContent();
    }else{
      return this.renderMainContent();
    }

  }

  render(){

    if(this.state.didLoad){
      return(

        <div>
          <Navbar catagories  = {this.state.catagories}/>
          <div className="content_container">
            {this.renderContent()}
          </div>
        </div>
      );
    }else{
      return <p> ... Loading </p>
    }

  }

}

export default HomePage;
