const {Product, Category} = require('../models');

exports.createProduct = async(data) => {
    return await Product.create(data);
};
exports.getAllProducts = async () => {
    return await Product.findAll({ include: Category });
  };
  
exports.getProductById = async (id) => {
    return await Product.findByPk(id, { include: Category });
  };
  
  
exports.updateProduct = async (id, updateData) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Product not found');
    return await product.update(updateData);
  };
  
  exports.deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Product not found');
    return await product.destroy();
  };