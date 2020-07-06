"use strict";

const startTask = document.querySelector(".task6-go");
let input;
let numbers = [];
let total = 0;



startTask.addEventListener("click", function () {
  console.log(numbers+" массив");
  numbers = [];
  do{
    input = prompt("Введите число:");


    if(!Number.isNaN(Number(+input)) && input!=null){
      numbers.push(+input);
      
    }else if(input==null){
      alert("отмена");
    }else{
      alert("введите число");
    }
  }while (input!==null);
  for(let i of numbers){
    console.log(i);
  }
  console.log(numbers+" массив ,бефоре checkSum");
  checkSum();
});



function checkSum(){
  console.log(numbers+" массив checkSum");
  if(numbers.length>0){
    for(let i of numbers){
      total += i;
    }
    alert(`общая сумма чисел ${total}  \n массива  ${numbers}`);
  }
}




