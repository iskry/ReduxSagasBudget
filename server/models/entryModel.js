const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Entry = sequelize.define('Entry', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isExpense: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Entry;

