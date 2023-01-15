const { default: axios } = require("axios");
const signUp = async(event)=>{
  try{
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let number = event.target.number.value;
  let password = event.target.password.value;

let userData = {
    name,
    email,
    number,
    password
};

console.log(userData.email,userData.password,userData.name,userData.number);

const response = await axios.post("http://localhost/user/signUp",userData)
console.log(response);
}
catch(err){
  console.log(err);
}
}

  