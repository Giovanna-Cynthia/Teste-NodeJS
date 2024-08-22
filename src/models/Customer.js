const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Costumer = sequelize.define('customer', {

    nome: {
        type: DataTypes.STRING,
        allowNull: null
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Costumer;