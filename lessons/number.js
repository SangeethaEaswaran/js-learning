console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE , Number.MIN_SAFE_INTEGER , Number.MIN_VALUE)
console.log(Number.isFinite(0))
console.log(Number.isFinite(1230))
console.log(Number.isFinite(-1))
console.log(Number.isFinite("1234"))
console.log(Number.isFinite(NaN))
console.log(isFinite("1234"))


console.log("isInteger", Number.isInteger(NaN))
console.log("isInteger", Number.isInteger(5/2))
console.log("isInteger", Number.isInteger(-123))
console.log("isInteger", Number.isInteger('123'))

console.log('isNan', Number.isNaN(0/0))
console.log('isSafeInteger', Number.isSafeInteger(0.5))
console.log("Positive infinity", Number.POSITIVE_INFINITY)
console.log("negative infinity", Number.NEGATIVE_INFINITY)

console.log(Number.parseFloat("40H"))
console.log(Number.parseFloat("40 years"))
console.log(Number.parseFloat("H40"))
console.log(Number.parseInt("30 45 56"))

console.log((4.657898).toExponential(3))
console.log((5.678).toFixed(2))
console.log((5.678).toFixed())

let num = 1000000
console.log(num.toLocaleString("en-US", {style:"currency", currency:"USD"}))
console.log(num.toLocaleString("en-GB", {style:"currency", currency:"GBP"}))
console.log(num.toLocaleString("en-IN", {style:"currency", currency:"RUP"}))

console.log((6.899).toPrecision(2))