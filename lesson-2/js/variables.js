/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Claire";
myAge = "20";

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Pixel";
console.log("Hi, I am " + myName + " and I am " + myAge + " years old.");

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;
let modelYear = 2005;
// Strings (use '' or "")
let typeCar = "Honda Civic" + modelYear;
// Booleans
let iAmTired = true;
// Arrays
let myNameArray = ["Claire", "Liam", "Allan", "Yon-Vachon"];
let myNumArray = [420, 69, 8008];
let myMixedArray = ["Claire", 20, true];
// Objects
let myDog = {
    name: "Bentley",
    age: 5,
    breed: "Golden Retreiver",
    size: "large"
}

// STEP 5: Typing (JavaScript is a loosely-typed language)
console.log(typeof(myDog));