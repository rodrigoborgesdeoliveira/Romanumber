export function isNumberValid(number: number): boolean {
    if (typeof number !== 'number') {
        return false;
    }

    // Numbers must be between 1 and 3999
    if (number < 1 || number > 3999) {
        return false;
    }

    // Numbers must be integers
    if (!isInteger(number)) {
        return false;
    }

    return true;
}

export function isInteger(number: number): boolean {
    const int = parseInt(number.toString());

    return number % int === 0;
}