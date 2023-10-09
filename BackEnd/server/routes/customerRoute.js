const express = require('express');

const router = express.Router();
const customerController = require('../controllers/customerController');
const { userAuthorization } = require('../util/common');
const upload = require('../util/multer');

router.post('/signup', customerController.customerSignUp);
router.post('/signin', customerController.customerSignIn);

router.put(
  '/update-password',
  userAuthorization,
  customerController.updateCustomerPassword,
);

router.get(
  '/profile',
  userAuthorization,
  customerController.getCustomerProfile,
);
router.patch(
  '/profile',
  userAuthorization,
  customerController.updateCustomerProfile,
);
router.put(
  '/picture',
  userAuthorization,
  upload.single('picture'),
  customerController.updateCustomerPicture,
);

module.exports = router;
