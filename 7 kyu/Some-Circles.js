/* DESCRIPTION */
/* Write a function that takes as its parameters one or more numbers which are the diameters of circles.
The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".
You don't know how many circles you will be given, but you can assume it will be at least one. */

/* SOLUTION */
function inAscOrder(arr) {
    // Проверяем, если массив пустой или содержит только один элемент
    if (arr.length <= 1) {
        return true; // Автоматически считается отсортированным
    }

    // Проходим по массиву и проверяем порядок
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Если текущий элемент больше следующего, массив не отсортирован
        }
    }

    return true; // Если все проверки пройдены, массив отсортирован
}

// Примеры использования
console.log(inAscOrder([1, 2, 3, 4])); // Output: true
console.log(inAscOrder([1, 3, 2, 4])); // Output: false
console.log(inAscOrder([4, 5, 6]));    // Output: true
console.log(inAscOrder([]));           // Output: true
console.log(inAscOrder([1]));          // Output: true