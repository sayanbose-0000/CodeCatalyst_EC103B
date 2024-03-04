const ham = document.querySelector('.ham-menu');
const navHead = document.querySelector('.header');

function toggleHamburger(){
    navHead.classList.toggle('active');
};

ham.addEventListener('click',toggleHamburger);


document.addEventListener("DOMContentLoaded", () => {
  const imageArr = [
    "./images/gym1",
    "./images/gym2",
    "./images/gym3",
    "./images/gym4",
    "./images/gym5",
    "./images/gym6",
    "./images/gym7",
  ];

  const swiperSlide = document.querySelector('.swiper-slide');
  const leftArrow = document.querySelector('.leftarrow');
  const rightArrow = document.querySelector('.rightarrow');


  let i = 0;

  setInterval(() => {
    i = (i + 1) % imageArr.length;
    swiperSlide.style.backgroundImage = `url(${imageArr[i]}.jpg)`;
  }, 4000);


});




document.addEventListener('DOMContentLoaded', () => {
    const circle1 = document.querySelector('#circle1');
    let arr1 = [];
    setInterval(() => {
      for (let i = 0; i < 8; i++) {
        arr1.push(Math.floor(Math.random() * 100));
      }
      circle1.style.borderRadius = `${arr1[0]}% ${arr1[1]}% ${arr1[2]}% ${arr1[3]}% / ${arr1[4]}% ${arr1[5]}% ${arr1[6]}% ${arr1[7]}%`;
      arr1 = []
    }, 500);
  
    const circle2 = document.querySelector('#circle2');
    let arr2 = [];
    setInterval(() => {
      for (let i = 0; i < 8; i++) {
        arr2.push(Math.floor(Math.random() * 100));
      }
      circle2.style.borderRadius = `${arr2[0]}% ${arr2[1]}% ${arr2[2]}% ${arr2[3]}% / ${arr2[4]}% ${arr2[5]}% ${arr2[6]}% ${arr2[7]}%`;
      arr2 = []
    }, 500);
    
    const circle3 = document.querySelector('#circle3');
    let arr3 = [];
    setInterval(() => {
      for (let i = 0; i < 8; i++) {
        arr3.push(Math.floor(Math.random() * 100));
      }
      circle3.style.borderRadius = `${arr3[0]}% ${arr3[1]}% ${arr3[2]}% ${arr3[3]}% / ${arr3[4]}% ${arr3[5]}% ${arr3[6]}% ${arr3[7]}%`;
      arr3 = []
    }, 500);
  
    const circle4 = document.querySelector('#circle4');
    let arr4 = [];
    setInterval(() => {
      for (let i = 0; i < 8; i++) {
        arr4.push(Math.floor(Math.random() * 100));
      }
      circle4.style.borderRadius = `${arr4[0]}% ${arr4[1]}% ${arr4[2]}% ${arr4[3]}% / ${arr4[4]}% ${arr4[5]}% ${arr4[6]}% ${arr4[7]}%`;
      arr4 = []
    }, 500);
  })

