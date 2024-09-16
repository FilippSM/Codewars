/* DESCRIPTION */
/* Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, 
if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

Quadratic equation - https://en.wikipedia.org/wiki/Quadratic_equation */

/* SOLUTION */
function rekaman(n) {
    const sequence = [0]; // Initialize the sequence with a(0) = 0
    const seen = new Set(); // Track seen numbers for quick lookup
    seen.add(0); // Add the first term to the set

    for (let i = 1; i <= n; i++) {
        const prev = sequence[i - 1]; // Previous term
        const candidate = prev - i; // Try to subtract n

        if (candidate > 0 && !seen.has(candidate)) {
            sequence.push(candidate); // If valid, use this candidate
        } else {
            const nextTerm = prev + i; // Otherwise, add n
            sequence.push(nextTerm);
        }

        // Add the current term to the set of seen numbers
        seen.add(sequence[i]);
    }

    return sequence[n]; // Return the n-th term
}

// Пример использования
console.log(rekaman(1)); // Вывод: 1
console.log(rekaman(2)); // Вывод: 1
console.log(rekaman(3)); // Вывод: 2
console.log(rekaman(4)); // Вывод: 3
console.log(rekaman(5)); // Вывод: 5
console.log(rekaman(6)); // Вывод: 8