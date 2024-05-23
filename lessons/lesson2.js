//concatenation and interpolation 
var price = 30 ;
var itemName = "cup"
var messageToPrint = "The price of the "+ itemName + " is "+ price +" dollars"
var messageToPrint1 = `The price of the ${itemName} is ${price} dollars`
console.log("concatenation messageToPrint=>", messageToPrint)
console.log("interpolation messageToPrint2=>", messageToPrint1)