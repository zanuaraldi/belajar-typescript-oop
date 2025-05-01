"use strict";
describe('Inheritance', () => {
    // parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should support ', () => {
        const employee = new Employee("Aldi");
        console.info(employee.name);
        const manager = new Manager("Zanuar");
        console.info(manager.name);
        const director = new Director("Syahputra");
        console.info(director.name);
    });
});
