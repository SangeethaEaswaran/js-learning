try{
    let x="",  num =1 
console.log('try block')
// if(x.trim() == "") throw "empty";
// if(isNaN(x)) throw "not a number";
// x = Number(x);
// if(x < 5) throw "too low";
// if(x > 10) throw "too high";
// num.toPrecision(500);   // A number cannot have 500 significant digits
// x = y + 1;   // y cannot be used (referenced)
// eval("alert('Hello)");   // Missing ' will produce an error
// num.toUpperCase();   // You cannot convert a number to upper case
decodeURI("%%%");   // You cannot URI decode percent signs

}catch ( error ){
    console.log('Error=>',error , error.name , error.message)
}
finally {
console.log('finally block')
}
