//arrays 
var cars =['Volvo', 'BMW', 'Tesla']
console.log('cars=>', cars, cars[1])
cars[1]='Mercedes'
console.log(`cars=> ${cars} , ${cars[1]}`)
//objects 
var customer = {
    firstName : "John",
    lastName: "Brave",
    cars: ["Volvo", "Tesla"]
}
console.log(customer , customer.firstName, customer.lastName)

customer.firstName= "Gennie" //Object notation
customer['lastName'] = "Rage" //bracket notation
console.log("customer", customer, customer.cars)
console.log(`customer ${customer} , ${customer.firstName}, ${customer.lastName}, ${customer.cars}`)
 