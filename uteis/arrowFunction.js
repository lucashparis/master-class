// const sum = function(a, b) {
//     return a + b;
// };
// const subtract = function(a, b) {
//     return a - b;
// };
// const calculator = function(fn) {
//     return function(a, b) {
//         return fn(a, b)
//     };
// };

// console.log(calculator(sum)(2, 2));

console.log('ARROW FUNCTION --->');

const sum = (a, b) => a + b;
const subtract = (a, b) =>   a - b;
const calculator = fn => (a, b) => fn(a, b);

console.log(calculator(sum)(2, 2));
