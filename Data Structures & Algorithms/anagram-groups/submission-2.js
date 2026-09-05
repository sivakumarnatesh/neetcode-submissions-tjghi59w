class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let val of strs){
            let key = val.split('').sort().join('').toLowerCase();
            if(!map.has(key)){
                map.set(key,[]);
            }
            map.get(key).push(val);
        }
        return Array.from(map.values());
    }
}
