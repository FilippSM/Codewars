/* DESCRIPTION */
/* In this kata, you are given the sum of the number of vertices, edges, and faces of an
N-sided pyramid, which is equal to s. You need to return the number of vertices,edges,
faces, and the number of sides of the base of the pyramid. */

/* SOLUTION */
function pyramid(parametr) {

    let n = (2 - parametr) / -4;

    let vertices = n + 1; //вершины
    let Eedged = 2 * n; //Ребра
    let faces = n + 1; //Грани 
    let sides = n; //Стороны


    return [vertices, Eedged, faces, sides];
}

console.log(pyramid(42)); //[42, [11, 20, 11, 10]]
console.log(pyramid(130)); //[33, 64, 33, 32]
