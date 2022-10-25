
//Кнопкb вниз 
const btn = document.getElementById('scrollB2');
const btnSecond = document.getElementById('scrollB3');

console.log(btnSecond);

//Кнопки вверх
const btnTopOne = document.getElementById('top_One');
const btnTopTwo = document.getElementById('top_Two');

//Блоки
const block1 = document.getElementById('calcForm');
const block2 = document.getElementById('descriptionNorms');
const block3 = document.getElementById('descriptionCeiling');
console.log(block3);


// Команды


btn.addEventListener('click', (scroll1) =>  { 
    block2.scrollIntoView({block: "center", behavior: "smooth"}); 
} );

btnSecond.addEventListener('click', (scroll2) => {
    block3.scrollIntoView({block: "center", behavior: "smooth"});
} );

btnTopOne.addEventListener('click', (scroll3) =>  { 
    block1.scrollIntoView({block: "center", behavior: "smooth"}); 
});

btnTopTwo.addEventListener('click', (scroll4) =>  { 
    block2.scrollIntoView({block: "center", behavior: "smooth"}); 
});