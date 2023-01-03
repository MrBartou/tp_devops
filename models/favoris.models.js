const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const favoris = sequelize.define("Favoris", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
    },
    idMedia: {
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
});

sequelize.sync().then(() => {
    console.log('Favoris table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = favoris;

