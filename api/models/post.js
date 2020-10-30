module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    upVotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    downVotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.user);
    Post.hasMany(models.comments);
  };

  return Post;
};
