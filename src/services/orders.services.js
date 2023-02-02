const Order = require('../models/Order.models');
const Users = require('../models/users.models');
const Cart = require('../models/Cart.models');
const ProductsInCart = require('../models/ProductInCart.models');
const ProductsInOrder = require('../models/ProductInOrder.models');
const product = require('../models/product.models');

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

  static async getCart(id) {
    try {
      const cart = await Cart.findOne({
        where: { user_id: id },
        include: {
          model: ProductsInCart,
          as: 'productsInCart',
          include: {
            model: product,
            as: 'product',
          },
        },
      });
      return cart;
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInCart(id) {
    try {
      const productsInCart = await ProductsInCart.findAll({
        where: { cart_id: id },
      });
      return productsInCart;
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
      const cart = await this.getCart(user_id);
      const orders = await this.gerOrders(user_id);
      // const productsInCart = await this.getProductsInCart(cart.id);
      // const productsInOrder = await this.getProductsInOrder(order.id);
      const orderObj = {
        total_price: cart.total_price,
        user_id,
        status: 'purchased',
      };
      return orderObj;
      // const order = await Order.create(orderObj);
      // const productsInOrder = {
      //   product_id
      // };
      // await Cart.update(
      //   { total_price: 0 },
      //   {
      //     where: { total_price },
      //   }
      // );

      // await ProductsInOrder.create();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
