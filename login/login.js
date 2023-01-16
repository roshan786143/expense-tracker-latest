const login = (event)=>{
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log('my email is -->',email);
}