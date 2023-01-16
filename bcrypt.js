const bcrypt = require('bcrypt');

const fun1 = async()=>{
   const password = await bcrypt.hash('hello',10);
    console.log('my hashed password -->',password);
    const password1 = await bcrypt.compare('hello',password);
    console.log('my second hashed password -->',password1);
}

fun1();


