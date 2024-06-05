// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');


const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other columns as needed
});

module.exports = Admin;
