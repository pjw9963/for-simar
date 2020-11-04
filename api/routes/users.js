var express = require('express');
var router = express.Router();
var userController = require('../controller/user');

router.get('/api/users', function(req,res){
  userController.getAllUsers(req,res);
});

router.post('/api/login', function(req, res){
  userController.create(req,res);
});
module.exports = router;
