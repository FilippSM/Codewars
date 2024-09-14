/* DESCRIPTION */
/* Pyramid building in Egypt
You are a Pharaoh in ancient Egypt, and you want to build the perfect pyramid for yourself. There's only a limited number of stones, however, and different kinds of stones vary in their value. You want to maximize the value of your pyramid while keeping it exactly three layers high.

In essence, you're given an array of integers, which represent the stones, and your task is to assemble the highest-value pyramid from them. The pyramid is made out of exactly three layers, containing:

Top layer: 1 integer
Middle layer: 2 identical integers
Bottom layer: 3 identical integers
Additionally, no integer can appear in two or more layers. That is, each layer is made from stones of the same value, and stones of the same value can be used at most in one layer.

Graphically, the structure of the pyramid looks like this, where 
x
≠
y
≠
z
x

=y

=z

    [z]
  [y] [y]
 [x][x][x]
Input
The input is an array that may contain positive and negative integers, as well as zeros. The integers are in no specific order and can be repeated. The array may also be empty.

Output
The output is a single integer – the sum of all integers that make up the pyramid. For example, given input [1,1,1,2,2,2,3,3,3], the highest-value pyramid is:

    [1]
  [2] [2]
 [3][3][3]
And the sum is thus: 
3
⋅
3
+
2
⋅
2
+
1
=
14
3⋅3+2⋅2+1=14.

If it's not possible to build a pyramid from the given array (e.g. [-1,-1,0,0,1,1] or an empty one []), return None, null, or other language-specific alternative.

Clarification
Remember that there's no rule for descending or ascending order, so there's no restriction on placing the highest integer from the array on top of the pyramid. */

/* SOLUTION */
function countOccurrences(arr) {
    const frequency = {};

    // Подсчет частоты каждого числа
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    // Преобразуем объект в массив пар [число, количество]
    const frequencyArray = Object.entries(frequency);

    // Сортируем по количеству в убывающем порядке
    frequencyArray.sort((a, b) => b[0] - a[0]);

    let count = 0;

    let countTwo = [null, null, null];

    //return frequencyArray;
    for (let i = 0; i < frequencyArray.length; i++) {

        if (frequencyArray[i][1] >= 3 && countTwo[0] === null) {
            count += frequencyArray[i][0] * 3;
            countTwo[0] = frequencyArray[i][0];
        } else if (frequencyArray[i][1] >= 2 && countTwo[1] === null) {
            count += frequencyArray[i][0] * 2;
            countTwo[1] = frequencyArray[i][0];
        } else if (frequencyArray[i][1] >= 1 && countTwo[2] === null) {
            count += frequencyArray[i][0] * 1;
            countTwo[2] = frequencyArray[i][0];
        }
    }

    if (countTwo.indexOf(null) === -1) {
        return countTwo[0] * 3 + countTwo[1] * 2 + countTwo[2] * 1;
    } else {
        return null;
    }

}

console.log(countOccurrences([1, 1, 1, 2, 2, 2, 3, 3, 3]));
console.log(countOccurrences([-1, -1, 0, 0, 1, 1]));
console.log(countOccurrences([1, 1, 1, 2, 2, 3]));
console.log(countOccurrences([5, 3, 5, 3, 0, 0, -1, 0, 0, 3, 3, 3]));
console.log(countOccurrences([1, 0, -1, -1, -2, -1, -2, -10]));
console.log(countOccurrences([-10, -10, -6, 6, -6, 4, -6, 4, 2, 0, 10, -10, -10]));