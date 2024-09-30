const LIMIT = 50;
const RANDOMRANK = 30000;
const RANDOMLIKES = 4000;
const RANDOMDISLIKES = 3000;
const RANDOMVIEWS = 30000;


const catagories = [
  "Oil | News",
  "Election | News",
  "War | News",
  "Personal | Blog",
  "Techonology | News",
  "Funny | Blog",
  "Science | News",
  "Sports | News",
  "Games | Blog"
];

const  RandomizeMetaData = (rank) => {
  return Math.floor(Math.random() * rank);
}

class DummyPost {

  constructor(title,author,subtitle,catagory,content,thumbnail){

    this.title = title ? title : "Enter Title";
    this.author = author ? author : "Enter Name";
    this.authorID = Math.floor(Math.random() * 19101010100);
    this.subtitle = subtitle ? subtitle : "Enter Subtitle";
    this.catagory = catagories[Math.floor(Math.random() * catagories.length)];
    this.content = content ? content : "Enter Content";
    this.thumbnail = thumbnail ? thumbnail : "/";
    this.views =  RandomizeMetaData(RANDOMVIEWS);
    this.ranking = RandomizeMetaData(RANDOMRANK);
    this.likes = RandomizeMetaData(RANDOMLIKES);
    this.dislikes = RandomizeMetaData(RANDOMDISLIKES);
    this.tags = [];
    this.comments = [];
    this.timestamp = new Date();

  }

}

const CreateDummyPosts = () => {

  const posts = [];

  for(var i = 0; i < LIMIT; i++){

    var new_post = new DummyPost(
      `Harris and Trump both claim broad HBCU support.
      But reality shows otherwise.
      `,
      "Jimmy Mcmullian",
      `Presidents of historically
      Black colleges want assurances the candidates will bolster funding for their schools.`,
      "Election 2024",
      "",
      `https://image.cnbcfm.com/api/v1/image/108032240-1726018945673-gettyimages-2170583701-AFP_36FY3CQ.jpeg?v=1726019045&w=1858&h=1045&vtcrop=y`
    );

    posts.push(new_post);

  }

  return posts;

}

module.exports.CreateDummyPosts = CreateDummyPosts;
module.exports.DummyPost = DummyPost;
