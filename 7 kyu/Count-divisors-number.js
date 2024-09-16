/* DESCRIPTION */
/* YCount the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case. */

/* SOLUTION */
function countDivisors(n) {
    let count = 0;
    const limit = Math.sqrt(n); // Вычисляем предел

    for (let i = 1; i <= limit; i++) {
        if (n % i === 0) { // Если i делит n
            count++; // Увеличиваем счетчик для i
            if (i !== n / i) { // Проверка, чтобы не считать квадратный корень дважды
                count++; // Увеличиваем счетчик для n/i
            }
        }
    }

    return count; // Возвращаем количество делителей
}

// Примеры использования
console.log(countDivisors(4));  // Вывод: 3
console.log(countDivisors(5));  // Вывод: 2
console.log(countDivisors(12)); // Вывод: 6
console.log(countDivisors(30)); // Вывод: 8