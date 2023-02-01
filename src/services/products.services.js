const Products = require('../models/product.models');
const { Op } = require('sequelize');
const users = require('../models/users.models');
// const Op = sequelize.Op;

class ProductServices {
  static async getAllProducts() {
    try {
      const products = Products.findAll({
        where: {
          available_qty: {
            [Op.gt]: 0,
          },
        },
        attributes: {
          exclude: ['user_id'],
        },
        include: {
          model: users,
          as: 'user',
          attributes: {
            exclude: ['password', 'email'],
          },
        },
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(newObject) {
    try {
      const product = await Products.create(newObject);
      return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
