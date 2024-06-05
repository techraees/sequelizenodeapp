// models/Company.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');


const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other columns as needed
});

module.exports = Company;
