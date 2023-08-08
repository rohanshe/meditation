hamburger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
ulnav = document.querySelector('.ul-nav')
rightnavbar = document.querySelector('.rightnavbar')

hamburger.addEventListener('click', () => {
    rightnavbar.classList.toggle('v-class');
    ulnav.classList.toggle('v-class');
    navbar.classList.toggle('h-navbar');
})