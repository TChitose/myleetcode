/**
 * @param {number[]} nums
 * @return {number}
 */
var mycode53 = function(nums) {
    let count = -999999;
    let top = -999999;
    for(let i = 0; i < nums.length; i++){
        if(count + nums[i] < nums[i] && top < nums[i]){
            count = nums[i];
            top = nums[i];
        } else if (count + nums[i] < nums[i]) {
            count = nums[i];
        } else if (count + nums[i] > top) {
            count += nums[i];
            top = count;
        } else {
            count += nums[i];
            continue;
        }
    }
    return top;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var simpleCode53 = function(nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)
  };


  /**
 * @param {number[]} nums
 * @return {number}
 */
var bestcode53 = function(nums) {
    const hash = { 0: nums[0]}
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i += 1) {
      hash[i] = Math.max(hash[i - 1] + nums[i], nums[i]);
      max = Math.max(hash[i], max);
    }
    
    return max;
  };