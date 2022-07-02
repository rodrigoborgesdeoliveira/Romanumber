import { expect } from "chai";
import { numberToRomanNumeral } from "../src/index";
import { isNumberValid } from "../src/utils/validators";

describe('Convert from numbers to roman numerals', () => {
    it('should return I for the number 1', () => {
        expectNumberEqualToRomanNumeral(1, 'I');
    });

    it('should return III for the number 3', () => {
        expectNumberEqualToRomanNumeral(3, 'III');
    });

    it('should return IV for the number 4', () => {
        expectNumberEqualToRomanNumeral(4, 'IV');
    });

    it('should return VI for the number 6', () => {
        expectNumberEqualToRomanNumeral(6, 'VI');
    });

    it('should return IX for the number 9', () => {
        expectNumberEqualToRomanNumeral(9, 'IX');
    });

    it('should return XLI for the number 41', () => {
        expectNumberEqualToRomanNumeral(41, 'XLI');
    });

    it('should return CDVI for the number 406', () => {
        expectNumberEqualToRomanNumeral(406, 'CDVI');
    });

    it('should return MCMXCIV for the number 1994', () => {
        expectNumberEqualToRomanNumeral(1994, 'MCMXCIV');
    });

    it('should return MMMCDXCI for the number 3491', () => {
        expectNumberEqualToRomanNumeral(3491, 'MMMCDXCI');
    });
});

describe('Validate number input', () => {
    it('should return true if the number is 1', () => {
        expectNumberValidity(1, true);
    });

    it('should return true if the number is 3999', () => {
        expectNumberValidity(3999, true);
    });

    it('should return false if the number is 0', () => {
        expectNumberValidity(0, false);
    });

    it('should return false if the number is negative', () => {
        expectNumberValidity(-1, false);
        expectNumberValidity(-10, false);
    });

    it('should return false if the number is above 3999', () => {
        expectNumberValidity(4000, false);
        expectNumberValidity(5200, false);
    });

    it('should return false if the number is not an integer', () => {
        expectNumberValidity(1.5, false);
    });
});

/**
 * Expects that the `number` is converted to `expectedRomanNumeral`.
 */
function expectNumberEqualToRomanNumeral(number: number, expectedRomanNumeral: string): void {
    const romanNumeral = numberToRomanNumeral(number);
    expect(romanNumeral).to.equal(expectedRomanNumeral);
}

/**
 * Expects that the `number` validation returns `expectedToBeValid`.
 */
function expectNumberValidity(number: number, expectedToBeValid: boolean): void {
    const isValid = isNumberValid(number);
    expect(isValid).to.be.equal(expectedToBeValid);
}