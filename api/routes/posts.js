var express = require('express');
var router = express.Router();

var postController = require('../controller/post');

/* GET all posts */
router.get('/api/posts', function(req,res){
    postController.getAllPosts(req,res);
});

router.post("/api/post/create", function(req, res){
    postController.create(req,res);
});

router.delete("/api/post/remove", function(req, res){
    postController.delete(req, res);
});

router.get("/api/post/trending", function(req, res) {
    postController.getTrendingPosts(req,res);
});

module.exports = router;
