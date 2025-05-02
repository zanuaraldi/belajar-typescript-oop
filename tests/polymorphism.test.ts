describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee) {
        console.info(`Helllo ${employee.name}`);
    }

    it('should support polymorphism', () => {
        let employee: Employee = new Employee("Zanuar");
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