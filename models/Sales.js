const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Sales = sequelize.define('Sales', {
    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salesDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Sales;