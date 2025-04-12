const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.controller');
const validateWithJoi = require('../middleware/validatorWithJoi.middleware');
const { createTransactionSchema } = require('../validators/transaction.schemas');
const {authenticate} = require('../middleware/auth.middleware');

router.post('/',
    authenticate,
     validateWithJoi(createTransactionSchema), transactionController.create);

module.exports = router;
