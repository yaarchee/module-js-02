"use strict";

const startTask = document.querySelector(".task7-go");




const logins = [];


const isLoginValid = function(login) {
  if (login.length >=4 && login.length<=16){
    return true;
  }else{
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }


};

const isLoginUnique = function(allLogins, login) {
    if(allLogins.includes(login)){
      alert('Такой логин уже используется!');
      return true;
    }else{
      return false;
    }

};

const addLogin = function(allLogins, login) {
 if(isLoginValid(login) && !isLoginUnique(allLogins, login)){
   logins.push(login);
   alert('Логин успешно добавлен!');
   console.log(logins);

 }
};

startTask.addEventListener("click", function () {
  let inputData = prompt("Введите ваш логин");
  addLogin(logins, inputData);
});