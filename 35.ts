function test(nums = [2,3,5,6,9], target = 7) {
    if(nums.length === 1) return nums[0] < target ? 1 : 0;
    let i = Math.ceil(nums.length / 2);
    if(nums[i] === target) return i
    if(nums[i] > target) {
        while(true){
            console.log(i, nums[i], target)
            if(!nums[i] && nums[1] !== 0) return 0;
            if(nums[i] === target) return i;
            if(nums[i] < target) return ++i;
            i--;
        }
    } else {
        while(true){
            console.log(i, nums[i], target)
            if(nums[i] === target || !nums[i] && nums[1] !== 0) return i;
            if(nums[i] > target) return i;
            i++;
        }
    }
};

function bestcode35(nums, target) {
    return binarySearch35(nums, target, 0, nums.length - 1);
};


function binarySearch35(array, target, start, end) {
    if (start > end) return start;
    const midPoint = Math.floor((start + end)/2);
    if (array[midPoint] === target) return midPoint;
    if (array[midPoint] > target) return binarySearch35(array, target, start, midPoint - 1);
    if (array[midPoint] < target) return binarySearch35(array, target, midPoint + 1, end);
}