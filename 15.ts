function  mycode15(nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]) {
    let ans: number[][] = [];
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2;i++){
        let target = 0 + nums[i];
        let j = i + 1;
        let k = nums.length -1;
        while(j < k){
            if(nums[i] + nums[j] + nums[k] === 0){
                if(!ans.find(x => x[0] === nums[i] && x[1] === nums[j] && x[2] === nums[k])){
                    ans.push([nums[i], nums[j], nums[k]]);
                }
                j++;
                k--;
                continue;
            } else {
                if((target + nums[j]) * -1  < nums[k]){
                    k--;
                }else{
                    j++;
                }
            }
        }
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var bestcode15 = function(nums) {
    const results = []
	if (nums.length < 3) return results
	nums = nums.sort((a, b) => a - b)
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let j = i + 1

		let k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === target) {
				results.push([nums[i], nums[j], nums[k]])
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
				j++
				k--
			} else if (sum < target) {
				j++
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
}