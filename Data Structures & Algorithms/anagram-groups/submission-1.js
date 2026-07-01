class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
               let obj = {};
               for(let str of strs){
                let val = str.split('').sort().join('');
                    if(!obj[val]){
                        obj[val] = [];
                    }
                    obj[val].push(str);
               }
               return Object.values(obj);
    }
}
