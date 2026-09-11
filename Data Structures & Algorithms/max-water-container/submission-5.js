class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;

        // for(let i = 0; i < heights.length; i++){
        //     for(let j = i+1; j < heights.length; j++){
        //         let temp = Math.min(heights[i],heights[j]) * (j-i);
        //         res = Math.max(res,temp);
        //     }
        // }

        let l = 0;
        let r = heights.length - 1;

        while(l < r){
            let temp = Math.min(heights[l],heights[r]) * (r-l);
            res = Math.max(res,temp);
            if(heights[l] <= heights[r]){
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}
