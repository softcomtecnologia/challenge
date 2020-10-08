/* Imports */
const Sequelize = require("sequelize");
const sequelize = require('../database/database');

/* Definindo o model user */
const User = sequelize.define('User', {
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
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(40),
        validate: {
          len: [2, 40]
        }
      },
      cnpj: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      }
});

module.exports = User;