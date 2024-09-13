/* DESCRIPTION */
/* Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array. */

/* SOLUTION */
function minMax(arr) {
    if (arr.length === 0) {
        return null; // Возвращаем null, если массив пустой
    }

    let min = arr[0]; // Инициализация минимального значения
    let max = arr[0]; // Инициализация максимального значения

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Обновляем минимальное значение
        }
        if (arr[i] > max) {
            max = arr[i]; // Обновляем максимальное значение
        }
    }

    return [min, max]; // Возвращаем массив с минимальным и максимальным значением
}

console.log(minMax([1, 2, 3, 4, 5]));

