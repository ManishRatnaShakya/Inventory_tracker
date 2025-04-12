const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validateWithJoi = require('../middleware/validatorWithJoi.middleware');
const { registerSchema, loginSchema } = require('../validators/auth.schemas');

router.post('/register', validateWithJoi(registerSchema), authController.register);
router.post('/login', validateWithJoi(loginSchema), authController.login);

module.exports = router;
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error or duplicate email
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login successful, returns JWT
 *       401:
 *         description: Invalid email or password
 */
