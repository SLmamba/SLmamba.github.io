let user = [`Ратушняк Андрій`, `Горенко Олександра`, `Проторченко Олександер`, `Денесюк Влад` ];
let table = document.getElementById(`table`);
let data =`<tr><th>№</th><th>Користувач</th><th>Відправити лист</th></tr>`; 
for(i=0; i<user.length; i++ ){

if(i % 2 == 0){
data += `<tr class="gray"><td>${i+1}</td><td>${user[i]}</td><td><input type="checkbox"></td></tr>`;
        }else{
data += `<tr><td>${i+1}</td><td>${user[i]}</td><td><input type="checkbox"></td></tr>`;
}  
}



table.innerHTML = data;
