import { expect } from "chai";
import { describe, it } from "mocha";
import { romanNumeralToNumber } from "../src/index";
import { InvalidRomanNumeral } from "../src/utils/errors";
import { isRomanNumeralValid } from "../src/utils/validators";

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

    it('should throw an error if the roman numeral is invalid', () => {
        expect(() => romanNumeralToNumber('IL')).to.throw(InvalidRomanNumeral);
    });
});

describe('Validate roman numeral input', () => {
    it('should return true if the numeral is I', () => {
        expectRomanNumeralValidity('I', true);
    });

    it('should return true if the numeral is MMMCMXCIX', () => {
        expectRomanNumeralValidity('MMMCMXCIX', true);
    });

    it('should return true if the numeral is MMM', () => {
        expectRomanNumeralValidity('MMM', true);
    });

    it('should return true if the numeral is XCVII', () => {
        expectRomanNumeralValidity('XCVII', true);
    });

    it('should return true if the numeral is CXXXIX', () => {
        expectRomanNumeralValidity('CXXXIX', true);
    });

    it('should return true if the numeral is DXII', () => {
        expectRomanNumeralValidity('DXII', true);
    });

    it('should return false if the numeral has four or more consecutive identical numerals', () => {
        expectRomanNumeralValidity('IIII', false);
        expectRomanNumeralValidity('VIIIIII', false);
        expectRomanNumeralValidity('DLVVVV', false);
        expectRomanNumeralValidity('VVVVV', false);
        expectRomanNumeralValidity('XXXX', false);
        expectRomanNumeralValidity('XXXXXXXX', false);
        expectRomanNumeralValidity('LLLL', false);
        expectRomanNumeralValidity('LLLLLLLLLL', false);
        expectRomanNumeralValidity('CCCC', false);
        expectRomanNumeralValidity('CCCCCCCCCCCCCCCCC', false);
        expectRomanNumeralValidity('DDDD', false);
        expectRomanNumeralValidity('DDDDDDDDDDD', false);
        expectRomanNumeralValidity('MMMM', false);
        expectRomanNumeralValidity('MMMMMMMMMMMMM', false);
    });

    it('should return false if V, L or D are repeated', () => {
        expectRomanNumeralValidity('VV', false);
        expectRomanNumeralValidity('XVVV', false);
        expectRomanNumeralValidity('XLL', false);
        expectRomanNumeralValidity('LLL', false);
        expectRomanNumeralValidity('DD', false);
        expectRomanNumeralValidity('DDD', false);
        expectRomanNumeralValidity('DDM', false);
    });

    it('should return false if more than one smaller value consecutively precedes a bigger value', () => {
        expectRomanNumeralValidity('IIV', false);
        expectRomanNumeralValidity('IVX', false);
        expectRomanNumeralValidity('IIIX', false);
        expectRomanNumeralValidity('VIX', false);
        expectRomanNumeralValidity('VIXX', false);
        expectRomanNumeralValidity('VIXL', false);
        expectRomanNumeralValidity('IXL', false);
        expectRomanNumeralValidity('IXVC', false);
        expectRomanNumeralValidity('XVC', false);
        expectRomanNumeralValidity('VVCD', false);
        expectRomanNumeralValidity('XCD', false);
        expectRomanNumeralValidity('CCM', false);
        expectRomanNumeralValidity('CXM', false);
        expectRomanNumeralValidity('IXM', false);
    });

    it("should return false if a value can't precede the next one", () => {
        expectRomanNumeralValidity('IL', false);
        expectRomanNumeralValidity('IC', false);
        expectRomanNumeralValidity('ID', false);
        expectRomanNumeralValidity('IM', false);
        expectRomanNumeralValidity('IXX', false);
        expectRomanNumeralValidity('IXXX', false);
        expectRomanNumeralValidity('IXI', false);
        expectRomanNumeralValidity('IXII', false);
        expectRomanNumeralValidity('IXIII', false);
        expectRomanNumeralValidity('VX', false);
        expectRomanNumeralValidity('VL', false);
        expectRomanNumeralValidity('VC', false);
        expectRomanNumeralValidity('VD', false);
        expectRomanNumeralValidity('VM', false);
        expectRomanNumeralValidity('XD', false);
        expectRomanNumeralValidity('XM', false);
        expectRomanNumeralValidity('XCC', false);
        expectRomanNumeralValidity('XCCC', false);
        expectRomanNumeralValidity('XCX', false);
        expectRomanNumeralValidity('XCXX', false);
        expectRomanNumeralValidity('XCXXX', false);
        expectRomanNumeralValidity('LC', false);
        expectRomanNumeralValidity('LD', false);
        expectRomanNumeralValidity('LM', false);
        expectRomanNumeralValidity('DM', false);
        expectRomanNumeralValidity('CMM', false);
        expectRomanNumeralValidity('CMMM', false);
        expectRomanNumeralValidity('CMC', false);
        expectRomanNumeralValidity('CMCC', false);
        expectRomanNumeralValidity('CMCCC', false);
    });
});

/**
 * Expects that the `romanNumeral` is converted to `expectedNumber`.
 */
function expectRomanNumeralEqualToNumber(romanNumeral: string, expectedNumber: number): void {
    const number = romanNumeralToNumber(romanNumeral);
    expect(number).to.equal(expectedNumber);
}

/**
 * Expects that the `romanNumeral` validation returns `expectedToBeValid`.
 */
function expectRomanNumeralValidity(romanNumeral: string, expectedToBeValid: boolean): void {
    const isValid = isRomanNumeralValid(romanNumeral);
    expect(isValid).to.be.equal(expectedToBeValid);
}