// ## 要求 
    
// - 新建main.js文件，编写一个函数，实现以下功能：将一个字符串逆序输出。


function reverseString(message){
  // wirte your code here
  var messageTemp = "";
  for(var i = message.length;i>=0;i--){
    messageTemp+=message.charAt(i);
  }
  return messageTemp;
}
reverseString('hello'); // should return 'olleh'
