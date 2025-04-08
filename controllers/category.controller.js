const {Category} = require('../models');
const categoryService = require('../services/category.service')


exports.createCategory = async (req, res, next) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(200).json(category)
    }
    catch(err) {
       next(err)
    }
};

exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories)
    }
    catch(err) {
        next(err)
    }
};
exports.getCategoryById = async (req, res, next) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        res.json(category)
    }
    catch(err) {
        next(err)
    }
}
exports.updateCategory = async (req, res, next) => {
    try {
        const categories = await categoryService.updateCategory(req.params.id, req.body);
        res.json(categories)
    }
    catch(err) {
        next(err)
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const categories = await categoryService.deleteCategory(req.params.id);
        res.json(categories)
    }
    catch(err) {
        next(err)
    }
}