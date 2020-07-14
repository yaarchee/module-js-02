"use strict";

const startTask = document.querySelector('.task3-go');
const result = document.querySelector('.task3 .result');


const findLongestWord = function(string) {
  const arr = string.split(" ");
  const answerArr= [];
  function compareWords(a, b) {
    if (a.length < b.length ) return 1;
    if (a.length  == b.length ) return 0;
    if (a.length  > b.length ) return -1;
  }
  let tempArr = arr.sort(compareWords);

  //answerArr.push(tempArr[0]);
  for(let item of tempArr){
    if(answerArr.length == 0){
      answerArr.push(item);
    }else if( !answerArr.includes(item) && answerArr[0].length == item.length ){
      answerArr.push(item);

    }
  }

  result.innerHTML = `Самые длинные слова это: ${answerArr.join(' ')}` ;

};

startTask.addEventListener('click',()=> {
   const userData=prompt('введите слова через проблел');
   if(userData==null) {
     alert('Отменено')
   }else{
     findLongestWord(userData);
   }


});
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
//console.log(findLongestWord(prompt("введите слова через проблел"))); // 'jumped'

