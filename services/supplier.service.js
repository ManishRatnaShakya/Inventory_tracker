const { Supplier } = require('../models');

exports.createSupplier = async(data) => {
    return await Supplier.create(data);
};
exports.getAllSupplier = async () => {
    return await Supplier.findAll();
  };
  
exports.getSupplierById = async (id) => {
    return await Supplier.findByPk(id);
  };
  
exports.updateSupplier = async (id, updateData) => {
    const  supplier = await Supplier.findByPk(id);
    if (!supplier) throw new Error('Category not found');
    return await supplier.update(updateData);
  };

exports.deleteSupplier = async (id) => {
    const supplier = await Supplier.findByPk(id);
    if (!supplier) throw new Error('Category not found');
    return await supplier.destroy();
  };