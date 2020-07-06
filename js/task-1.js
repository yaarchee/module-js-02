"use strict";

const startTask = document.querySelector(".task1-go");





let answer = [];
const logItems = function(array) {
  array.forEach(function(item, index, array) {
    //console.log(`элемент массиса ${item}, и его порядновый номер ${index+1}`);
    answer.push(`элемент массива ${item}, и его порядновый номер ${index+1}`);

  });

  console.log(answer);
  alert(answer);
  answer = [];
};
startTask.addEventListener("click", function () {
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


});

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

