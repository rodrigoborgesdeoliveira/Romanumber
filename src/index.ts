import { numberToRomanNumeralMap, romanNumeralToNumberMap } from "./utils/constants";
import { InvalidNumber, InvalidRomanNumeral } from "./utils/errors";
import { isNumberValid, isRomanNumeralValid } from "./utils/validators";

/**
 * Converts the `romanNumeral` to the equivalent number.
 */
export function romanNumeralToNumber(romanNumeral: string): number {
    if (!isRomanNumeralValid(romanNumeral)) {
        throw new InvalidRomanNumeral();
    }

    let number = romanNumeralToNumberMap[romanNumeral];

    if (!number) {
        number = 0;
        for (let index = 0; index < romanNumeral.length; index++) {
            const currentNumeral = romanNumeral[index];
            const nextNumeral: string | undefined = romanNumeral[index + 1];

            const currentNumber = romanNumeralToNumberMap[currentNumeral];

            // Handle special cases, e.g. IV
            if (nextNumeral) {
                const nextNumber = romanNumeralToNumberMap[nextNumeral];

                // Generally, roman numerals are, from left to right, going from the
                // biggest value to the smallest. In cases where a smaller value appears,
                // before a bigger value, it is a special case
                if (nextNumber > currentNumber) {
                    number += nextNumber - currentNumber;
                    index++;
                    continue;
                }
            }

            number += currentNumber;
        }
    }

    return number;
}

/**
 * Converts the `number` to the equivalent `romanNumeral`.
 */
export function numberToRomanNumeral(number: number): string {
    if (!isNumberValid(number)) {
        throw new InvalidNumber();
    }

    let romanNumeral = '';

    const currentRomanNumeral = numberToRomanNumeralMap[number];

    if (currentRomanNumeral) {
        romanNumeral += currentRomanNumeral;
        return romanNumeral;
    }

    // Find where the `number` fits in the map
    const mappedNumbers = Object.keys(numberToRomanNumeralMap).map(n => parseInt(n));
    let baseNumber = 1;

    for (let index = 1; index < mappedNumbers.length; index++) {
        const mappedNumber = mappedNumbers[index];
        
        if (number < mappedNumber) {
            break;
        }

        baseNumber = mappedNumber;
    }

    romanNumeral = numberToRomanNumeral(baseNumber);

    const rest = number - baseNumber;

    return romanNumeral + numberToRomanNumeral(rest);
}