"use strict";
describe('Properties', () => {
    class Customer {
        constructor(id, name) {
            this.name = "Guest";
            this.id = id;
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is  ${this.name}`);
        }
    }
    it('should can have properties', () => {
        const customer = new Customer(1, "Aldi");
        customer.age = 21;
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer);
    });
    it('should can have methods', () => {
        const customer = new Customer(1, "Aldi");
        customer.sayHello("Zanuar");
    });
});
