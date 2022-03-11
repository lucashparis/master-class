// Um Map 
// É um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado.

let timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600] ]);
console.log("timeUnits: ", timeUnits);
// console.log(Array.from(timeUnits)); // Converte novamente para array.

// size()
// Retorna a quantidade de elementos.
console.log("return size: ", timeUnits.size);

// set()
// Adiciona um par de chaves e valor.
timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log("return set: ", timeUnits);

// forEach()
// Intera sobre o mapa.
timeUnits.forEach(function(value, key) {
    console.log("return forEach: ", value, key);
})

// has()
// Retorna true se a chave existir.
console.log("return has: ",timeUnits.has("hour"));

// get()
// Retorna o valor de uma determinada chave.
console.log("return get: ", timeUnits.get("second"));
console.log("return get: ", timeUnits.get("minute"));
console.log("return get: ", timeUnits.get("hour"));
console.log("return get: ", timeUnits.get("day"));

// delete()
// Remove um par de chaves e valor.
console.log("return delete: ", timeUnits.delete("hour"));

// clear()
// Remove todos os elementos.
timeUnits.clear();
console.log("return clear: ", timeUnits);


// A diferença de um map para um objeto:
// As chaves de uma mapa podem ser de qualquer tipo, não apenas string e symbol.

// Em obj os valores são String ou Symbol:
// Caso seja uma outra coisa como no exemplo abaixo, esse outro valor será convertido para String

let obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";
console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);
console.log(obj); // return { '10': 'String', true: 'String' }

// Exemplo acima em map.
map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");
console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));


// Herdará alguns metodos através de sua cadeia de prototipos
// Necessitando ser passado null para sua cadeia de prototipos na criação -> 
// obj = Object.create(null);
obj = {};
console.log("toString" in obj);
console.log("valueOf" in obj);

// Caso criado o objeto através do map não havera nenhum tipo de herança
map = new Map();
console.log(map.get("toString"));
console.log(map.get("valueOf"));