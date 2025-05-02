"use strict";
describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(massage) {
            super(massage);
            this.massage = massage;
        }
    }
    function doubleIt(value) {
        if (value < 0) {
            throw new ValidationError("Value cannot be less than 0");
        }
        return value * 2;
    }
    it('should supoort error handling', () => {
        try {
            const result = doubleIt(-1);
            console.info(result);
        }
        catch (e) {
            if (e instanceof ValidationError) {
                console.info(e.massage);
            }
        }
    });
});
