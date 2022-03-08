let frameworks = ["Angulas.js", "Ember.js", "Vue.js"];
// forEach() 
// Executa a função passada por parâmetro para cada elemento.
frameworks.forEach((frameworks) => console.log(frameworks));

// filter() 
// Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro.
frameworks = [
    {
        name: "Angular.JS",
        contributors: 1548
    },
    {
        name: "Ember.JS",
        contributors: 746
    },
    {
        name: "Vue.JS",
        contributors: 240
    }
]
let result = frameworks.filter((frameworks) => {
    return frameworks.contributors < 1000;
})
console.log('result filter: ', result);

// find()
// Retorna o primeiro elemento que retornou true na função passada por parâmetro.
result = frameworks.find((frameworks) => {
    return frameworks.name === 'Angular.JS';
})
console.log('result find: ', result);

// some()
// Retorna true se um ou mais elementos retornarem true na função passado por parâmetro.
result = frameworks.some((frameworks) => {
    return frameworks.name.includes('JS');
})
console.log('result some: ', result);

// every()
// Retorna true se todos os elementos retornarem true na função passado por parâmetro.
result = frameworks.every((frameworks) => {
    return frameworks.name.includes('JS');
})
console.log('result every: ', result);

// map()
// Retorna um novo array com base no retorno das funções passada por parâmetro.
result = frameworks.map((frameworks) => {
    return frameworks.name;
})
console.log('result map: ', result);

// reduce()
// Retorna um valor com base no retorno da função passada por parâmetro.
result = frameworks.reduce((total, frameworks) => {
    return total + frameworks.contributors;
}, 0);
console.log('result reduce: ', result);