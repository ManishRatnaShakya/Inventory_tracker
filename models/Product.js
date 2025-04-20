const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Product.belongsTo(Category, {
    foreignKey: {
        name: 'categoryId',
        allowNull: false
    },
    onDelete: 'CASCADE'
});

Category.hasMany(Product, { foreignKey:{
    name: 'categoryId',
    allowNull: false }
},);
module.exports = Product;
