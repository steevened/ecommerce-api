const Cart = require('../models/Cart.models');
const Products = require('../models/product.models');
const productInCart = require('../models/ProductInCart.models');
const ProductInCart = require('../models/ProductInCart.models');

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
      const cart = await Cart.findOne({
        where: { id: user.id },
      });
      const product = await Products.findOne({
        where: { id: product_id },
      });
      const price = product.price * quantity;
      const updatedProductQty = product.available_qty - quantity;
      const totalPrice = cart.total_price + price;
      const productObj = {
        cart_id: cart.id,
        product_id,
        quantity,
        price,
      };
      const result = await ProductInCart.create(productObj);
      await Cart.update(
        { total_price: totalPrice },
        {
          where: { id: cart.id },
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
          model: productInCart,
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
