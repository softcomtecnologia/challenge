/* Imports */
const Sequelize = require("sequelize");
const sequelize = require('../database/database');

/* Definindo o model user */
const Vendas = sequelize.define('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
          len: [2, 40]
        }
      },
      valor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          len: [2, 255]
        }
      },
});

module.exports = Vendas;