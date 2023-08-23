const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const base64 = require('base-64')

const errorHandler = require('./errorHandler');

const jwtSecret = process.env.JWT_SECRET;
module.exports = {
  bcrypt: bcrypt,
  jwt: jwt,
  jwtSecret: jwtSecret,

  userAuthorization: async (req, res, next) => {
    if (!req.header('Authorization')) {
      return errorHandler.clientError(res, 'noToken', 401);
    }
    try {
      // Verify user token
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, jwtSecret);

      const userData = {
        id: decoded.id,
        name: decoded.name,
      };

      next();
    } catch (error) {
      errorHandler.clientError(res, 'invalidToken', 403);
    }
  },
  extractUserIDFromToken: (req) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, jwtSecret);
    const userID = decoded.id;

    return userID;
  },
  validateEmail: (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  },
  validateProvider: (provider) => {
    return provider === 'native' || provider === 'google';
  },
  checkCustomerLogin: async (req, res, next) => {
    console.log('req.header:', req.header);
    if (req.header('Authorization')) {
      const token = req.header('Authorization').replace('Bearer ', '');
      console.log(token);
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          console.log('err:', err);
          req.user = undefined;
          return next();
        }
        const { id } = decoded;
        req.user = { id };
        return next();
      });
    } else {
      console.log('authorization header is missing');
      req.user = undefined;
      return next();
    }
  },
  returnHeader: (req, res) => {
    res.json(req.headers);
  },
};
