const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        required: false,
    },
    lastName: {
        type: DataTypes.STRING,
        required: true,
    },
    email: {
        type: DataTypes.STRING,
        required: true,
    },
    password: {
        type: DataTypes.STRING,
        required: true,
    },
    // var favoris = [{id: 1, title: "test", type: "movie"}, {id: 2, title: "test2", type: "movie"}];
    favoris: {
        type: DataTypes.STRING,
        required: false,
    },
    admin : {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        required: true,
    }
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;

