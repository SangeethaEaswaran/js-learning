// 2. Write a JavaScript program to find the maximum number in an array. 
function maxArray(array){
    return Math.max(...array)
}
console.log(maxArray([1,200, 20000]))

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function isPalindrome(str){
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome("hello"))
console.log(isPalindrome("abba"))

//  5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
function filterEvenNumbers(arr){
return arr.filter(n => n%2 === 0)
}
console.log(filterEvenNumbers([1,3,5,32,52,77,12,0]))

//9. Write a function that finds the second largest number in an array. 
function secondLargest(){
var arr = [12,54,36,7,0, 1,3];
arr.sort((a,b)=> b-a)
return arr[1]
}
console.log(secondLargest())

// 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 
function mergeSortedArray(arr1,arr2){
    return [...arr1,...arr2].sort((a,b)=> b-a)
}
console.log(mergeSortedArray([11,3,64,2,99],[5,12,34,111]))