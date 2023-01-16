const express = require('express');
const app = express();
const sequelize = require('./util/database')
const userLoginDetails = ('./models/userLoginDetails');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/signUp');
const colors = require('colors');

const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());

sequelize.authenticate().then(()=>console.log('database connection established successfully - 1.'.blue))
.catch(err=>console.log(err))

sequelize.sync().then(()=>console.log('tables synced successfully - 2'.green))
.catch(err=>console.log(err))

app.get('/', (req, res)=>{
    res.sendFile('signUp/index.html', { root: __dirname });
});


app.get('/login',(req,res)=>{
    res.sendFile('login/loginPage.html',{root:__dirname});
})

app.use('/user',router);


app.listen(PORT,()=>console.log('server has started'));