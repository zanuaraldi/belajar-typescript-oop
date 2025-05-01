"use strict";
describe('Properties', () => {
    class Customer {
        constructor(id, name) {
            this.name = "Guest";
            this.id = id;
            this.name = name;
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
});
