    let igra =[1, 2, 5];
for(i=1; i<6; i++){
    let cifra = prompt(`Введіть число`)
    let cifra_num = Number(cifra);
    let y = igra.indexOf(cifra_num);
if(y == -1){
    igra.push(cifra_num);
}else{
igra[y] = `*`;
}



}
console.log(igra);