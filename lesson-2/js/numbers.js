const output = document.querySelector("p");
/* STEP 1: Number types (integer, float, and double)
declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
let myInt = 5;
let myFloat = 3.14159;
let myDouble = 420.69;

output.textContent = "Number type of myInt is: Number\n" + typeof(myInt);
// Note - there are also different number systems: binary, octal, and hexadecimal

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
let step2a = 5 + 2;
let step2b = 5 - 2;
let step2c = 5 * 2;
let step2d = 5 / 2;
let step2e = 5 % 2;
let step2f = 5 ** 2;
output.textcontent = step2a;

// Try declaring and initializing a couple of variables as numbers


/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
let step3a = 1;
step3a++;

let step3b = 4;
step3b--;

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
let step4a = 1;
step4a += 2; // should be 3
step4a -= 1; // should be 2
step4a *= 2; // should be 4
step4a /= 4; // should be 1

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
let step5a = 5;
let step5b = "5";
let step5c = step5a == step5b;

output.textContent = step5c;