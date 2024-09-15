const LIMIT = 50;
const RANDOMRANK = 30000;
const RANDOMLIKES = 400;
const RANDOMDISLIKES = 300;


const  RandomizeMetaData = (rank) => {
  return Math.floor(Math.random() * rank);
}

class DummyPost = {

  constructor(title,author,subtitle,content,thumbnail){

    this.title = title;
    this.author = author;
    this.authorID = null;
    this.subtitle = subtitle;
    this.content = content;
    this.thumbnail = thumbnail;
    this.ranking = RandomizeMetaData(RANDOMRANK)
    this.likes = RandomizeMetaData(RANDOMLIKES)
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
      "",
      `https://www.politico.com/dims4/default/8344aaa/214…22ca30915fc77%2F210915-hbcu-leaders-getty-773.jpg`
    );

    posts.push(new_post);

  }

  return posts;

}

module.exports = CreateDummyPosts();
