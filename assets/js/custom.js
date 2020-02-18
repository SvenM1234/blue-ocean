/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */



if(document.querySelector('#carousel')){
    let carousel = document.querySelector('#carousel');
    parrentCarousel = carousel.parentNode;
    parrentCarousel.removeChild(carousel);
    document.querySelector('#header').appendChild(carousel);
}
 
if(document.querySelector('#_desktop_logo')){
 let logo = document.querySelector('#_desktop_logo');
 parrentLogo = logo.parentNode;
 parrentLogo.removeChild(logo);
 document.querySelector('.hidden-sm-down').insertBefore(logo, document.querySelector('.right-nav'));
}
