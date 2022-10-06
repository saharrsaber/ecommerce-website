'use strict';

// home page: open/close navbar menu on clicking the hamburger menu
let hamburger_icon = document.querySelector('.header .hamburger_icon');
let navbar = document.querySelector('.header .header__list');
let close_icon =  document.querySelector('.header .header__close');
if(hamburger_icon){
  hamburger_icon.addEventListener('click', function(e){
    navbar.classList.add('active');
  })
}
if(close_icon){
  close_icon.addEventListener('click', function(e){
    navbar.classList.remove('active');
  })
}

// product page: plus minus quantity
let quantity_minus =  document.querySelector('.product .quantity--minus');
let quantity_plus =  document.querySelector('.product .quantity--plus');
let quantity_input =  document.querySelector('.product .desc__quantity');

if(quantity_minus){
  quantity_minus.addEventListener('click',function(){
    if(quantity_input.value>0){
      quantity_input.value = Number(quantity_input.value)-1;
    }
  })
}
if(quantity_plus){
  quantity_plus.addEventListener('click',function(){
    if(quantity_input.value<10){
      quantity_input.value = Number(quantity_input.value)+1;
    }
  })
}

// product page: gallery image
let allProductImages = document.querySelectorAll('.product .small-img');
let ProductMainImage = document.querySelector('.product .main-img');

if(allProductImages){
  allProductImages.forEach(img => {
    img.addEventListener('click', function(e){
      ProductMainImage.src = e.target.src;
    })
  })
}