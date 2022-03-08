// indexOf()
// Retorna a posição do primeiro elemento encontrado. 
let langlages = ["Python", "C", "Java"];
console.log('result indexOf: ', langlages.indexOf("Python"));

// lastIndexOf()
// Retorna a posição do último elemento encontrado.
langlages = ["Python", "C", "Java", "Python"];
console.log('result lastIndexOf: ', langlages.lastIndexOf("Python"));

// includes()
// Retorna true se o elemento existir.
// OBS: Forma simples e direta de sabe se existe ou não um elemento dentro do array.
langlages = ["Python", "C", "Java"];
console.log('result includes: ', langlages.includes("Python"));

// concat()
// Retorna um novo array resultante da concatenação de um ou mais array.
let ooLanglages = ["Smaltalk", "C++", "Simula"];
let funcionalLanglages = ["Haskell", "Scheme"];
console.log('result concat: ', resultLanglages = [].concat(ooLanglages, funcionalLanglages));

// slice()
// Retorna partes de um determinado array de acordo com a posição de início e fim.
// OBS: Caso seja pasado apenas um parâmetro, será retornado do indice passado como parâmetro, até o final do array.
langlages = ["Smaltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(langlages.slice(0, 2));
console.log(langlages.slice(2, 4));
console.log(langlages.slice(2));

// join()
// Converte o array para um String, juntando os elementos com base em um separador.
console.log(langlages.join(","));