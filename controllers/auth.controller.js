const authService = require('../services/auth.service');
const crypto = require('crypto');
const User = require('../models/User');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt')

exports.register = async ( req, res, next ) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } 
    catch (err) {
        next(err)
    }
};


exports.login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
        res.status(200).json(result)
    }
    catch (err) {
        next(err)
    }
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (!user) return res.status(404).json({ message: 'User not found' });
  
    const token = crypto.randomBytes(32).toString('hex');
  
    // Save hashed token and expiry (optional)
    user.resetToken = token;
    user.resetTokenExpires = Date.now() + 1000 * 60 * 10; // 10 mins
    await user.save();
  
    const resetLink = `http://localhost:5001/auth/reset-password/${token}`;
    console.log(`🔗 Password reset link: ${resetLink}`);
  
    return res.status(200).json({ message: 'Password reset link sent' });
  };

  exports.resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
  
      const user = await User.findOne({
        where: {
          resetToken: token,
          resetTokenExpires: { [Op.gt]: Date.now() }
        }
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // ✅ Hash the new password before saving
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      user.password = hashedPassword;
      user.resetToken = null;
      user.resetTokenExpires = null;
      await user.save();
  
      return res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };