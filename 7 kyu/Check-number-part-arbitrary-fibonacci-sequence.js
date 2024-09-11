/* DESCRIPTION */
/* You will be given a function, isFibo, which will take three arguments: a, b and f.
a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.
Good luck, muh fellow coding warrior. */

/* SOLUTION */
function isFibo(first, second, number) {
    // Проверяем, если третий аргумент равен одному из первых двух
    if (number === first || number === second) {
      return true;
    }
    
    let next = first + second;
  
    // Генерируем числа Фибоначчи до тех пор, пока не превысим третий аргумент
    while (next <= number) {
      if (next === number) {
        return true; // Если найдено совпадение
      }
      
      // Обновляем значения для следующего числа Фибоначчи
      first = second;
      second = next;
      next = first + second;
    }
  
    return false; // Если число не найдено
  }

console.log(isFibo(0,1,2));//true
console.log(isFibo(1,4,10));//false
console.log(isFibo(4,5,23));//true
console.log(isFibo(100,101,301));//false
console.log(isFibo(1,3,1));//true
