import { expect } from "chai";
import { describe, it } from "mocha";
import { romanNumeralToNumber } from "../src/index";

describe('Convert from roman numerals to numbers', () => {
    it('should return 1 for the roman numeral I', () => {
        expectRomanNumeralEqualToNumber('I', 1);
    });

    it('should return 3 for the roman numeral III', () => {
        expectRomanNumeralEqualToNumber('III', 3);
    });

    it('should return 4 for the roman numeral IV', () => {
        expectRomanNumeralEqualToNumber('IV', 4);
    });

    it('should return 9 for the roman numeral IX', () => {
        expectRomanNumeralEqualToNumber('IX', 9);
    });

    it('should return 41 for the roman numeral XLI', () => {
        expectRomanNumeralEqualToNumber('XLI', 41);
    });

    it('should return 1994 for the roman numeral MCMXCIV', () => {
        expectRomanNumeralEqualToNumber('MCMXCIV', 1994);
    });

    it('should return 437 for the roman numeral CDXXXVII', () => {
        expectRomanNumeralEqualToNumber('CDXXXVII', 437);
    });

    it('should return 3491 for the roman numeral MMMCDXCI', () => {
        expectRomanNumeralEqualToNumber('MMMCDXCI', 3491);
    });
});

/**
 * Expects that the `romanNumeral` is converted to `expectedNumber`.
 */
function expectRomanNumeralEqualToNumber(romanNumeral: string, expectedNumber: number): void {
    const number = romanNumeralToNumber(romanNumeral);
    expect(number).to.equal(expectedNumber);
}