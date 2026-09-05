class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split('').sort().join('').toLowerCase() === t.split('').sort().join('').toLowerCase() ? true : false;
    }
}
