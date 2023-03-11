const Post = require("../models/post")

const postData = [
  {
    posted_by: "Jennifer Lee",
    post_title: "Mastering React: Tips and Tricks",
    post_content: "React is a powerful library for building user interfaces. However, mastering it can be challenging. Here are some tips and tricks to help you become a React pro!",
    user_id: "3"
  },
  {
    posted_by: "Mike Johnson",
    post_title: "10 Best Tools for Front-End Development",
    post_content: "Front-end development can be time-consuming and challenging. Fortunately, there are plenty of tools available to make the process easier. In this post, we'll cover 10 of the best tools for front-end developers.",
    user_id: "5"
  },
  {
    posted_by: "Aliyah Patel",
    post_title: "The Pros and Cons of Remote Work",
    post_content: "Remote work has become increasingly popular in recent years, and for good reason. But it's not without its drawbacks. In this post, we'll explore the pros and cons of remote work and help you decide if it's right for you.",
    user_id: "1"
  },
  {
    posted_by: "Adam Wright",
    post_title: "Getting Started with Machine Learning",
    post_content: "Machine learning is a rapidly growing field that can seem intimidating to beginners. But with the right resources and approach, anyone can get started. In this post, we'll cover the basics of machine learning and provide tips for beginners.",
    user_id: "7"
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts; 