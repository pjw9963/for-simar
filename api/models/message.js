module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    text: {
      type: DataTypes.TEXT,
    },
  });

  Message.associate = (models) => {
    Message.belongsTo(models.user, {as: 'sender'});
    Message.belongsTo(models.user, {as: 'receiver'});
  };

  return Message;
};
