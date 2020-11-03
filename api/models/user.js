module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passsword: {
      type: DataTypes.STRING,
      allowNull: false, //definilty encrypt passwords if this was for real
    },
  });

  User.associate = (models) => {
    User.hasMany(models.post);
    User.hasMany(models.message);
  };

  return User;
};
