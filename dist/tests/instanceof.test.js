"use strict";
describe('Instance Of', () => {
    class Employee {
    }
    class Manager {
    }
    const zanuar = new Employee();
    const aldi = new Manager();
    it('should have problem using typeof', () => {
        console.info(typeof zanuar);
        console.info(typeof aldi);
    });
    it('should support instanceof', () => {
        expect(zanuar instanceof Employee).toBe(true);
        expect(zanuar instanceof Manager).toBe(false);
        expect(aldi instanceof Employee).toBe(false);
        expect(aldi instanceof Manager).toBe(true);
    });
});
