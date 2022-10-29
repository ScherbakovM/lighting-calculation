
//Кнопки вниз 
const btn = document.getElementById('scrollB2');
const btnSecond = document.getElementById('scrollB3');
const btnThree = document.getElementById('scrollB4')


//Кнопки вверх
const btnTopOne = document.getElementById('top_One');
const btnTopTwo = document.getElementById('top_Two');
const btnTopThree = document.getElementById('top_Three');

//Блоки
const block1 = document.getElementById('calcForm');
const block2 = document.getElementById('descriptionNorms');
const block3 = document.getElementById('descriptionCeiling');
const block4 = document.getElementById('calculation');

// Действия по клику.

//Скроллы вниз

btn.addEventListener('click', (scroll1) =>  { 
    block2.scrollIntoView({block: "center", behavior: "smooth"}); 
} );

btnSecond.addEventListener('click', (scroll2) => {
    block3.scrollIntoView({block: "center", behavior: "smooth"});
} );

btnThree.addEventListener('click', (scroll5) =>  { 
    block4.scrollIntoView({block: "center", behavior: "smooth"}); 
});

// Скрорхллы вверх

btnTopOne.addEventListener('click', (scroll3) =>  { 
    block1.scrollIntoView({block: "center", behavior: "smooth"}); 
});

btnTopTwo.addEventListener('click', (scroll4) =>  { 
    block2.scrollIntoView({block: "center", behavior: "smooth"}); 
});

btnTopThree.addEventListener('click', (scroll5) =>  { 
    block3.scrollIntoView({block: "center", behavior: "smooth"}); 
});


//Блок для расчета 

// Инпуты 

const blockE = document.getElementById('blockE');
const blockS = document.getElementById('blockS');
const blockH = document.getElementById('blockH');
const blockF = document.getElementById('blockF');




