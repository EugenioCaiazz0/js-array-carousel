const imgWrapper = document.getElementById('imgWrapper');
const leftArrow = document.querySelector(`.leftArrow`);
const rightArrow = document.querySelector(`.rightArrow`);

const images = [
  './assets/img/consegna/img/Miles_morales.webp',
  './assets/img/consegna/img/Rift_Apart.webp',
  './assets/img/consegna/img/Fortnite',
  './assets/img/consegna/img/Stray.webp',
  './assets/img/consegna/img/Avengers.webp',
];


let counterImg = 0;

for(let i = 0; i < images.length; i++){
  const img = images[i];
  imgWrapper.innerHTML += `<img class="img hide" src="${img}">`;
  console.log(img);
}


const itemsCollecion = document.getElementsByClassName('img');
itemsCollecion[counterImg].classList.remove('hide');

leftArrow.addEventListener('click',function(){

  itemsCollecion[counterImg].classList.add('hide');
 
  counterImg--;
  
  if(counterImg < 0){
    counterImg = images.length - 1;
  }
  itemsCollecion[counterImg].classList.remove('hide');

});

rightArrow.addEventListener('click',function(){

  itemsCollecion[counterImg++].classList.add('hide');

  if(counterImg > images.length - 1){
    counterImg = 0;
  }
  itemsCollecion[counterImg].classList.remove('hide');
});