//declarative
helloOne() 
function helloOne(){
    console.log('declarative function can be called anywhere in the file ')
}
helloOne();
//anonymous
var helloTwo = function(){
    console.log('Anonymous function can be called only after declaration')
} 
helloTwo()
//es6 arrow function 
var helloThree= () => {
console.log('Arrow function')
}
helloThree()
//function with arguments
function printName (name , lastName){
    console.log(name, lastName)
}
printName('Mike', 'Smith')

//function with return 
function multiplyByTwo(num){
    return num*2
}
console.log('multiplyByTwo=>', multiplyByTwo(30))

//import function
import { printAge } from '../helpers/printHelper.js' // export 
// import { printAge } from '../helpers/printHelper.js' //export default 
import * as helper from '../helpers/printHelper.js'
printAge(5); 
helper.printAge(10); //import entire file 
