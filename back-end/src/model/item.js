/* Imports */
const Sequelize = require("sequelize");
const sequelize = require('../database/database');

/* Definindo o model user */
const Item = sequelize.define('Item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
          len: [2, 40]
        }
      },
      preco: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
});

module.exports = Item;