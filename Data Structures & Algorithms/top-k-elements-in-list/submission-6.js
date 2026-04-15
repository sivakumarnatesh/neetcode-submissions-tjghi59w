class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        for(let i = 0; i < nums.length; i++){
            obj[nums[i]] = (obj[nums[i]]  || 0) + 1;
        }
 
        let sortedVal = Object.entries(obj).map(([key,val]) => ([val,parseInt(key)]));
        sortedVal.sort((a,b) => b[0] - a[0])        
       
        return sortedVal.slice(0,k).map((item) => item[1]);
    }
}
