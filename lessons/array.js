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

const list = furitJoin.keys()
console.log('list', list)
let text3 ='';
for ( let x of list){
    text3+=x;
}
console.log('text3==>', text3)
console.log('lastIndexOf==>', furitJoin.lastIndexOf("mangoes2"))
console.log('length==>', furitJoin.length)


const num = [4,9,16,25]
console.log(num.map(Math.sqrt))
console.log(num.map((e)=>e*10))

const n = Array.of("abc","bcd","efg")
console.log('n=>', n)
n.pop()
console.log('n=>', n)
n.push('ijk','lmn')
console.log('n=>', n)
console.log('n=>', n.reverse())
console.log('n=>', n.shift())

const sliceFruits = furitJoin.slice(1,3)
console.log('sliceFruits=>', sliceFruits)

const sliceFruits1 = furitJoin.slice(-3,-1)
console.log('sliceFruits=1>', sliceFruits1)

// const toBesliced = furitJoin.toSpliced(2,0 , "Lemon", "Kiwi")
// console.log('toBesliced>', toBesliced)

console.log('toString>', furitJoin.toString())

console.log(furitJoin.some((f)=> f =="peaches1"))
console.log(furitJoin.sort())

console.log(furitJoin.splice(2,0,"melon","nectar"))
// const arrReversed = furitJoin.toReversed()
// console.log('arrReversed=>', arrReversed)

furitJoin.unshift("Apple", "Pineapple")
console.log('furitJoin=>', furitJoin.valueOf())
// const i =furitJoin.with(2,"lime")
// console.log(i)