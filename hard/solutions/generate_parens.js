/*
*
* For solution in other languages:
https://leetcode.com/problems/generate-parentheses/solution/
https://leetcode.com/problems/generate-parentheses/discuss/?currentPage=1&orderBy=hot&query=
*
*/

var generateParenthesis = function(n) {
  var arr = [];
  compose(n, n, '');
  return arr;

  function compose(left, right, str) {
    if (!left && !right && str.length) return arr.push(str);
    if (left) compose(left - 1, right, str + '(');
    if (right > left) compose(left, right - 1, str + ')');
  }
};
