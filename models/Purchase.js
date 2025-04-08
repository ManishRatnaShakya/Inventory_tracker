const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Supplier = require('./Supplier');
const Product = require('./Product');


const Purchase = sequelize.define('Purchase', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    purchaseDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

});

//ForiegnKey
Product.hasMany(Purchase, {
    foreignKey: 'productId',
    onDelete: 'CASCADE'
});
Purchase.belongsTo(Product, {
    foreignKey: 'productId'
})

//ForiegnKey
Supplier.hasMany(Purchase, {
    foreignKey: 'supplierId',
    onDelete: 'CASCADE'
});
Purchase.belongsTo(Supplier, {foreignKey: 'supplierId'});

module.exports = Purchase;