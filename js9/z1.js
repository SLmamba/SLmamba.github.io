let arr_1 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']; 
let arr_2 = [1200, 1140, 1400, 1150, 1400, 2500, 2950];
let summa = 0;
let max = [0];
let min = [0];
console.log(`День - прибуток`);

for(i=0 ; i<7 ; i++){
console.log(`${arr_1[i]} - ${arr_2[i]}`);
max = arr_2[i];
summa = summa + arr_2[i];
}

for(i=0; i > arr_2.length; i++){
    if(max < chisla[i]){
    min =  arr_2[i];
}
}
console.log(`Загальна сума прибутку за тиждень - ${summa} грн`);
console.log(`max ${max}`);
console.log(`min ${min}`);





/*let arr_1 =[1, 2, 3, 4];
let arr_2 =[3, 8, 1, 9, 10];
let arrey = arr_1.slice();
for(i=0; i<arr_2.length; i++){
if(arrey.indexOf(arr_2[i]) == -1){
    arrey.push(arr_2[i]);
}

}

console.log(arr_1);
console.log(arr_2);
console.log(arrey);

let pov_arrey = [1, 2, 7, 10, 2, 3, 3, 3, 5, 1, 8, 2, 7, 10, 2, 3, 3, 3, 5, 1, 2];
let arrey = [];

for(i=0; i<pov_arrey.length; i++){
if(arrey.indexOf(pov_arrey[i]) == -1){
arrey.push(pov_arrey[i]);
}else{

}

}
console.log(pov_arrey);
console.log(arrey);

let chisla = [3, 7, 8, 2, 9, 1, 25];
let max = chisla[0];
let min = chisla[0];
for(i=0; i<chisla.length; i++){
if(max < chisla[i]){
    max = chisla[i];
}else{
    min = chisla [i];
}



}
console.log(chisla);
console.log(`max ${max}`);
console.log(`min ${min}`);*/
