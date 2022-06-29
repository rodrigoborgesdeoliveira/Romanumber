import { romanNumeralToNumberMap } from "./utils/constants";

/**
 * Converts the `romanNumeral` to the equivalent number.
 */
export function romanNumeralToNumber(romanNumeral: string): number {
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