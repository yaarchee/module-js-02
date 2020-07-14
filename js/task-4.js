"use strict";

const startTask = document.querySelector('.task4-go');

const formatString = function(string) {
  if(string.length<=40){
    alert(`${string}, длинна вашей строки ${string.length} символа`) ;
  }else{
    alert(`${string.slice(0, 41)}..., длинна вашей строки ${string.length} символ(а)`) ;

  }
};


startTask.addEventListener('click', ()=>{
  const userData=prompt('Введите ваше сообщение');
  if(userData==null) {
    alert('Отменено')
  }else{
    formatString(userData);
  }
});



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
