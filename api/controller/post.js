const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "data/database.sqlite",
});
const Post = require("../models/post")(sequelize, DataTypes);

var fs = require("fs");
const { resolve } = require("path");

module.exports = {
  async getAllPosts(req, res) {
    try {
      const postCollection = await Post.findAll({
        order: [["createdAt", "DESC"]],
      });

      res.status(201).send(postCollection);
    } catch (e) {
      console.log(e);

      res.status(500).send(e);
    }
  },

  async getTrendingPosts(req, res) {
    try {
      const postCollection = await Post.findAll({
        limit: 5,
        order: [["upVotes", "DESC"]],
      });

      res.status(201).send(postCollection);
    } catch (e) {
      console.log(e);

      res.status(500).send(e);
    }
  },

  async create(req, res) {
    try {
      fileName = saveImage(req.body.base64Image);
      const postCollection = await Post.create({
        title: req.body.title,
        text: req.body.text,
        imageName: fileName,
        imageLocation: `data/images/${fileName}`,
      });

      res.status(201).send(postCollection);
    } catch (e) {
      console.log(e);

      res.status(400).send(e);
    }
  },

  async updateKarma(req, res) {
    try {
      let newKarma = req.body.karma;
      console.log(req.body.id);
      const post = await Post.findByPk(req.body.id);
      if (newKarma > post.upVotes + post.downVotes) {
        post.upVotes += 1;
      } else {
        post.downVotes += 1;
      }
      await post.save();
      res.status(201).send(post);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async delete(req, res) {
    try {
      let id = req.body.id;
      Post.findByPk(id)
        .then(function (post) {
          deleteImage(post.imageName);
        })
        .then(() => Post.destroy({ where: { id: id } }));
      // let n = await Post.destroy({ where: { id: id } });
      // if (n == 0) throw console.error('row not deleted');
      res.status(201).send();
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

function saveImage(baseImage) {
  const localPath = resolve("./data/images");
  //Find extension of file
  const ext = baseImage.substring(
    baseImage.indexOf("/") + 1,
    baseImage.indexOf(";base64")
  );
  const fileType = baseImage.substring("data:".length, baseImage.indexOf("/"));
  const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, "gi");
  const base64Data = baseImage.replace(regex, "");
  const rand = Math.ceil(Math.random() * 1000);
  const filename = `Photo_${Date.now()}_${rand}.${ext}`;

  fs.writeFileSync(localPath + "/" + filename, base64Data, "base64");
  return filename;
}

function deleteImage(name) {
  const localPath = resolve("./data/images");
  fs.unlink(localPath + "/" + name, () => console.log(name + " deleted!"));
}
