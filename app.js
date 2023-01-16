const express = require('express');
const app = express();
const sequelize = require('./util/database')
const userLoginDetails = ('./models/userLoginDetails');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const colors = require('colors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res)=>{
    res.sendFile('signUp/index.html', { root: __dirname });
});


app.get('/login',(req,res)=>{
    res.sendFile('login/loginPage.html',{root:__dirname});
})

app.use('/user',router);


app.listen(PORT,()=>console.log(`server has started on port ${PORT}`));