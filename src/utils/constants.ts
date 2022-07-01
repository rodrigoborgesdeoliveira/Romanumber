export const romanNumeralToNumberMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export const numberToRomanNumeralMap: Record<number, string> = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};