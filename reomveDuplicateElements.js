function reomveDuplicate(nums) {
    for (let outer = 0; outer < nums.length; outer++) {
        if (nums[outer] === nums[outer+1]){
            nums.splice(outer, 1);
        }
    }
    return nums;
}
console.log(reomveDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));