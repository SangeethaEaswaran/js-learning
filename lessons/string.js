let text = "w3schools"
console.log(text.charAt(0))
console.log(text.charAt(2))
console.log(text.at(1))
console.log(text[3])
console.log(text[-1])
console.log(text.charAt(text.length-1))
console.log(text.charCodeAt(1))
console.log(text.codePointAt(1))
let text1 = "Hello", text2= "World";
let result = text1.concat(text2)
let result1 = text1.concat(" ", text2)
console.log('result=>', result )
console.log('result1=>', result1 )

let t = "Hello World"
let r = t.endsWith("World")
console.log('r=>', r )

let text3 = "Hello world, welcome to the universe.";
console.log('text3',text3.endsWith("world", 11));


let char = String.fromCharCode('65','66', '67','68','69','70')
console.log('char', char)

let x= 5;
let num = x.toString()
let padded = num.padEnd(4,'x')
console.log('padded=>', padded)
console.log('padded=>', num.padStart(4,'x'))

let text4 = "Mr. Blue has a blue house";
let position = text4.search(/Blue/);
console.log('position=>', position)
console.log('position=>', text4.search(/blue/))
console.log('ToLocaleLowerCase', ("hello world!").toLocaleUpperCase())
console.log('ToLocaleLowerCase', ("HELLO WORLD!").toLocaleLowerCase())

console.log('ToLocaleLowerCase', ("hello world!").toUpperCase())
console.log('ToLocaleLowerCase', ("HELLO WORLD!").toLowerCase())

console.log('trim=>', ("    HELLO WORLD!   ").trim())
console.log('trimEnd=>', ("    HELLO WORLD!   ").trimEnd())
console.log('trimEnd=>', ("    HELLO WORLD!   ").trimStart())
console.log('valueOf=>', ("    HELLO WORLD!   ").valueOf())

let i = new Uint8Array(10)
console.log("i =>", i)