class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-zA-Z0-9]/g,'');
        if(str.toLowerCase() === str.split('').reverse().join('').toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
}
