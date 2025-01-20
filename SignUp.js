let form=document.getElementById('signup-form')

let username=document.getElementById('username');
let email=document.getElementById('mail');
let password=document.getElementById('password');
let confirmPassword=document.getElementById('confirmpassword');

let usernameError=document.getElementById('usernameErrors');
let mailError=document.getElementById('mailErrors');
let passwordError=document.getElementById('passwordErrors');
let confirmPasswordError=document.getElementById('confirmPasswordErrors');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let valid=true;

    username.textContent='';
    email.textContent='';
    password.textContent='';
    confirmPassword.textContent='';


    if(username.value.length<3){

        usernameError.textContent=alert("Enter the minimum 3 characters");
        usernameError.style.color="red";
        valid=false;
    }
    else{
        usernameError.textContent='';
    }
    if(!email.validity.valid){
        mailError.textContent=alert("Enter the valid email");
        mailError.style.color="red";
        email.focus();
        valid=false;
    }else{
        mailError.textContent='';
    }
    if(password.value.length<6){
        passwordError.textContent=alert("Enter minimum 6 characters");
        passwordError.style.color="red";
        valid=false;
    }else{
        passwordError.textContent='';
    }
    if(password.value!==confirmPassword.value){
        confirmPasswordError.textContent=alert("Password is not matching");
        confirmPasswordError.style.color="red";
        valid=false;
    }else{
        confirmPasswordError.textContent='';
    }

    if(valid){
        userData={
            username:username.value,
            email:email.value,
            password:password.value
        }
    }

    localStorage.setItem("signupData", JSON.stringify(userData));
    alert("signup successfull redirect into login page");
    form.reset();
    window.location.href="Login.html";
})