const sequelize = require('../util/database');
const userLoginDetails = require('../models/userLoginDetails');

const stringValidator = (data) => {
  const { name, email, phoneNumber, password } = data;
  if (email.length == 0 || email == undefined) {
    return false;
  } else {
    return true;
  }
};

const signUp = (req, res) => {
  const result = req.body;
  const { name, email, number, password } = result;
  const validate = stringValidator(result);

  if (validate) {
    userLoginDetails
      .create({
        username: name,
        email: email,
        phoneNumber: number,
        password: password,
      })
      .then(() => {
        console.log('new user added to the database');
        res.send('New user added successfully');
      })
      .catch((err) => {
        console.log(err);
        res.send('user already exists');
      });
  } else {
    res.send('pls fill all the details.');
  }
};

module.exports = signUp;
