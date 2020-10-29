var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Sequelize, DataTypes } = require('sequelize');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//database setup

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/database.sqlite'
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passsword: {
    type: DataTypes.STRING,
    allowNull: false            //definilty encrypt passwords if this was for real
  }
});

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  upVotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  downVotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  imageName: {
    type: DataTypes.STRING,
    allowNull: false          
  },
  imageLocation: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  upVotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  downVotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

const Message = sequelize.define('Message', {
  text: {
    type: DataTypes.TEXT
  }
});

User.hasMany(Post);
Post.hasOne(User);
Post.hasMany(Comment);
Message.belongsTo(User, {as: 'sender'});
Message.belongsTo(User, {as: 'receiver'});

user_model();
post_model();
comment_model();
message_model();

async function user_model(){
  await User.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
}

async function post_model(){
  await Post.sync({ force: true });
  console.log("The table for the Post model was just (re)created!");
}

async function comment_model(){
  await Comment.sync({ force: true });
  console.log("The table for the Comment model was just (re)created!");
}

async function message_model(){
  await Message.sync({ force: true });
  console.log("The table for the Message model was just (re)created!");
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
  res.render('error');
});

module.exports = app;
