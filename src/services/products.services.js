const Products = require('../models/product.models');
const sequelize = require('sequelize');
const users = require('../models/users.models');

class ProductServices {
  static async getAllProducts() {
    try {
      const products = Products.findAll({
        where: {
          available_qty: {
            [sequelize.Op.gt]: 0,
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
}

module.exports = ProductServices;
