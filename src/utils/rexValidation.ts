export const excludeRexEngNum = /[^\w:/=+-@. ]/;
export const excludeRexEngNumZh = /[^\w_:/=+-@. \u4E00-\u9FFF]/;
export const rexEngNum = /^[\w:/=+-@.]+([ ]*[\w:/=+-@.])+$/;
export const rexEngNumZh = /^[\w_:/=+-@.\u4E00-\u9FFF]+([ ]*[\w_:/=+-@.\u4E00-\u9FFF])*$/;
export const noAllowedCharacter = /[\uFF01-\uFF5E\u002c\u003b\u003c\u003e\u003f]/;
// export const noAllowedCharacter = [';', ',', '<', '>', '?', '！', '？'];

export const handlerValidation = (test: string, rexRule: RegExp, notAllowArray: RegExp) => {
  if (test.length > 0 && !notAllowArray.test(test)) {
    if ((rexRule.test(test))) {
      return true;
    }
    return false;
  }
  return false;
};

export const checkKeydownValidation = (notAllow: RegExp, excludeRex: RegExp, e: any) => {
  if (notAllow.test(e.key)) {
    e.preventDefault();
  }
  if (excludeRex.test(e.key)) {
    e.preventDefault();
  }
};
export const checkPasteValidation = (excludeRex: RegExp, e: any) => {
  const pasteContent = e.clipboardData.getData('text');
  if (!excludeRex.test(pasteContent)) e.preventDefault();
};
