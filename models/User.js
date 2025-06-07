const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {isEmail: true},
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true
      },
      resetTokenExpires: {
        type: DataTypes.DATE,
        allowNull: true
      }
      
});

module.exports = User;
