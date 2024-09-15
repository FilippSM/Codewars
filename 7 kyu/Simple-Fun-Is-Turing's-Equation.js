/* DESCRIPTION */
/* You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.
Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards. */

/* SOLUTION */
function isTuringEquation(str){
    // Удаляем символы + и =
    const cleanedStr = str.replace(/[+=]/g, ' ');
      
    // Разделяем строку на числа и фильтруем пустые строки
    const numbersArray = cleanedStr.split(' ');
    
    // Преобразуем строки в числа
    //return numbersArray.map(Number);
  
  
  
    let oneItem = Number(numbersArray[0].toString().split('').reverse().join(''));
     console.log(oneItem); 
    let oneTwo = Number(numbersArray[1].toString().split('').reverse().join(''));
     console.log(oneTwo); 
    let oneRes = Number(numbersArray[2].toString().split('').reverse().join(''));
    console.log(oneRes); 
    return oneItem + oneTwo === oneRes;
  }

  console.log(isTuringEquation("73+42=16")); //true
  console.log(isTuringEquation("0006197+00005921000=00066802")); //false