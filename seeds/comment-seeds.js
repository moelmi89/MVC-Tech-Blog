const Post = require("../models/comments")

const commentData = [
  { 
    text: "This article is amazing!",
    user_id: "3",
    post_id: "1"
  }, 
  {
    text: "I'm going to save this one for later",
    user_id: "2",
    post_id: "1"
  }, 
  {
    text: "This is really interesting",
    user_id: "3",
    post_id: "2"
  }, 
  {
    text: "How did you research this?",
    user_id: "3",
    post_id: "3"
  },
  {
    text: "I had never considered this perspective before, very thought-provoking!",
    user_id: "2",
    post_id: "2"
  },
  {
    text: "This article has a lot of useful information that I'll be sure to reference again.",
    user_id: "1",
    post_id: "1"
  },
  {
    text: "I disagree with some of the points made in this post, but it's still a well-written article.",
    user_id: "2",
    post_id: "3"
  },
  {
    text: "Can you recommend any additional resources on this topic?",
    user_id: "1",
    post_id: "2"
  }
];

const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments; 