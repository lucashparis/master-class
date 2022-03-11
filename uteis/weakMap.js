// WeakMap 
// É um objeto similar ao map que permite chaves do tipo Object 
// e mantém as referências de forma fraca, sendo volátil e não iterável.
let wm1 = new WeakMap();
let obj1 = {};
let obj2 = {};
console.log(wm1);

// set
// Adiciona um par de chaves e valor.
wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");
// has
// Retorna true se a chave existir.
console.log("Return has: ", wm1.has(obj1));

// get
// Retorna o valor de uma determinada chave.
console.log("Return get: ", wm1.get(obj1));

// delete
// Remove um par de chave e valor.
console.log("Return delete: ", wm1.delete(obj1));


// Apartir do momento que os objetos não são mais referenciados, os mesmos são elimidados do WeakMap.
const areas = new WeakMap();
const rectangle1 = {
    x: 10,
    y: 2
}
const rectangle2 = {
    x: 5,
    y: 3
}

function calculateArea(rectangle) {
    if (areas.has(rectangle)) {
        console.log("Using cache...");
    }
    const area =  rectangle.x * rectangle.y;
    areas.set(rectangle, area);
    return area;
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle2));
rectangle1 = null;
rectangle2 = null;