const errorHandler = require('../util/errorHandler');
const {
  bcrypt,
  jwt,
  jwtSecret,
  extractUserIDFromToken,
  validateEmail,
  validateProvider,
} = require('../util/common');

const User = require('../models/customerModel');

module.exports = {
  customerSignUp: async (req, res) => {
    try {
      const data = req.body;

      if (Object.keys(data).length !== 4) {
        return errorHandler.clientError(res, 'inputFeild', 400);
      }

      let { name, email, password, school } = data;

      name = name.trim();
      email = email.trim();
      password = password.trim();
      school = school.trim();

      if (!name || !email || !password || !school) {
        return errorHandler.clientError(res, 'inputFeild', 400);
      }
      if (!validateEmail(email)) {
        return errorHandler.clientError(res, 'emailValidate', 400);
      }
      try {
        const existingUser = await User.getByEmail(email);
        if (existingUser) {
          errorHandler.clientError(res, 'emailExist', 403);
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);

          const [result] = await User.insertNewCustomer(
            name,
            email,
            hashedPassword,
            school,
          );
          const userID = result.insertId;

          const user = await User.getByID(userID);

          const payload = {
            id: user.id,
            provider: user.provider,
            name: user.name,
            email: user.email,
          };
          const accessToken = jwt.sign(payload, jwtSecret);

          const responseData = {
            data: {
              access_token: accessToken,
              customer: payload,
            },
          };
          res.status(200).json(responseData);
        }
      } catch (error) {
        errorHandler.serverError(res, error, 'sqlquery');
      }
    } catch (error) {
      errorHandler.serverError(res, error, 'internalServer');
    }
  },
  customerSignIn: async (req, res) => {
    try {
      const data = req.body;

      if (Object.keys(data).length !== 3) {
        return errorHandler.clientError(res, 'inputFeild', 400);
      }
      let { provider, email, password } = data;

      provider = provider.trim();
      email = email.trim();
      password = password.trim();

      // Validate user input
      if (!provider || !email || !password) {
        return errorHandler.clientError(res, 'inputFeild', 400);
      }
      try {
        // Validate if user exist in our database
        const user = await User.getByEmail(email);

        if (
          user &&
          validateProvider(provider) &&
          (await bcrypt.compare(password, user.password))
        ) {
          // Generate JWT
          const payload = {
            id: user.id,
            provider: user.provider,
            name: user.name,
            email: user.email,
          };
          const accessToken = jwt.sign(payload, jwtSecret);

          const responseData = {
            data: {
              access_token: accessToken,
              customer: payload,
            },
          };
          res.status(200).json(responseData);
        } else {
          errorHandler.clientError(res, 'signInFailed', 403);
        }
      } catch (error) {
        errorHandler.serverError(res, error, 'sqlquery');
      }
    } catch (error) {
      errorHandler.serverError(res, error, 'internalServer');
    }
  },
  updateCustomerPassword: async (req, res) => {
    const currentID = extractUserIDFromToken(req);
    const { new_password } = req.body;

    if (new_password.trim() === '') {
      return errorHandler.clientError(res, 'passwordValidate', 400);
    }

    const userRow = await User.getByID(currentID);
    if (await bcrypt.compare(new_password, userRow.password)) {
      return errorHandler.clientError(res, 'duplicatePassword', 403);
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);
    await User.updatePassword(currentID, hashedPassword);

    const responseData = {
      data: {
        customer: {
          id: currentID,
        },
      },
    };

    res.status(200).json(responseData);
  },
  getCustomerProfile: async (req, res) => {
    try {
      const currentID = extractUserIDFromToken(req);
      const userRow = await User.getByID(currentID);

      const customer = {
        id: userRow.id,
        name: userRow.name,
        email: userRow.email,
        picture: userRow.picture,
        school: userRow.school,
        provider: userRow.provider,
      };

      const responseData = {
        data: { customer },
      };

      res.status(200).json(responseData);
    } catch (error) {
      errorHandler.clientError(res, 'userNotFound', 400);
    }
  },
  updateCustomerProfile: async (req, res) => {
    try {
      const currentID = extractUserIDFromToken(req);
      const { name, school, email } = req.body;

      if (!name && !school && !email) {
        return errorHandler.clientError(res, 'inputFeild', 400);
      }

      if (email && !validateEmail(email)) {
        return errorHandler.clientError(res, 'emailValidate', 400);
      }

      try {
        await User.updateProfile(currentID, name, school, email);

        const responseData = {
          data: {
            customer: {
              id: currentID,
            },
          },
        };

        res.status(200).json(responseData);
      } catch (error) {
        errorHandler.serverError(res, error, 'sqlquery');
      }
    } catch (error) {
      errorHandler.serverError(res, error, 'internalServer');
    }
  },
  updateCustomerPicture: async (req, res) => {
    try {
      const currentID = extractUserIDFromToken(req);

      if (req.fileError) {
        return res.status(400).json({ error: req.fileError });
      }
      if (!req.file) {
        return res.status(400).json({ error: 'No picture provided' });
      }
      try {
        const pictureURL = await User.updatePicture(
          currentID,
          req.file.filename,
        );

        const responseData = {
          data: {
            picture: pictureURL,
          },
        };

        res.status(200).json(responseData);
      } catch (error) {
        if (req.fileError) {
          res.status(400).json({ error: req.fileError });
        } else {
          errorHandler.serverError(res, error, 'sqlquery');
        }
      }
    } catch (error) {
      errorHandler.serverError(res, error, 'internalServer');
    }
  },
};
