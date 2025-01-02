const wrapper=document.querySelector('.wraper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPOP=document.querySelector('.btn');
const btnClose=document.querySelector('.close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnPOP.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

btnClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})