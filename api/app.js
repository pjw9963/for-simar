var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
var cors = require('cors');


var indexRouter = require('./routes/posts');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
var publicDir = require('path').join(__dirname,'./data/images'); 
console.log(publicDir);
app.use(express.static(publicDir)); 

//database setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/database.sqlite'
});


var Post = require("./models/post")(sequelize, DataTypes);
var User = require("./models/user")(sequelize, DataTypes);
var Comment = require("./models/comment")(sequelize, DataTypes);
var Message = require("./models/message")(sequelize, DataTypes);

user_model();
post_model();
comment_model();
message_model();

async function user_model(){
  await User.sync({ force: false });
}

async function post_model(){
  await Post.sync({ force: false });
}

async function comment_model(){
  await Comment.sync({ force: false });
}

async function message_model(){
  await Message.sync({ force: false });  
}


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

module.exports = app;
