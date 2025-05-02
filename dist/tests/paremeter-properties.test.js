"use strict";
describe('Parameter Properties', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support parameter properties', () => {
        const person = new Person("Aldi");
        console.info(person.name);
        person.name = "Zanuar";
        console.info(person.name);
    });
});
