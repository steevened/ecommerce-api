const Users = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cart = require('../models/Cart.models');
require('dotenv').config();

class AuthServices {
  static async register(user) {
    try {
      const result = await Users.create(user);
      const cartObject = {
        user_id: result.id,
      };
      await cart.create(cartObject);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await Users.findOne({
        where: { email },
      });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid };
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: 60 * 60,
        algorithm: 'HS512',
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
