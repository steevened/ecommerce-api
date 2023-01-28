const users = require('./users.models');
const cart = require('./Cart.models');
const order = require('./Order.models');
const product = require('./product.models');
const productInOrder = require('./ProductInOrder.models');
const productInCart = require('./ProductInCart.models');

const initModels = () => {
  // user relations--------------------
  ///users -products
  users.hasMany(product, {
    as: 'products',
    foreignKey: 'user_id',
  });

  product.belongsTo(users, {
    as: 'user',
    foreignKey: 'user_id',
  });

  ///users -orders
  users.hasMany(order, {
    as: 'orders',
    foreignKey: 'user_id',
  });

  order.belongsTo(users, {
    as: 'user',
    foreignKey: 'user_id',
  });

  // ///users -cart
  users.hasOne(cart, {
    as: 'cart',
    foreignKey: 'user_id',
  });

  cart.belongsTo(users, {
    as: 'user',
    foreignKey: 'user_id',
  });

  // // product relations---------------------
  // ///product -productInCart
  product.hasOne(productInCart, {
    as: 'productInCart',
    foreignKey: 'product_id',
  });

  // productInCart.hasOne(product, {
  //   as: 'product',
  //   foreignKey: 'product_id',
  // });

  ///product -productInOrder
  product.hasOne(productInOrder, {
    as: 'productInOrder',
    foreignKey: 'product_id',
  });

  // productInOrder.hasOne(product, {
  //   as: 'product',
  //   foreignKey: 'product_id',
  // });

  ///productInCart - cart
  productInCart.belongsTo(cart, {
    as: 'cart',
    foreignKey: 'cart_id',
  });

  cart.hasMany(productInCart, {
    as: 'productsInCart',
    foreignKey: 'cart_id',
  });

  // ///productInOrder - order
  productInOrder.belongsTo(order, {
    as: 'order',
    foreignKey: 'order_id',
  });

  order.hasMany(productInOrder, {
    as: 'productsInOrder',
    foreignKey: 'order_id',
  });
};

module.exports = initModels;
