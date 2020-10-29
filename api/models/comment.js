module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
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
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.post);
  };

  return Comment;

};
