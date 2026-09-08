class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = s.replace(/[^A-Za-z0-9]/g,"");

        return res.split('').reverse().join('').toLowerCase() === res.toLowerCase();
    }
}
