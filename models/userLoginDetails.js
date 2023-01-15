const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const userLoginDetails = sequelize.define('userLoginDetails',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    phoneNumber : {
        type : Sequelize.BIGINT,
        allowNull : false
    },
    password : {
        type : Sequelize.INTEGER,
        allowNull : false,
    }

})

module.exports = userLoginDetails;