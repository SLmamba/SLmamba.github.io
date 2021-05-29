let email = `ivan@gmail.com`;
let user = `Іван Лінивський`;
let userEmail = prompt('Ведіть Email');
let password = "ivan1337";

if(email == userEmail){
    let UserPassword = prompt(`Ведіть пароль для аккаунта користувача ${user}`)
    if(password == UserPassword ){
        alert(`Вітаю на сайті ${user}`)
    }else{
     alert(`Пароль не провильний`)
    }

}else{
 alert('Користувач з таким Email не існує')
}