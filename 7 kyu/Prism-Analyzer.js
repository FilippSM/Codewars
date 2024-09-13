/* DESCRIPTION */
/* n this kata, you are given the sum of the number of vertices, edges, and faces of an
N-sided prism, which is equal to s. Your task is to determine and return a tuple containing four values: the number of vertices, edges,
faces, and the number of sides of the base of the prism.
A prism is a polyhedron with two parallel, congruent bases and rectangular lateral faces connecting the corresponding sides of the bases.
triangular prism example:
For an N-sided prism:
Vertices (V): The total number of vertices.
Edges (E): The total number of edges.
Faces (F): The total number of faces.
Base sides (B): The number of sides of the base of the prism.
Given the sum s = V + E + F return the tuple (V ,E ,F ,B). */

/* SOLUTION */
function prismProperties(parametr) {

    let n = (parametr - 2) / 6;

    let V = 2 * n; //Вершины (V): общее количество вершин.
    let E = 3 * n; //Ребра (E): общее количество ребер.
    let F = n + 2; //Грани (F): общее количество граней.
    let B = n; //Стороны основания (B): количество сторон основания призмы.


    return [V, E, F, B];
}

console.log(prismProperties(26)); //[8, 12, 6, 4]
console.log(prismProperties(74)); //[24, 36, 14, 12]
