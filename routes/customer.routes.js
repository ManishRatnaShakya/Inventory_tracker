const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const customerSchema = require('../validators/customer.schema');

router.post('/', 
    validatorWithJoiMiddleware(customerSchema),
    customerController.createCustomer);
router.get('/', customerController.getAllCustomer);
router.get('/:id', customerController.getCustomerById);
router.delete('/:id', customerController.deleteCustomer);
router.put('/:id', customerController.updateCustomer)


module.exports = router;