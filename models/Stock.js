const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Stock = sequelize.define('Stock', {
      productId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
    });
  
Stock.associate = (models) => {
    Stock.belongsTo(models.Product, { foreignKey: 'productId' });
};
  
module.exports = Stock;