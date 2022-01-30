// Funcionamento básico de uma função construtora

const _new = function (fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    fn.apply(obj, params);
    return obj;
};
const Person = function (name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
};
Person.prototype.getAge = function () {
    return (new Date()).getFullYear() - this.year;
};

const person1 = _new(Person, "Lucas Paris", "Indianópolis", 2001);
const person2 = _new(Person, "Brenão Bravissimo", "Indianópolis", 2005);

console.log(JSON.stringify(person1, undefined, " "));
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(JSON.stringify(person2, undefined, " "));
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);