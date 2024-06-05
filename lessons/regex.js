let text = "hello world hELlo \n HELLO world \t hellO!!!"
let pattern = /hello/gim
let result = text.match(pattern)
console.log(result)
let pattern1 = /[^abc]/gim
let result1 = text.match(pattern1)
console.log(result1)


let text1 = "red green , re , red, green , gr , ed, blue , yellow , green , red "
let pattern2 = /(red|green)/g
console.log(text1.match(pattern2))