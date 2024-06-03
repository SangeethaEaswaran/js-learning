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
