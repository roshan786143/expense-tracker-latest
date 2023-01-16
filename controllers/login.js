const sequelize = require('../util/database');
const userLoginDetails = require('../models/userLoginDetails');
const bcrypt = require('bcrypt');

const login = (req, res) => {
  let credentials = req.body;

  const { email, password } = credentials;

  userLoginDetails
    .findOne({
      where: {
        email: email,
      },
    })
    .then((record) => {
      if (record !== null) {

        bcrypt.compare(credentials.password,record.dataValues.password)
        .then((check)=>{
            console.log("my normal password -->",credentials.password);
            console.log("my encrypted password -->",record.dataValues.password);
            console.log("my record -->",record);
            console.log("decrypt -->",check);

            if(check){
                res.send('login successful.')
            }else{
                res.send('user exist but password do not match,pls.check your password and come back.')
            }
        })
        .catch(err=>{
            console.log(err)
        })

        // if (response.dataValues.password == password) {
        //   res.send('login successful.');
        // } else {
        //   res.send(
        //     'user exist but password do not match,pls.check your password and come back.'
        //   );
        // }
      } else {
        res.send("user doesn't exist.");
      }
      const { username, password } = response;
      console.log(username, password);
    })
    .catch((err) => console.log(err));
};

module.exports = login;
