//Function to find the minimum number of platforms required at the
//railway station such that no train waits.
// need to fix this as right answer is only 3 
function findPlatform(arr, dep, n) {
let maxCount = 0, i =0 , j=0, count = 0;
arr.sort((a,b)=>(a-b))
dep.sort((a,b)=>(a-b))
console.log(arr, dep)
while (i< n && j<n){
    if(arr[i]<= dep[i]){
        count+=1;
        i+=1;
    }else if(arr[i]>dep[j]){
        count-=1;
        j+=1;
    }
    maxCount = Math.max(maxCount, count)
}
console.log('maxCount===>', maxCount)
  return maxCount;
}
let n = 6 
let arr = [900, 940, 950, 1100, 1500, 1800] ;
let dep = [910, 1200, 1120, 1130, 1900, 2000]; 

console.log(findPlatform(arr , dep , 6));


// Check if two arrays are equal or not
/**
 * Input:
N = 5
A[] = {1,2,5,4,0}
B[] = {2,4,5,0,1}
Output: 1
Explanation: Both the array can be 
rearranged to {0,1,2,4,5}
 */
function check(arr1 ,  arr2 , n){
arr1.sort((a,b)=>a-b)
arr2.sort((a,b)=>a-b)
console.log(arr1, arr1)
for(let i=0; i<= n ; i++){
    if (arr1[i] !== arr2[i]) return 0 
}
return 1;
}
console.log(check([1,2,4,5,0],[2,4,5,0,1], 5))

//Find triplets with zero sum
/**
 * Input: n = 5, arr[] = {0, -1, 2, -3, 1}
Output: 1
Explanation: 0, -1 and 1 forms a triplet
with sum equal to 0.
 */
function findTriplets(arr2, n, x){
arr2 = arr2.sort((a,b)=>a-b)
console.log(arr2)
for(let i = 0; i< n-2 ; i++){
    let left = i+1, right = n-1;
    while(left<right){
        if(arr2[i]+arr2[left]+arr2[right] == x) return true 
        else if (arr2[i]+arr2[left]+arr2[right] < x) left++
        else right--
    }
}
return false 
}
console.log("findTriplets==>", findTriplets([-1, 0, 1, 2, -3], 5, 0))
console.log("findTriplets==>", findTriplets([1, 100, 8, 7, -3, 6], 6, 13))