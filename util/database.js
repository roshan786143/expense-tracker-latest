const Sequelize = require('sequelize');
const mysql = require('mysql2');

const sequelize = new Sequelize('expense','root','98127634$Sql',{
    dialect : 'mysql',
    hostname : 'localhost'
})


sequelize.authenticate().then(()=>console.log('database connection established successfully - 1.'.blue))
.catch(err=>console.log(err))

module.exports = sequelize;