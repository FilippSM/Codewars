/* DESCRIPTION */
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

/* SOLUTION */
function highAndLow(str){
    const numbers = str.split(' ').map(Number);
  
  // Находим максимальное и минимальное значение
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  
  // Формируем строку в формате "max min"
  const result = `${max} ${min}`;
   return result;
  }
  
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))//"42 -9"