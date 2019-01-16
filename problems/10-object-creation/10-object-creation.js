/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let Person1 = {name: 'Billy Bob', age: 42};

function Person2(name, age) {
    this.name = name;
    this.age = age;
}

class Person3 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
