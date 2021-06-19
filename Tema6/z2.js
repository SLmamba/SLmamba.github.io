let ocinka =[];
let sum = 0;
for(i = 0; i < 4; i++){
  let hran = parseInt( prompt(`Ведіть оцінку`));

    ocinka[i] = hran;
    sum = hran + sum;
}
console.log(ocinka);
let yrok =`математики`;
let username =`Петро`;
let SerAr = sum/ocinka.length
console.log(`Вітаю ${username} ! Кількість оцінок з ${yrok} рівна ${ocinka.length}. Остання оцінка - ${ocinka[ocinka.length -1]}. Середня оцінка - ${SerAr}` );