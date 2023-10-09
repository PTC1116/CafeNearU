const express = require('express');

const router = express.Router();
const controller = require('../controllers/homeController');
const { checkCustomerLogin } = require('../util/common');

router.get('/', checkCustomerLogin, controller.getHomepage);

module.exports = router;
