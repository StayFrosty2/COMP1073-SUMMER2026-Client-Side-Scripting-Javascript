var output = document.querySelector('p');
        
/* STEP 1: String Length */
let step1a = "My string";
let step1b = step1a.length;
output.textContent = `"${step1a}" is ${step1b} characters long`;

/* STEP 2: Retrieving a Specific String Character */
let step2 = "Bozo the Clown";
let firstChar = step2[0];
let lastChar = step2[step2.length - 1];

/* STEP 3: Extracting Part of a String */
let step3a = step2.indexOf("Clown");
// Note - if the substring is not found within the string, indexOf() returns -1
let step3b = step2.slice(step3a, 12);
// this should return "Clo"

// Note - if you don't specify where to end the slice, the method returns the rest of the string

/* STEP 4: Changing Case */
let step4 = "Bank of Canada";
output.textContent = step4.toUpperCase();

/* STEP 5: Updating Parts of a String */
let step5a = "Barrie, ON";
let step5b = step5a.replace("ON", "Ontario");
output.textContent = step5b;