"use strict";

const startTask = document.querySelector(".task5-go");
let task = ['Latest technology news', 'JavaScript weekly newsletter','Get best sale offers now!','[SPAM] How to earn fast money?' ];


const checkForSpam = function(str) {
  let lowerStr = str.toLowerCase();

  if( lowerStr.includes('spam') || lowerStr.includes('sale')){
    alert(`Подстроки ${"spam"} или  ${"sale"} \n ПРИСУТСТВУЮТ в  строке: \n ${str}`)
  }else{
    alert(`Подстроки ${"spam"} или  ${"sale"} \n ОТСУТСТВУЮТ  в  строке: \n ${str}`)
  }


};


// let checkEmptyProm = function (message){
//   let userData=prompt(`Проверяем наличие подстрок ${"spam"} и  ${"sale"}, в строке:`, message);
//   if(userData==null) {
//     alert("Отменено")
//   }else{
//     checkForSpam(userData);
//   }
// };


function checkEmptyProm (message){
  let userData=prompt(`Проверяем наличие подстрок ${"spam"} и  ${"sale"}, в строке:`, message);
  if(userData==null) {
    alert("Отменено")
  }else{
    checkForSpam(userData);
  }
}




startTask.addEventListener("click", function () {
 for(let message of task){
   checkEmptyProm(message);
 }
});