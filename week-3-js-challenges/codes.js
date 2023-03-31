// + Addition, Values, variables, expressions
// - Subtraction
// * Multiplication
// ** Exponential (EES2016) aka To the Power of aka Math.pow(x,y)
// / Division
// % Modulos (remainder)
// ++ Increment by one
// += Increment by * and assign value
// -- Decrement by one
// -= Decrement by * and assign value
// *= Multiply by * and assign value
// /= Divide by * and assign value

var friend = 'Lama Ole';
// var = variable
// var friend; - declaration / container of the information 
// friend = 'Lama Ole'; - An assignment
// friend; - label
// Lama Ole = value

strings+substrings, numbers, booleans, null, undefined
// STRING: all text into ' '
// SUBSTRING: first word of the sentence
EX: var friend = 'Lama lives in Denmark'  ('Lama' is substring) - ('Lama lives in Denmark' is string)

// NUMBERS: Normal numbers we use to use.
EX: var numb = 4;   (terminal gives the 4)   or    4+4 (terminal gives 8)

// BOOLEANS: true or false
EX: var peace = 10>7;  (terminal: TRUE)

// NON-ZERO VALUE: You still have a number or string ( "  " )
// 0: number 0, zero value
// NULL: nulo
// UNDEFINED: wrong writting I GUESS

--------------
VAR  -   LET   -  CONST 

// var name = 'Lama Ole'  -   DECLARABLE
// var name = 'Karmala'  -  REDECLARABLE
// name = 'Marpa'   -   ASSIGNABLE
// name = 'Mila'    -   REASSIGNABLE

// var - you can do all
// let - is NOT redeclarable BUT is reassignable
// * const - is NOT declarable and reassignable (THE SAFEST)

-- IF ELSE -- STATEMENT
EX:

if('Marcio'.length > 7) {
    console.log('Its more than 7');
} else if('Marcio'.length == 7) {
    console.log('Equals to 7');
} else {
    console.log('Less than 7');
}

-- TORNERY OPERATOR --  (Same as above but when using only IF and ELSE)
EX:
'Marcio'.length >5 ? console.log('More then 5') : console.log('its less than 5');

TERMINAL GIVES: More than 5.


-- SWITCH STATEMENT -- 
EX: 
switch ('Marcio'.length > 5) {
    case true:
    console.log('Its more than 5');
    break;
    case false: 
    console.log('Less than 5');
    break;
    default:  
    console.log('None of them');
}

-->> FUNCTIONS:

// DECLARATION
function multiplyTwoDigits(firstDigit, secondDigit) {
    return firstDigit * secondDigit;
}

// CALL THE FUNCTION
const result = multiplyTwoDigits(6, 6);

console.log(result);

-------- EX 2:

// DECLARATION
function isUserUnderAge(age, limit) {
    return age <= limit;
}

// CALL THE FUNCTION
const result = isUserUnderAge(17, 18);

console.log(result);                TERMINAL response: true. 


-------- EX 3:

// DECLARATION
function isUserAGoodDriver(hadDUI) {
    if (hadDUI){
        return false;
    }
    else{
        true;
    }
}

// CALL THE FUNCTION
const result = isUserUnderAge(17, 18);

console.log(result);                TERMINAL response: true. 








