function replaceString(string) {
  var replacedString = "";
  for (var i = 0; i <= string.length - 1; i++) {
    console.log( string.indexOf(string[i]), string.lastIndexOf(string[i]) )
    if ( string.indexOf(string[i]) !== string.lastIndexOf(string[i]) ) {
        replacedString += ")"
    } else {
    replacedString += "("
    }
    // for (var j = 1; j <= string.length - 1; j++) {
    // //    console.log(string.charAt(i), string.charAt(j))
    //   string.charAt(i) == string.charAt(j)
    //     ? (replacedString += ")")
    //     : (replacedString += "(");
    // }
  }
  console.log("replacedString===>",replacedString)
  return replacedString;
}

console.log(replaceString("hello"));
