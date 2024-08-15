const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define('user', {
    
    nome: {
        type: DataTypes.STRING, //Somente letras
        allowNull: false //Nunca pode ser nulo
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;