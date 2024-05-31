//1. Reverse a String With Built-In Functions
function reverseString(string) {
  if (string === "") return;
  var array = string.split("");
  console.log(array);
  const reversedString = array.reverse().join("");
  console.log("reversedString==>", reversedString);
  return reversedString;
}
reverseString("Sangeetha");
// 2. Reverse a String With a Decrementing For Loop
function revString(string) {
  if (string === "") return;
  var revString = "";
  for (var i = string.length; i >= 0; i--) {
    revString += string.charAt(i);
  }
  return revString;
}
console.log(revString("Easwaran"));

//3. Reverse a String With Recursion
function revStr(string){
return (string === "") ? '': revStr(string.substr(1)) +string.charAt(0)
}
console.log(revStr('Hello!'))