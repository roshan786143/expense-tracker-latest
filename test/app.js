// const axios = require('axios');

const response = async()=>{
    try{
       const data = await axios.post('https://reqres.in/api/users')
       console.log(data.data.data[0]);
    }catch(err){
        console.log(err);
    }
}