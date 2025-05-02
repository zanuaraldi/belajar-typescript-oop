describe('Parameter Properties', () => {

    class Person {
        constructor(public name: string) {
        }
    }

    it('should support parameter properties', () => {
        const person = new Person("Aldi");
        console.info(person.name);

        person.name = "Zanuar";
        console.info(person.name);
    });
});