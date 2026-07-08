class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return 1;
       let sortedArr = nums.sort((a,b) => a - b);
       let dup = sortedArr.filter((item,index) => sortedArr.indexOf(item) === index);
        if(dup.length === 1) return 1;
        let current = 1;
        let longest = 1;

       for(let i = 1; i < dup.length; i++){
            if(dup[i] === (dup[i-1]+1)){
               current++;
            } else {
                longest = Math.max(longest,current);
                current = 1;
            }
       }

       return Math.max(current,longest);
    }
}
