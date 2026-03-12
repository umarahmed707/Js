let loginusers = JSON.parse(localStorage.getItem("users")) || [];
let users =[];

function register(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword =  document.getElementById("confirm_password").value;

    if(password != confirmpassword){
        alert("password and confirmpassword do not match");
        return;
    }

        for(let i=0; i<users.length; i++){
        if(users[i].email == email){
            alert("email already exists");
            return;
        }
    }

    let userobj ={
        username : username,
        email : email,
        password : password,
        confirmpassword : confirmpassword,

    }
    users.push(userobj);
    console.log(users); 

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
}