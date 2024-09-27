/* DESCRIPTION */
/* ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect. */

/* SOLUTION */
function vaporcode(string) {
    let strUp = string.toUpperCase();
  
    //Разделяем строку на слова, затем каждое слово разделяем на буквы и соединяем с пробелами
    let result = strUp.split(' ').map(word => word.split('').join('  ')).join('  ');
    
    // Удаляем пробелы в начале и конце строки
    return result.trim();
  }
  
  console.log(vaporcode("Lets go to the movies"));//"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
  console.log(vaporcode("lu odujocc uystjgnev iuh hekmu egkhb tk "));