const Post = require("../models/post").Post;

module.exports = {
  async getAllPosts(req, res) {
    try {
      const postCollection = await Post.find({});

      res.status(201).send(postCollection);
    } catch (e) {
      console.log(e);

      res.status(500).send(e);
    }
  },

  async create(req, res) {
    try {
      const postCollection = await Post.create({
        // add content from req to create a post
        //will need to do a little work here to save image to file system with unqiue name
      });

      res.status(201).send(postCollection);
    } catch (e) {
      console.log(e);

      res.status(400).send(e);
    }
  },

  async update(req, res) {
    try {
      const postCollection = await Post.find({
        id: req.params.postId,
      });

      if (postCollection) {
        const updatedPost = await Post.update({
          // updatable contents
        });

        res.status(201).send(updatedPost);
      } else {
        res.status(404).send("Post Not Found");
      }
    } catch (e) {
      console.log(e);

      res.status(500).send(e);
    }
  },
};
