"use strict";
 
const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      container = document.querySelector('.container');

const slideCount = mainSlide.querySelectorAll('div').length;
 let activeSlideIndex = 0;
 
sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
   changerSlide('up');
});
downBtn.addEventListener('click', () => {
   changerSlide('down');
});

function changerSlide(derection){
   if(derection === 'up'){
      activeSlideIndex++;
      if(activeSlideIndex === slideCount){
         activeSlideIndex = 0;
      }  
   } else if (derection === 'down'){
      activeSlideIndex--;
      if(activeSlideIndex < 0){
         activeSlideIndex = slideCount - 1;
      }
   }
   const height = container.clientHeight;
   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}