const fruits = new Map()
fruits.set("apples", 500)
fruits.set("banana", 200)
fruits.set("oranges", 400)
console.log('fruits map =>', fruits)
console.log('apple value=>', fruits.get("apples"))
// fruits.clear()
fruits.delete("apples")
console.log('fruits map =>', fruits)

const fruits1 = new Map([
    ["apples", 500], ["banana", 200], ["oranges", 400]
])
let text = ""
console.log('fruits1.entries()===>', fruits1.entries())
for(let x of fruits1.entries()){
    text += x;
    console.log('x=>', x, text )
}
console.log('fruits1=>', fruits1, text)

//foreach 
let text1= ""
fruits.forEach(function(value, key) {
    text1+= key + '=' +value
});console.log('text1=>', text1)

console.log("has =>", fruits.has('oranges1'))
console.log("size =>", fruits.size)
let keys="", values=""
for (let x of fruits1.keys()){
    keys+= x + " "
}
console.log('Keys==>', keys)
for(let x of fruits1.values()){
values+= x+" "
}
console.log('values==>', values)
