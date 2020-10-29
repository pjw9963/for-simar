var express = require('express');
var router = express.Router();

var postController = require('../controller/post');

/* GET all posts */
router.get('/api/posts', postController.getAllPosts);

router.post("/api/post/create", postController.create)

module.exports = router;
