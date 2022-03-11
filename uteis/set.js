// set 
// É um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado.
const charsets = new Set(["ASCII", "ISO-8859-1"]);
console.log(charsets);
// console.log(Array.from(charsets)); Converte para array.

// size
// Retorna quantidade de elementros
console.log("Return size: ", charsets.size);

// add
// Adiciona um elemento.
charsets.add("UTF-8");
console.log("Return add: ", charsets);

// forEach
// Intera sobre o set.
charsets.forEach(function(charset) {
   console.log("Return forEach: ", charset); 
});

// has
// Retorna true caso o elemento exista.
console.log("Return has: ", charsets.has("UTF-8"));

// delete
// Retorna true caso o elemento exista.
console.log("Return delete: ", charsets.delete("UTF-8"));

// clear
// Retorna true caso o elemento exista.
console.log("Return clear: ", charsets.clear());
console.log(charsets);

// A Diferença do set para um array, basicamente é não permite elementos duplicados.
let array = [];
array.push(10);
array.push(10);
array.push(10);
console.log(array);
console.log(array.length);

// set não permite valores duplicados.
set = new Set();
set.add(10);
set.add(10);
set.add(10);
console.log(set);
console.log(set.size);

// Como eliminar valores duplicados de um array utilizando Set.
console.log("--->> Como eliminar valores duplicados de um array utilizando Set");
set = new Set(array);
console.log("Value set: ", set);
console.log("Size: ", set.size);
console.log(Array.from(set));
console.log("--->> End");

// Como eliminar valores duplicados  de um array.
console.log("--->> Como eliminar valores duplicados de um array");
array = [10, 10, 10];
let obj = {};
array.forEach(function(elements) {
    obj[elements] = undefined;
});
array = Object.keys(obj);
console.log(array);
console.log("--->> End");

// Ou também.
console.log("--->> Ou também");
array = [10, 10, 10];
set = [];
array.forEach(function(element) {
    if (!set.includes(element)) {
        set.push(element);
    }
});
console.log(set);
console.log("--->> End");
