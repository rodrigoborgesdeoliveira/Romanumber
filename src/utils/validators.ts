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

export function isRomanNumeralValid(romanNumeral: string): boolean {
    // Valid numerals: I, V, X, L, C, D, M
    // Only I, X, C and M can be repeated, but only for a maximum of 3 consecutive times
    // I can only precede V or X
    // X can only precede L or C
    // C can only precede D or M
    // They can only have one precedence, e.g IX, but not IIX.
    // They can only precede if the next value is not repeated, e.g. IX, but not IXX.
    // If they precede a value, they can't appear after it, e.g. IX or XI, but not IXI.
    // V, L and D can't precede any numerals.
    const validFormatRegex = new RegExp('^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$');
    
    if (!validFormatRegex.test(romanNumeral)) {
        return false;
    }

    return true;
}