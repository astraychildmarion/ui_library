export declare const excludeRexEngNum: RegExp;
export declare const excludeRexEngNumZh: RegExp;
export declare const rexEngNum: RegExp;
export declare const rexEngNumZh: RegExp;
export declare const noAllowedCharacter: RegExp;
export declare const handlerValidation: (test: string, rexRule: RegExp, notAllowArray: RegExp) => boolean;
export declare const checkKeydownValidation: (notAllow: RegExp, excludeRex: RegExp, e: any) => void;
export declare const checkPasteValidation: (excludeRex: RegExp, e: any) => void;
