class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let start = 0;
        let end = heights.length - 1;
        for(let i = 0; i < heights.length; i++){
            let val = (end - start) * Math.min(heights[start],heights[end]);
            res = Math.max(res, val);
            if(heights[start] <= heights[end]){
                start++;
            } else {
                end--;
            }
        }
        return res;
    }
}
