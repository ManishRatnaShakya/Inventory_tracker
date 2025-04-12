const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { allow } = require("joi");

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction',
        {
            type: {
                type: DataTypes.ENUM('add', 'sale', 'adjust'),
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1
                }
            }
        }
    );

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.Product, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            }
        })

        Transaction.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            }
        })
    }

    return Transaction;
}