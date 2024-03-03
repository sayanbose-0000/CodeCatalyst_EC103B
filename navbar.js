const ham = document.querySelector('.ham-menu');
const navHead = document.querySelector('.header');

function toggleHamburger(){
    navHead.classList.toggle('active');
};

ham.addEventListener('click',toggleHamburger);