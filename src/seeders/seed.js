const db = require('../utils/database');
const Users = require('../models/users.models');
const Product = require('../models/product.models');
const Order = require('../models/Order.models');
const Cart = require('../models/Cart.models');
const initModels = require('../models/initModels');

initModels();

const users = [
  {
    username: 'user 1',
    email: 'mail1@mail.com',
    password: '1111',
  },
  {
    username: 'user 2',
    email: 'mail2@mail.com',
    password: '2222',
  },
  {
    username: 'user 3',
    email: 'mail3@mail.com',
    password: '3333',
  },
  {
    username: 'user 4',
    email: 'mail4@mail.com',
    password: '4444',
  },
];

const products = [
  {
    name: 'product 1',
    price: 100.0,
    available_qty: 10,
    status: 'not_purchased',
    user_id: 1,
  },
  {
    name: 'product 2',
    price: 200.0,
    available_qty: 20,
    status: 'not_purchased',
    user_id: 2,
  },
  {
    name: 'product 3',
    price: 300.0,
    available_qty: 30,
    status: 'purchased',
    user_id: 3,
  },
  {
    name: 'product 4',
    price: 400.0,
    available_qty: 40,
    status: 'purchased',
    user_id: 4,
  },
];

const orders = [
  {
    total_price: 111.11,
    user_id: 1,
    status: 'purchased',
  },
  {
    total_price: 222.22,
    user_id: 2,
    status: 'purchased',
  },
  {
    total_price: 333.33,
    user_id: 3,
    status: 'purchased',
  },
  {
    total_price: 444.44,
    user_id: 4,
  },
];

const carts = [
  {
    user_id: 1,
    total_price: 111.11,
  },
  {
    user_id: 2,
    total_price: 222.22,
  },
  {
    user_id: 3,
    total_price: 333.33,
  },
  {
    user_id: 4,
    total_price: 444.44,
  },
];

db.sync({ force: true })
  .then(() => {
    console.log('starting seed');
    users.forEach((user) => {
      Users.create(user);
    });
    setTimeout(() => {
      products.forEach((product) => {
        Product.create(product);
      });
    }, 300);
    setTimeout(() => {
      orders.forEach((order) => {
        Order.create(order);
      });
    }, 600);
    setTimeout(() => {
      carts.forEach((cart) => {
        Cart.create(cart);
      });
    }, 900);
  })
  .catch((error) => console.log(error));
