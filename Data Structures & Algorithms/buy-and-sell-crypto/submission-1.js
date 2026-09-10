class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        let r = 1; 
        while(r < prices.length){
            if(prices[l] < prices[r]){
                let val = prices[r] - prices[l];
                max = Math.max(max,val);
            } else {
                l = r;
            }
            r++;
        }
        return max;
    }
}
