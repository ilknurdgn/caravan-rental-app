/**
 * Rounds number to given decimal
 * eg. roundNumber(2.34343, 1) => 2.3
 */
export declare const roundNumber: (num: number, decimal: number) => number;
/**
 * Checks if value is number, if not it returns default value
 * 1# eg. checkIsNumber(2, 30) => 2
 * 2# eg. checkIsNumber(null, 30) => 30
 */
export declare const checkIsNumber: (num: any, defaultValue: number) => number;
