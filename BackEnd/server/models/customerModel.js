const pool = require('../util/db');

module.exports = {
  insertNewCustomer: async (name, email, hashedPassword, school) => {
    const query =
      'INSERT INTO `customers` (name, email, password, school) VALUES (?, ?, ?, ?)';
    try {
      return await pool.query(query, [name, email, hashedPassword, school]);
    } finally {
      pool.releaseConnection();
    }
  },
  getByEmail: async (email) => {
    const query = 'SELECT * FROM `customers` WHERE `email` = ?';
    try {
      const [result] = await pool.query(query, [email]);
      return result[0];
    } finally {
      pool.releaseConnection();
    }
  },
  getByID: async (id) => {
    const query = 'SELECT * FROM `customers` WHERE `id` = ?';
    try {
      const [result] = await pool.query(query, [id]);
      return result[0];
    } finally {
      pool.releaseConnection();
    }
  },
  updateProfile: async (customer_id, name, school, email) => {
    try {
      const updateFields = [];
      const params = [];

      if (name) {
        updateFields.push('name = ?');
        params.push(name);
      }
      if (school) {
        updateFields.push('school = ?');
        params.push(school);
      }
      if (email) {
        updateFields.push('email = ?');
        params.push(email);
      }

      const query = `UPDATE customers SET ${updateFields.join(
        ', ',
      )} WHERE id = ?`;
      const [result] = await pool.query(query, [...params, customer_id]);
      return result;
    } finally {
      pool.releaseConnection();
    }
  },
  updatePassword: async (currentID, hashedpassword) => {
    const query = 'UPDATE `customers` SET password = ? WHERE id = ?';
    try {
      const [result] = await pool.query(query, [hashedpassword, currentID]);
      return result[0];
    } finally {
      pool.releaseConnection();
    }
  },
  updatePicture: async (currentID, filename) => {
    const pictureURL = `https://${process.env.HOST_NAME}/avatars/${filename}`;
    const updateQuery = 'UPDATE `customers` SET picture = ? WHERE id = ?';
    await pool.query(updateQuery, [pictureURL, currentID]);
    return pictureURL;
  },
};
