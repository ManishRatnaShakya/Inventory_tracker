const { Purchase, Product, Supplier } = require('../models');

exports.createPurchase = async(data) => {
    return await Purchase.create(data);
};
exports.getAllPurchase = async () => {
    return await Purchase.findAll({include: [Product, Supplier]});
  };
  
exports.getPurchaseById = async (id) => {
    return await Purchase.findByPk(id, {include: [Product, Supplier]});
  };
  
exports.updatePurchase = async (id, updateData) => {
    const purchase = await Purchase.findByPk(id, {include: [Product, Supplier]});
    if (!purchase) throw new Error('Category not found');
    return await purchase.update(updateData);
  };

exports.deletePurchase = async (id) => {
    const purchase = await Purchase.findByPk(id);
    if (!purchase) throw new Error('Category not found');
    return await purchase.destroy();
  };