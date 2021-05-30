/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function mycode5(s = 'bccc') {
    let ans = s[0];
    if(s.length < 2) return s;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i + 1]) {
            if(ans.length < 2) {
                ans = s[i] + s[i + 1];
            }
            for(let j = 1; j <= ((s.length - i - 1) < i ? s.length - i - 1 : i);j++){
                if(s[i - j] !== s[i + j + 1]){
                    break;
                }
                if(ans.length < (i + j + 2) - (i - j)) {
                    ans = s.substring(i - j, i + j + 2);
                    continue;
                }
            }
        }
            for(let j = 1; j <= ((s.length - i - 1) < i ? s.length - i - 1 : i);j++){
                if(s[i - j] !== s[i + j]){
                    break;
                }
                if(ans.length < (i + j + 1) - (i - j)) {
                    ans = s.substring(i - j, i + j + 1);
                    continue;
                }
            }
    }
    return ans;
};