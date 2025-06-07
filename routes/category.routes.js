const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const {categorySchema} = require("../validators/category.schemas");
const { requireRole } = require('../middleware/auth.middleware');
const {authenticate} = require('../middleware/auth.middleware')

router.post('/',
    authenticate,
    requireRole("admin"),
    validatorWithJoiMiddleware(categorySchema),

    categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.put('/:id',
    authenticate,
    requireRole("admin"),
    categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);
router.get('/:id', categoryController.updateCategory);

module.exports = router;