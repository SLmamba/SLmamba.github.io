let cheslo = prompt(`Введіть число`);

if (cheslo > 0){
    alert('Введене число є додатнім');
}else if (cheslo < 0){
    alert('Введене число відємне');
}else if(cheslo == 0){
alert('Введене число не є ні додатнім ні відємним');
}else if(cheslo % 2 == 0){
    alert(`Число парне`);
   }else{
    alert(`Число не парне`);
   }