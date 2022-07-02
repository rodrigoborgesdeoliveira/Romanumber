export class InvalidNumber extends Error {
    constructor() {
        super('The number must be an integer between 1 and 3999.');
    }
}

export class InvalidRomanNumeral extends Error {
    constructor() {
        super('The roman numeral must have a valid format and be between I and MMMCMXCIX');
    }
}