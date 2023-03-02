'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight =  navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark'); 
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle Scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => { // navbarMenu를 클릭했을 때
    const target = event.target; 
    const link = target.dataset.link; // 어떤 menu를 선택했는지 link에 담음.
    if(link == null){
        return;
    }
    
    scrollIntoView(link);
});

// Handle contact me button
const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', () => {
    scrollIntoView('#contact');
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}