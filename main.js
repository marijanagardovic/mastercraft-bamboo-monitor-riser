const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#menu-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    
})