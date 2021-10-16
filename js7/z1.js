let password = 1337;
let lich = 3;


for(i=1; i<4; i++){
let sproba =  prompt(`password - ${lich} attempts`)
lich--;

if(sproba == password){
   alert(`password true`);
   break;

    }
if(lich == 1){       
  alert(`підсказка 1**3`);
}
}