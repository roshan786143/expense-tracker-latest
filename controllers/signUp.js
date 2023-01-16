const sequelize = require('../util/database');
const userLoginDetails = require('../models/userLoginDetails');
const bcrypt = require('bcrypt');

const emailValidatorFunc = (email) => {
  if (email.length == 0 || email == undefined) {
    return false;
  } else {
    return true;
  }
};

const signUp = async (req, res) => {
  const result = req.body;
  let hashedPassword;
  let { name, email, number, password } = result;

  const emailValidate = emailValidatorFunc(email);

  if (emailValidate) {
    // validating the email about whether it is entered (null) or checking if the user entered the same email.
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      console.log(err);
    }

    userLoginDetails
      .create({
        username: name,
        email: email,
        phoneNumber: number,
        password: hashedPassword,
      })
      .then(() => {
        console.log('new user added to the database -->', password);
        console.log('normal password -->', password);
        console.log('hashed password -->', hashedPassword);
        res.send('New User added Successfully.');
      })
      .catch((err) => {
        console.log(err);
        res.send('user already exists.');
      });
  } else {
    res.send('pls fill all the details.');
  }
};

module.exports = signUp;
