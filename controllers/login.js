const sequelize = require('../util/database');
const userLoginDetails = require('../models/userLoginDetails');

const login = (req,res)=>{
    let data = req.body;
    // console.log(data);
    const {email,password} = data;
    console.log(email,password);
    
    userLoginDetails.findOne({
        where : {
            email : email
        }
    }).then((response)=>{
        if(response !== null){
            if(response.dataValues.password == data.password){
                res.send('login successful.')
            }else{
                res.send('user exist but password do not match,pls.check your password and come back.')
            }
        }else{
            res.send('user doesn\'t exist.')
        }
        const {username,password} = response;
        console.log(username,password)})
    .catch(err=>console.log(err))

    // res.send('login successfully.')
}

module.exports = login;