class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     const set = new Set();
     for(const val of nums){
        if(set.has(val)){
            return true;
        } else {
            set.add(val);
        }
     }
     return false;
    }
}
