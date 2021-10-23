let chislo = [];
for(i=1; i<11; i++){
chislo.push(prompt(`введить 10 числ`));
}

let minus = prompt(`Ведіть скільпи числил треба видалити `);
for(i=0; i<minus; i++){
chislo.pop();

}

alert(chislo);






/*let gamers1 = prompt(`введіть имя гравець 1`);
let gamers2 = prompt(`введіть имя гравець 2`);

let chislo = [];
for(i=1; i<6; i++){
chislo.push(prompt(`${gamers1} введить число від 1 до 20`));

}
alert(`ПЕРЕДАЙТЕ ГРАВЦЮ 2`);

for(i=8; i>7; i++){

let answer = prompt(`${gamers2} відгадайте число від 1 до 20`);

if(chislo.indexOf(answer) == -1){
    alert(`програв`);
}else{
    alert(`виграв`);
break
}

}

console.log(chislo);*/