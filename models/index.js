const Product = require('./Product');
const Category = require('./Category');
const Supplier = require('./Supplier');
const Purchase = require('./Purchase');
const Sales = require('./Sales');
const SalesItem = require('./SalesItem');
const PurchaseItem = require('./PurchaseItems')
const User = require('./User');
const Stock = require('./Stock');
const Transaction = require('./Transaction');
const Customer = require('./Customer')

const sequelize = require('../config/database');
// import other models similarly

const db = {
  sequelize,
  Category,
  SalesItem,
  Sales,
  Purchase,
  Stock,
  Product,
  Supplier,
  PurchaseItem,
  User,
  Transaction,
  Customer
};

module.exports = db;
