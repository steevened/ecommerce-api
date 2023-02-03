const Cart = require('../models/Cart.models');
const Order = require('../models/Order.models');
const Products = require('../models/product.models');
const ProductInCart = require('../models/ProductInCart.models');
const OrderServices = require('./orders.services');
const ProductInOrder = require('../models/ProductInOrder.models');
const order = require('../models/Order.models');

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

  static async addProductToCart(fields, user) {
    try {
      const { product_id, quantity } = fields;
      const cart = await this.getCart(user);
      const orders = await OrderServices.gerOrders(user.id);
      const orderNotPurchased = await Order.create({
        total_price: cart.total_price,
        user_id: user.id,
      });

      const product = await Products.findOne({
        where: { id: product_id },
      });
      const price = product.price * quantity;
      const updatedProductQty = product.available_qty - quantity;
      const totalPrice = cart.total_price + price;
      const productObjCart = {
        cart_id: cart.id,
        product_id,
        quantity,
        price,
      };
      const productObjOrder = {
        order_id: orderNotPurchased.id || orders[orders.length - 1].id,
        product_id,
        quantity,
        price,
      };

      const result = await ProductInCart.create(productObjCart);
      await ProductInOrder.create(productObjOrder);
      await Cart.update(
        { total_price: totalPrice },
        {
          where: { id: cart.id },
        }
      );
      await Order.update(
        {
          total_price: totalPrice,
        },
        {
          where: { id: orderNotPurchased.id },
        }
      );
      await Products.update(
        { available_qty: updatedProductQty },
        {
          where: { id: product.id },
        }
      );

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInCart(user) {
    try {
      const user_id = user.id;
      const cart = await Cart.findOne({
        where: { user_id },
        include: {
          model: ProductInCart,
          as: 'productsInCart',
          include: {
            model: Products,
            as: 'product',
          },
        },
      });
      return cart;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
