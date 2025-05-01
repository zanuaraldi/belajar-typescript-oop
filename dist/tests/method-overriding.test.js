"use strict";
describe('Method Overriding', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            // console.info(`Hello ${name}, my name is ${this.name}, i am your manager`);
            super.sayHello(name);
            console.info(`And, I am your manager`);
        }
    }
    it('should support method overriding', () => {
        const employee = new Employee("Zanuar");
        employee.sayHello("Aldi");
        const manager = new Manager("Aldi");
        manager.sayHello("Zanuar");
    });
});
