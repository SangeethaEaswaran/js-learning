let fruits = new Array("banana", "orange", "apple")
console.log('fruits',fruits)
let fruit = fruits.at(2)
console.log('fruit',fruit)
let fruits1 = ["grapes", "plums", "peaches"]
let fruits2 = ["mangoes"]
let furitJoin = fruits.concat(fruits1, fruits2)
console.log("furitJoin=>", furitJoin)
let text = furitJoin.constructor;
console.log("text=>", text)
console.log("copyWithin=>", furitJoin.copyWithin(2,0, 2))
// console.log("copyWithin=>", furitJoincopyWithin(2,0))
const agees = [32, 33, 45, 54,12]
function checkAge(age)
{return age> 18}
console.log(agees.every(checkAge))
const fruits3 = ['apple', 'banana','cherry','dragonfruit','elachi']
console.log('fill=>',fruits3.fill('figs', 2, 5))
console.log('fill=>',fruits3.fill('figs'))
const ages = [43,29,19, 34, 45,78,12]
let eighteenAge = ages.filter((age)=>{
    return age >=15
})
console.log('eighteenAge=>', eighteenAge)
let lessThanEighteen = ages.find((age)=> {
    return age < 18
})
console.log('lessThanEighteen=>', lessThanEighteen)
let age_18 = ages.findIndex((age)=>age<=18)
console.log('age_18=>', age_18)
let age_greater18 = ages.findLast((age)=>age>=18)
console.log('age_greater18=>', age_greater18)
let age_greater18Index = ages.findLastIndex((age)=>age>=18)
console.log('age_greater18Index=>', age_greater18Index)
const myarr = [[1,2], [2,3],[3,4]]
console.log(myarr.flat())
const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];
console.log(myArr1.flat(2))

const myarr2 = [1,2,3, 4, 5, 6]
console.log('myarr2',myarr2.flatMap((x)=>x*2))

furitJoin.forEach((element,index) => {
   console.log(index, "-", element) 
});

//sum using foreach 
const a =[23,45,65,78]
let sum =0;
a.forEach((element,index,a)=>{a[index]= element*100})
console.log('a=>', a)
a.forEach((element)=>{ sum+=element})
console.log('sum', sum)

let alphaArray = Array.from("ABCDEFGH")
console.log('alphaArray=>', alphaArray)


console.log(furitJoin.includes("mangoes", 3))
console.log(furitJoin.indexOf("mangoes", 3))

console.log(Array.isArray(fruits1))
console.log(Array.isArray("fruits1"))

let text1 = furitJoin.join(" and ")
console.log('text1=>', text1)