const sequelize = require('../util/database');
const userLoginDetails = require('../models/userLoginDetails');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  let credentials = req.body;

  const { email, password } = credentials;

  // let decryptedPassword = await bcrypt.compare---------------------------------------->

  userLoginDetails
    .findOne({
      where: {
        email: email,
      },
    })
    .then((response) => {
      if (response !== null) {
        if (response.dataValues.password == credentials.password) {
          res.send('login successful.');
        } else {
          res.send(
            'user exist but password do not match,pls.check your password and come back.'
          );
        }
      } else {
        res.send("user doesn't exist.");
      }
      const { username, password } = response;
      console.log(username, password);
    })
    .catch((err) => console.log(err));
};

module.exports = login;
