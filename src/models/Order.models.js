const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const order = db.define('order', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  total_price: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('not_purchased', 'purchased'),
    defaultValue: 'not_purchased',
  },
});

module.exports = order;
