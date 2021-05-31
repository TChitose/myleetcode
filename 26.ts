var mycode26 = function(nums) {
    let current = null
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === current){
            nums.splice(i, 1);
            i--;
        } else {
            current = nums[i];
        }
    }
};

var anscode26 = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};


var bestcode26 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        //Next number is identical to current one
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
};