class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for(let val of nums){
            if(set.has(val)){
                return true;
            }
            set.add(val);
        }

        return false;
    }
}
