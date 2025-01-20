let userData=JSON.parse(localStorage.getItem('signupData'))

if(!userData || !userData.username){
    alert("invalid session,please login properly")
    window.location.href="Login.html";
}
else{
    let messageAlert=document.getElementById('message');
    messageAlert.textContent=alert(`Welcome to ${userData.username}`);
}
 
let logout=document.getElementById('logout');
logout.addEventListener('click',()=>{
    alert("the user is logged out");
    window.location.href='Login.html';
})

let bugatti=document.getElementById('bugatti');
bugatti.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="bugatti.html"
})
let rollsroyce=document.getElementById('rollsroyce');
rollsroyce.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="bugatti.html"
})
let ferrari=document.getElementById('ferrari');
ferrari.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="bugatti.html"
})
//lamborgini
let lamborgini=document.getElementById('lamborgini');
lamborgini.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="bugatti.html"
})