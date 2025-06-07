const { Purchase, Product, PurchaseItem} = require('../models');

exports.createPurchaseItem = async(data) => {
    return await PurchaseItem.bulkCreate(data);
};
exports.getAllPurchaseItems = async () => {
    return await PurchaseItem.findAll({include: [Product, Purchase]});
  };
  
exports.getPurchaseItemById = async (id) => {
    return await PurchaseItem.findByPk(id, {include: [Product, Purchase]});
  };
  
exports.updatePurchaseItem = async (id, updateData) => {
    const purchase = await PurchaseItem.findByPk(id, {include: [Product, Purchase]});
    if (!purchase) throw new Error('Category not found');
    return await purchase.update(updateData);
  };

exports.deletePurchaseItem = async (id) => {
    const purchase = await PurchaseItem.findByPk(id);
    if (!purchase) throw new Error('Category not found');
    return await purchase.destroy();
  };
  
exports.getPurchaseItemsByPurchaseId = async (purchaseId) => {
    return await PurchaseItem.findAll({
      where: { purchaseId },
    });
  };
  