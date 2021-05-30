/**
 * @param {number} x
 * @return {number}
 */
var mycode7 = function(x) {
    let str = x.toString();
    let minus = '';
    if(str[0] === '-'){
        str = str.substring(1);
        minus = '-';
    }
    let ans = '';
    for(let i = str.length - 1; i >= 0; i--){
        ans += str[i];
    }
    const num = Number(minus + ans);
    if(num < -2147483648 || 2147483647 < num){
        return 0;
    }
    return num;
};

var mycode7 = function(x) {
    const puramai = x >= 0 ? 1 : -1;
    let str = Math.abs(x).toString();
    let ans = '';
    for(let i = str.length - 1; i >= 0; i--){
        ans += str[i];
    }
    const num = Number(ans) * puramai;
    if(num < -2147483648 || 2147483647 < num){
        return 0;
    }
    return num;
};


/**
 * @param {number} x
 * @return {number}
 */
const anscode7 = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

/**
 * Typescriptだとエラーが出る。
 * @param x
 */
var bestcode7 = function(x) {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2**31) return 0;
    return absReversed * Math.sign(x);
  };


  /**
 * @param {number} x
 * @return {number}
 */
var mybestcode7 = function(x) {
    const puramai = x >= 0 ? 1 : -1;
      let str = Math.abs(x).toString();
      let ans = '';
      for(let i = str.length - 1; i >= 0; i--){
          ans += str[i];
      }
      const num = Number(ans) * puramai;
      if(num < -2147483648 || 2147483647 < num){
          return 0;
      }
      return num;
  };