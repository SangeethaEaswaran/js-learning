// Question 1: Can you write a function in JavaScript to reverse the order of words in a given string?
function reversedString(str, separator){
return str.split(separator).reverse().join(separator)
}
console.log("Reverse the order of words in a sentence =>", reversedString("Welcome to javascript!!!", " "))
console.log("Reverse words in a sentence =>", reversedString("Welcome to javascript!!!!", ""))

//How to check if an object is an array or not 
var arr =1
console.log(Array.isArray(arr))
if(Object.prototype.toString.call(arr) === '[object Array]'){
    console.log('Array')
} else {
    console.log('not an array')
}
//How to empty an array 
var arrayList = ['a','b', 'c', 'd' , 'e']
console.log(arrayList.length)
// arrayList.length =0 
// arrayList.splice(0, arrayList.length)
// while(arrayList.length){
//     arrayList.pop()
// }
console.log(arrayList.length)


//duplicate([1,2, 3,4])
function duplicate(arr) {
    let dup = arr.concat(arr)
    return dup
}
console.log(duplicate([1, 2,3 ,4]))

//How to check if a number is integer or not 
console.log(Number.isInteger(4))
function isInt(num){
return num%1 === 0;
}
console.log(isInt(4.5))
console.log(isInt(5))

//create a for loop that iterates upto 100 while outputting "fizz" at multiple of 3 , "buzz" at multiples of 5 and "fizzbuzz" at  multiples of 3 and 5
for(let i=1; i<=100; i++){
    let f=i%3 ==0, b = i%5 == 0;
    console.log(f?(b?'Fizzbuzz':'Fizz'): b? 'Buzz': i)
}