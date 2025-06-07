const { Sales } = require('../models');

exports.createSales = async(data) => {
    return await Sales.create(data);
};
exports.getAllSales = async () => {
    return await Sales.findAll();
  };
  
exports.getSalesById = async (id) => {
    return await Sales.findByPk(id);
  };
  
exports.updateSales = async (id, updateData) => {
    const sales = await Sales.findByPk(id);
    if (!sales) throw new Error('Category not found');
    return await sales.update(updateData);
  };

exports.deleteSales = async (id) => {
    const sales = await Sales.findByPk(id);
    if (!sales) throw new Error('Category not found');
    return await sales.destroy();
  };