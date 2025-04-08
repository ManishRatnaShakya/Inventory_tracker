const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Supplier = sequelize.define('Supplier', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactInfo: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
});

module.exports = Supplier;