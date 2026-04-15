class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let obj = {};
      for(let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split('').sort().join('');
        obj[sortedStr] = obj[sortedStr] || [];
        obj[sortedStr].push(strs[i]);
      }
      return Object.values(obj);
    }
}
