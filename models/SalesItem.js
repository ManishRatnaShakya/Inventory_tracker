const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const SalesItem = sequelize.define('SalesItem', {
    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salesDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    saleId: { type: DataTypes.INTEGER, allowNull: false },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    unitPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});

SalesItem.associate = (models) => {
    SalesItem.belongsTo(models.Sale, { foreignKey: 'saleId' });
    SalesItem.belongsTo(models.Product, { foreignKey: 'productId' });
  };

module.exports = SalesItem;