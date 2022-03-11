// WeakSet
// É um objeto, similar ao Set, que permite valores apenas do tipo Object 
// e mantem as referencias de forma fraca, sendo volátil e não iterável.
let ws1 = new WeakSet();
console.log(ws1);

// add
// Adiciona um elemento.
let obj1 = {};
let obj2 = {};
ws1.add(obj1);
ws1.add(obj2);

// has
// Retorna true se o elemento existir.
console.log("Return has: ");
console.log(ws1.has(obj1));

// delete
// Remove um elemento.
console.log("Return delete: ");
console.log(ws1.delete(obj1));

// Essa estrutura de dados serve:
// Para criar coleções de elementos onde não precisamos nos preocupar com possiveis vazamentos de memoria,
// pois pode ser adicionado um volume grande de elementos, no momento que esses elementos que são objetos se tornam
// não mais referenciados eles se tornam elegiveis para coleta (remoção da memoria de forma automatica).
console.log("--->>>  Implementação da estrutura de dados utilizando WeakSet");
let circles = new WeakSet();
function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
Circle.prototype.calculateArea = function() {
    if (!circles.has(this)) throw "Invalid Object"; // Deixa privado para objetos que não estão registrados na função e que foram criados manualmente. 
    return Math.PI * Math.pow(this.radius, 2);
}
let circle1 = new Circle(10);
let circle2 = {
    radius: 5
};

console.log("circle1: ", circle1.calculateArea());
console.log("circle2: ", circle1.calculateArea.call(circle2));
circle1 = null;
console.log("--->>> END");
