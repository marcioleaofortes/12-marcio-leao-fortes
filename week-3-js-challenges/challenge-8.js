
// 8 - Equality Check. Create function that returns
// true or false that matches examples below.

// Your code here

function checkEquality(type, value) {
    if (type === value) {
    return true;
    } else {
    return false;
    }
}


console.log(checkEquality(1, true))
console.log(checkEquality(0, "0"))
console.log(checkEquality(1, 1))



// CheckEquality(1, true) ➞ false // A number and a boolean: the value and type are different
// checkEquality(0, "0") ➞ false // A number and a string: the type is different
// checkEquality(1, 1) ➞ true // A number and a number: the type and value are equal