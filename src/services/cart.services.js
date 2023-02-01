const Cart = require('../models/Cart.models');

class CartServices {
  static async getCart(user) {
    try {
      const cart = await Cart.findOne({
        where: { id: user.id },
      });
      return cart;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
