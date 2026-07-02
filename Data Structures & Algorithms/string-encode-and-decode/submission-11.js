class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return '';
        let res = '';
        for(let i = 0; i < strs.length; i++){
            res += strs[i]+"*123";
        }
        return res;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.length > 0 ? str.slice(0, str.length-4).split("*123") : [];
    }
}
