const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const {categorySchema} = require("../validators/category.schemas");
const { requireRole } = require('../middleware/auth.middleware');

router.post('/',
    validatorWithJoiMiddleware(categorySchema),
    requireRole("admin"),
    categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.updateCategory);
router.get('/:id', categoryController.updateCategory);

module.exports = router;