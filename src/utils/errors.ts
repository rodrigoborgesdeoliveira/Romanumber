export class InvalidNumber extends Error {
    constructor() {
        super('The number must be an integer between 1 and 3999.');
    }
}