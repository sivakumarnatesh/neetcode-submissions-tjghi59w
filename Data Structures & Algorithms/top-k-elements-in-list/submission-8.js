class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        for(let val of nums){
            obj[val] = (obj[val] || 0) + 1;
        }
        return Object.entries(obj).sort((a,b) => b[1] - a[1]).slice(0,k).map(([item]) => Number(item));
    }
}
