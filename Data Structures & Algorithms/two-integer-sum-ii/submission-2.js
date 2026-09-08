class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // for(let i = 0; i < numbers.length; i++){
        //     let diff = target - numbers[i];

        //     if(numbers.includes(diff)){
        //         return [i+1, numbers.indexOf(diff)+1];
        //     }
        // }
        // return [];
        let i=0;
        let j=numbers.length-1;
        while(i<j){
            if(numbers[i]+numbers[j]>target){
                j--
            } else if(numbers[i]+numbers[j]<target){
                i++
            } else if(numbers[i]+numbers[j]===target){
                return [i+1,j+1]
            }
        }
    }
}
