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
    },
    customerName: { type: DataTypes.STRING , allowNull: false},
    totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});

Sales.associate = (models) => {
    Sales.hasMany(models.SalesItem, { foreignKey: 'saleId' });
  };

module.exports = Sales;