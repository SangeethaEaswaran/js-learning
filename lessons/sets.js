const setq = new Set(['a', 'b', 'c','d', 'e'])
setq.add('f')
console.log('setq=>', setq)
// setq.clear()
setq.delete('f')
console.log('setq=>', setq)
for(let x of setq.keys()){
    console.log('Keys x=>',x )
}
for(let x of setq.values()){
    console.log('values x=>',x )
}
let text =""
setq.forEach(function(value){
text+= value+" "
})
console.log('forEach', text)
let text1= ""
for (let x of setq.entries()){
    console.log('Entries', x)
}