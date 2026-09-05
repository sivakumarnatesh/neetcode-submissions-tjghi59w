class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let obj = {};

       for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
       }

       let arr = Object.entries(obj).map(([item,index]) => [index,parseInt(item)]);
       arr.sort((a,b) => b[0] - a[0]);

       return arr.slice(0,k).map((item) => item[1]);
    
    }
}
