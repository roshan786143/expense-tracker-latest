const Sequelize = require('sequelize');
const mysql = require('mysql2');

const sequelize = new Sequelize('expense','root','98127634$Sql',{
    dialect : 'mysql',
    hostname : 'localhost'
})

module.exports = sequelize;