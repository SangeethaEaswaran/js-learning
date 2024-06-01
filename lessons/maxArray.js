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

//// Javascript Code for Sort a binary
// array using one traversal

function sortBinaryArray(a, n){
let j =-1 
for(let i=0;i< n; i++ ){
                // if number is smaller than 1
            // then swap it with j-th number
        if (a[i] < 1) {
            j++;
            let temp = a[j];
            a[j] = a[i]
            a[i] = temp;
        }
    }
}
let a = [ 1, 0, 0, 1, 0, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0 ];

let n = a.length
sortBinaryArray(a,n)

// for (let i = 0; i < n; i++)
    console.log(a)

//Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
function sortArray(a){
let arrLen = a.length
return a.sort((b,c)=>b-c)
}
console.log("sortArray=>",sortArray([1,2,2,0,1,1]))

/**
 * Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array. It is given that all array elements are distinct.
Note:-  l and r denotes the starting and ending index of the array.
Example 1:
Input:
n = 6
arr[] = 7 10 4 3 20 15
k = 3
l=0 r=5
Output : 
7
Explanation :
3rd smallest element in the given 
array is 7.
 */
function kthSmallestElement(arr, k){
arr.sort((a,b)=> (a-b))
console.log('arr=>', arr)
return arr[k-1]
}
console.log('kthSmallestElement=>',kthSmallestElement([344,89,123,45,9,32,65], 3))