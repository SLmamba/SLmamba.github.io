let Neme = prompt(`Як вас звати`);
let uservi1 = confirm ('Зараз 2004 рік?');
let uservi2 = confirm ('Ми живемо на Землі?');
let uservi3 = confirm ('Ти робот?');
let uservi4 = confirm ('Свиня людина?');
let uservi5 = confirm ('Супутник Землі Місяц?');
let uservi6 = confirm ('Проголошення незалежності України 1991?');
let uservi7 = prompt ('Скільки океанів на нашій планеті?');
let uservi8 = prompt('Скільки хромосом у любдини?');
let uservi9 = prompt ('Який зарас рік?');
let uservi10 = prompt ('Яка по рахунку земля від сонця?');
let schet = 0;



    if(uservi1 == false){
     schet = schet + 1;
    }else{}
    
    if(uservi2 == true){
     schet = schet + 1;
    }else{}

    if(uservi3 == false){
     schet = schet + 1;
    }else{}

    if(uservi4 == false){
     schet = schet + 1;
    }else{}

    if(uservi5 == true){
    schet = schet + 1;
    }else{}

    if(uservi6 == true){
    schet = schet + 1;
    }else{}

    if(uservi7 == `5` || `пять`){
    schet = schet + 1; 
    }else{}

    if(uservi8 == `46` || 'сорок шість'){
    schet = schet + 1;
    }else{}
    
    if(uservi9 == `2021` || '2021рік' || '2021р'){
    schet = schet + 2;
    }else{}

    if(uservi10 == `3` || 'три' ||'третя'){
    schet = schet + 2;
    }else{}

    if(schet < 6 ){
    alert(`${name} ваш рівень Початковий ${schet}`);
    }else if(schet >= 6 && schet < 10){
    alert(`${name} ваш рівень Середній ${schet}`);
    }else{
    alert(`${name} ваш рівень Високий ${schet}`);
    }
