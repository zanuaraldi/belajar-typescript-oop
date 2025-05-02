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
        // console.info(`Helllo ${employee.name}`);
        if(employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    function sayHelloWrong(employee: Employee) {
        // console.info(`Helllo ${employee.name}`);
        if(employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
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

    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee("Zanuar"));
        sayHelloWrong(new Manager("Aldi"));
        sayHelloWrong(new VicePresident("Putra"));
    });
});