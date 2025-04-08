const {Category, Product} = require('../models');

const productService = require('../services/product.service');

exports.createProduct = async (req, res, next) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(200).json(product)
    }
    catch(err) {
        next(err);
    }
};

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products)
    }
    catch(err) {
        next(err);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
      const product = await productService.getProductById(req.params.id);
      if (!product) return res.status(404).json({ message: 'Not found' });
      res.json(product);
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateProduct = async (req, res, next) => {
    try {
      const product = await productService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  };
  
exports.deleteProduct = async (req, res, next) => {
    try {
      await productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
