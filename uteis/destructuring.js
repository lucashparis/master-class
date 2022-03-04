// A sintaxe de atribuição via desestruturação (destructuring assignment) 
// é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

// ARRAY
// Cria variaveis através das posições do array
var [name, author, year] = "C;Dennis Ritchie;1972".split(";");
console.log(name, author, year);
// SAIDA: C Dennis Ritchie 1972

// caso queira atribuir apenas valores de determinada posição
var [name, , year] = "C;Dennis Ritchie;1972".split(";");
console.log(name, year);
// SAIDA: C 1972


// É possivel atribuir valores padrões para as variaveis, caso não haja uma atribuição na desestruturação
var langlage = "C".split(";");
var [name = '-', author = '-', year = '-'] = langlage;
console.log(name, author, year);
// SAIDA: C - -


// OBJETOS
// Atribuição COMUM de valores de um objeto em variaveis
var langlage = {
    name: "C",
    author: "Dennis Ritchie",
    year: "1972"
}
var name = langlage.name;
var author = langlage.author;
var year = langlage.year;
console.log(name, author, year);
// SAIDA: C Dennis Ritchie 1972


// Para extrair os valores de um objeto é necessário referenciar a chave de cada uma das propriedades
var langlage = {
    name: "C",
    author: "Dennis Ritchie",
    year: "1972"
}
var {name, author, year} = langlage;
console.log(name, author, year);
// SAIDA: C Dennis Ritchie 1972

// É possível definir nomes diferentes para as variáveis em relação as chaves das propriedades do objeto
var langlage = {
    name: "C",
    author: "Dennis Ritchie",
    year: "1972"
}
var {name: nameLanglage, author: nameAuthor, year: releaseYear} = langlage;
console.log(nameLanglage, nameAuthor, releaseYear);
// SAIDA: C Dennis Ritchie 1972

// É possível referenciar as propriedades de objetos que estão dentro de outros objetos
var langlage = {
    name: "C",
    author: "Dennis Ritchie",
    year: "1972",
    company:{
        name: "Bell Labs"
    }
}
var {name: nameLanglage, author: nameAuthor, year: releaseYear, company: {name: namecompany}} = langlage;
console.log(nameLanglage, nameAuthor, releaseYear, namecompany);
// SAIDA: C Dennis Ritchie 1972 Bell Labs
// OBS: Não aconselhado por conta de dificultar a legibilidade 
//      e aumentar o nível de complexibilidade para não habituados

// Pode ser aplicado destructuring nos parâmetros de uma função, tanto com arrays quanto com objetos
const sum = function ({a, b}) {
    return a + b;
}
console.log(sum({a: 2, b: 2}));
// SAIDA: 4

