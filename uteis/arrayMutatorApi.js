let langlages = ["Python", "C", "Java"];

// push() 
// Adiciona um elemento no final. 
console.log(langlages.push("Ruby")); 
console.log(langlages.push("GO"));
console.log("Result push: ", langlages);

// pop() 
// Remove um elemento no final.
console.log(langlages.pop()); 
console.log(langlages.pop());
console.log("Result pop: ", langlages);

// unshift() 
// Adiciona um elemento no inicio.
console.log(langlages.unshift("Ruby")); 
console.log(langlages.unshift("GO"));
console.log("Result unshift: ", langlages);

// shift() 
// Remove um elemento no inicio.
console.log(langlages.shift()); 
console.log(langlages.shift()); 
console.log("Result shift: ", langlages);

// splice() 
// Remove a posição do array passado 
// Primeiro parâmetro indice o qual deve iniciar a alterar a lista;
// Segundo parâmetro Um inteiro indicando o número de antigos elementos que devem ser removidos;
// Terceiro e próximos parâmetro os elementos a adicionar na lista. Se você não especificar nenhum elemento, 
// splice simplesmente removerá elementos da mesma.
console.log(langlages.splice(1, 1)); 
console.log("Result splice: ", langlages);
console.log(langlages.splice(1, 0, "C++", "C#"));
console.log("Result splice: ", langlages);
console.log(langlages.splice(1, 2, "C"));
console.log("Result splice: ", langlages);


langlages = [
    {
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995 
    }
];
// sort() 
// Ordena os elementos do próprio array e retorna o array.
// caso retorno seja "-1 ou 0" fica onde está!
// caso retorno seja "1" inverte!
console.log(langlages.sort(function(a, b) {
    return a.name.localeCompare(b.name);
}));

// reverse() inverte a ordenação de um array.
langlages = [ 'Python', 'C', 'Java' ];
console.log("Result reverse: ", langlages.reverse());

// fill() 
// Preenche todos os valores do array a partir do índice inicial a um índice final.
console.log("Result fill: ", langlages.fill("JavaScript"));
langlages = [ 'Python', 'C', 'Java' ];
console.log("Result fill: ", langlages.fill("JavaScript", 0, 2));