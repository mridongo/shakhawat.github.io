const wrap= document.querySelector('.wrapper');
const loginlink= document.querySelector('.login-link');
const registerlink= document.querySelector('.register-link');
const btnPopup= document.querySelector('.btnLogin-popUp');
const iconClose= document.querySelector('.icon-close');

console.log(loginlink);

registerlink.addEventListener('click', ()=>{
    wrap.classList.add('active');
    
});

loginlink.addEventListener('click', ()=>{
    wrap.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrap.classList.add('active-popup');
    
});

iconClose.addEventListener('click', ()=>{
    wrap.classList.remove('active-popup');
    
});

/* login code*/
const state= document.getElementById('_login');
state.addEventListener('click', ()=>{
    const Email= document.getElementById('email');
    const Password= document.getElementById('password');

    const webEmail= "mridongo@gmail.com";
    const webPassword= "12345";
    const webName= "Shakhawat"

    if(Email.value == webEmail && Password.value == webPassword){
        
        document.getElementById('name').innerHTML = "Hi " + webName;
        wrap.classList.remove('active-popup');
    }

    else{
        
        document.getElementById('warning').innerHTML = "Wrong Password!";
        wrap.classList.add('active-popup');
    }
});