const Order = require('../models/Order.models');
const Users = require('../models/users.models');
const Cart = require('../models/Cart.models');
const ProductsInCart = require('../models/ProductInCart.models');
const ProductsInOrder = require('../models/ProductInOrder.models');
const product = require('../models/product.models');
const CartServices = require('./cart.services');

class OrderServices {
  static async gerOrders(user_id) {
    try {
      const orders = await Order.findAll({
        where: { user_id },
        include: {
          model: ProductsInOrder,
          as: 'productsInOrder',
          include: {
            model: product,
            as: 'product',
          },
        },
      });
      return orders;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderNotPurchased(id) {
    try {
      const result = await Order.findOne({
        where: {
          user_id: id,
          status: 'not_purchased',
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInOrder(id) {
    try {
      const productsInOrder = await ProductsInOrder.findAll({
        where: { order_id: id },
      });
      return productsInOrder;
    } catch (error) {
      throw error;
    }
  }

  static async makeOrder(user_id) {
    try {
      const orderNotPurchased = await this.getOrderNotPurchased(user_id);
      const cart = await Cart.findOne({
        where: { user_id },
      });
      await Cart.update(
        { total_price: 0 },
        {
          where: { user_id },
        }
      );
      await ProductsInCart.destroy({
        where: { cart_id: cart.id },
      });
      await ProductsInOrder.update(
        { status: 'purchased' },
        {
          where: { order_id: orderNotPurchased.id },
        }
      );
      const order = Order.update(
        { status: 'purchased' },
        {
          where: {
            user_id,
            status: 'not_purchased',
          },
        }
      );
      return order;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
