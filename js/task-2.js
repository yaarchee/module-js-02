"use strict";

const startTask = document.querySelector(".task2-go");


let answer = [];
const calculateEngravingPrice = function(message, pricePerWord) {
  let arr = message.split(" ");
  answer.push(`Стоимость гравировки для = ${message}, при стоимости за слово ${pricePerWord}, составляет ${pricePerWord*(arr.length)}`) ;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  );
// 80


  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  );
 // 160


  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
 // 240


  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);
 // 120





startTask.addEventListener("click",function () {
  alert(answer);
  console.log(answer);

});



