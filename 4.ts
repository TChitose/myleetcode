function  mycode4(nums1 = [], nums2 = [1]) {
    const nums = [...nums1, ...nums2].sort();
    const center = (Math.ceil(nums.length / 2)) - 1;
    console.log(center, nums);
    if(nums.length % 2){
        return (nums[center]).toFixed(4);
    } else {
        return ((nums[center] + nums[center + 1]) / 2).toFixed(4);
    }
};