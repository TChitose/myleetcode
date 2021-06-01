/**
 * @param {number[]} digits
 * @return {number[]}
 */
var mycode = function(digits) {
    digits[digits.length -1]++;
        for(let i = 1; i <= digits.length ; i++){
                if(digits[digits.length - i] !== 10) return digits;
                digits[digits.length - i] = 0;
                if(!(digits[digits.length - i - 1] !== 0 && !digits[digits.length - i - 1])){
                    digits[digits.length - i - 1]++;
                }
            if(digits[digits.length - (i + 1)] !== 0 && !digits[digits.length - (i + 1)]){
                digits.unshift(1);
                return digits
            }
        }
    return digits;
};


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var anscode = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
      if(++digits[i] > 9) digits[i] = 0;
      else return digits;
    }
    digits.unshift(1);
    return digits;
  };