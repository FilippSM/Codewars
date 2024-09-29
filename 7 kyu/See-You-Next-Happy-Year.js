/* DESCRIPTION */
/* Scenario
You're saying good-bye your best friend , See you next happy year .

Happy Year is the year with only distinct digits , (e.g) 2018 */

/* SOLUTION */
function nextHappyYear(year) {
    let newYear = year + 1; // Начинаем с следующего года

    while (true) {
        const str = String(newYear); // Преобразуем год в строку
        const uniqueDigits = new Set(str); // Создаём множество уникальных цифр

        // Проверяем, содержится ли 4 уникальные цифры
        if (uniqueDigits.size === 4) {
            return newYear; // Если да, возвращаем год
        }

        newYear++; // Переходим к следующему году
    }
}

// Примеры использования
console.log(nextHappyYear(1001)); // Вывод: 1023
console.log(nextHappyYear(2020)); // Вывод: 2021
console.log(nextHappyYear(1999)); // Вывод: 2000
console.log(nextHappyYear(2019)); // Вывод: 2020