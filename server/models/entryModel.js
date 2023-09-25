const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
  
  return Entry;
};

