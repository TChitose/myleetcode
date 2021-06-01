/**
 * @param {string} s
 * @return {number}
 */
var mycode58 = function(s) {
    s = s.trim();
    if(!s.length) return 0;
    let len = s.split(' ');
    return len[len.length -1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var onelinecode58 = function(s) {
    return s.trim().split(" ").pop().length;
};

/**
 * @param {string} s
 * @return {number}
 */
var koredemoikeru58 = function(s) {
    s = s.trim().split(' ');
    return s[s.length -1].length;
};