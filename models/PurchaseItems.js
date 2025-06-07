const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const PurchaseItems = sequelize.define('PurchaseItems', {
    totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    purchase_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    purchaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

//ForiegnKey
PurchaseItems.associate = (models) => {
   PurchaseItems.belongsTo(models.Product, {foreignKey: 'productId'});
};


module.exports = PurchaseItems;