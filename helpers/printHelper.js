export function printAge(age){
    console.log('Age=>', age)
}
export class CustomerDetails{
printFirstName(firstName){
    console.log(firstName)
}
/**
 * This method will print last name 
 * @param {string} lastName 
 */
printLastName(lastName){
    console.log(lastName)
}
}
export var custDetails = new CustomerDetails();
