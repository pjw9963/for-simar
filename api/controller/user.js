const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "data/database.sqlite",
});
const User = require("../models/user")(sequelize, DataTypes);

var fs = require("fs");
const { resolve } = require("path");

module.exports = {
    async getAllUsers(req, res) {
        try {
            const postCollection = await User.findAll({
            });

            res.status(201).send(postCollection);
        } catch (e) {
            console.log(e);

            res.status(500).send(e);
        }
    },
    async create(req, res) {
        try {
            const user = await User.create({
                userName: req.body.uname,
                passsword: req.body.psw,
            });

            res.status(201).send(user);
        } catch (e) {
            console.log(e);

            res.status(400).send(e);
        }
    },
};
