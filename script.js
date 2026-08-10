
const t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-links');
if(t&&n){t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o));});}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
