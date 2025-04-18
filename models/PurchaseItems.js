const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const PurchaseItems = sequelize.define('PurchaseItems', {
    total_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    purchaseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    purchase_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

//ForiegnKey
PurchaseItems.associate = (models) => {
   PurchaseItems.belongsTo(models.Purchase, {foreignKey: 'purchaseId'});
   PurchaseItems.belongsTo(models.Product, {foreignKey: 'productId'});
};


module.exports = PurchaseItems;