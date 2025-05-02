"use strict";
describe('Polymorphism', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    function sayHello(employee) {
        console.info(`Helllo ${employee.name}`);
    }
    it('should support polymorphism', () => {
        let employee = new Employee("Zanuar");
        console.info(employee);
        employee = new Manager("Aldi");
        console.info(employee);
        employee = new VicePresident("Putra");
        console.info(employee);
    });
    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Zanuar"));
        sayHello(new Manager("Aldi"));
        sayHello(new VicePresident("Putra"));
    });
});
