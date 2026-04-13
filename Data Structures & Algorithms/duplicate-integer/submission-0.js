class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.some((item,index) => nums.indexOf(item) !== index);
    }
}
