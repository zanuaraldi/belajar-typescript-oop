describe('Method Overriding', () => {
    class Employee{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}, i am your manager`);
        }
    }

    it('should support method overriding', () => {
        const employee = new Employee("Zanuar");
        employee.sayHello("Aldi");

        const manager = new Manager("Aldi");
        manager.sayHello("Zanuar");
    });
});