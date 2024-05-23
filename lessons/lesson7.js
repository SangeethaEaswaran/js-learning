//loops 
for (let i=0; i<5; i++){
    console.log("Hello world", i)
}
//for of loop
var cars =["volvo", "mercedes", "tesla"]
for(let car of cars){
    console.log("car=>", car)
    if(car == "mercedes") break 
}
//forEach syntax ES6 
cars.forEach(c=> {console.log("forEach =>",c)})