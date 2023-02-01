const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const cart = db.define(
  'cart',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = cart;
