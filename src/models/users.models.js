const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Jhon
 *         email:
 *           type: string
 *           example: jhon@mail.com
 *         password:
 *           type: string
 *           example: password
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: jhon@mail.com
 *         password:
 *           type: string
 *           example: password
 *     loginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: Jhon
 *         email:
 *           type: string
 *           example: jhon@mail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgNiIsImlkIjo1LCJlbWFpbCI6Im1haWw2QG1haWwuY29tIiwiaWF0IjoxNjc1Mzk1ODI2LCJleHAiOjE2NzUzOTk0MjZ9.C2kwDfZ15O6y3L6vKmVHGlwvTDtafkLl2KYL3iYuP7J0nJZgsS0MG3gyUcvzQxGBKoA7ZAcJGKp_FJMbDAboyw
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const users = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 10);
        user.password = hash;
      },
    },
  }
);

module.exports = users;
