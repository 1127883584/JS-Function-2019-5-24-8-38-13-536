// ## 要求 
    
// - 新建main.js文件，编写一个函数，实现以下功能：判断一个字符串是否是回文串。（回文，一个字符串从前面读和从后面读都一样，例如：abcba就是回文串。）

// ```
function palindrome(message){
  // wirte your code here
  var messageTemp = "";
  for(var i = message.length;i>=0;i--){
    messageTemp+=message.charAt(i);
  }
  if(message==messageTemp){
    return true;
  }else{
    return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
// ```
