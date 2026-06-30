class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const obj1 = {};
        const obj2 = {};

        if(s.length !== t.length){
            return false;
        } else {
            for(let i = 0; i < s.length; i++){
                obj1[s[i]] = (obj1[s[i]] || 0) + 1;
                obj2[t[i]] = (obj2[t[i]] || 0) + 1;
            }

            for(let val in obj1){
                if(obj1[val] !== obj2[val]){
                    return false;
                }
            }
        }
        return true;
    }
}
