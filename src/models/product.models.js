const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const product = db.define('product', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('not_purchased', 'purchased'),
    defaultValue: 'not_purchased',
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = product;
