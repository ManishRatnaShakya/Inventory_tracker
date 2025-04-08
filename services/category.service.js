const { Category } = require('../models');

exports.createCategory = async(data) => {
    return await Category.create(data);
};
exports.getAllCategories = async () => {
    return await Category.findAll();
  };
  
exports.getCategoryById = async (id) => {
    return await Category.findByPk(id);
  };
  
exports.updateCategory = async (id, updateData) => {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return await category.update(updateData);
  };

exports.deleteCategory = async (id) => {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return await category.destroy();
  };