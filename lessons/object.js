const p1 = {
    firstName : 'person1',
    lastName : 'lastName1',
    age:40,
    eyeColour : 'blue'
}

const p2 ={
    firstName: 'person2',
    lastName: 'lastName2'
}

Object.assign(p1, p2)
console.log('p1=>', Object.entries(p1))

const man= Object.create(p1)
console.log('man=>', man.lastName)
let p3 = {firstName : 'sangeetha', lastName: 'Easwaran' }

Object.defineProperties(p3 ,{
    language: {value : "en"},
    year: {value:"1992"}
})
console.log('p3', p3)
Object.defineProperty(p3, "dob", {value:"31/12/1992"})
console.log('p3=>', p3)
// const io = Object.fromEntries(p3)
// console.log(io.lastName)
// Object.freeze(p2)
Object.seal(p2)
// p2.age = 41;

let descriptor = Object.getOwnPropertyDescriptor(p3, "firstName")
console.log('descriptor =>', descriptor.value)
let descriptors = Object.getOwnPropertyDescriptors(p3)
console.log('descriptors=>', descriptors , descriptors.firstName.value)
let descriptorsNames = Object.getOwnPropertyNames(p3)
console.log('descriptorsNames=>', descriptorsNames)
console.log(Object.isExtensible(p2), Object.isFrozen(p2))