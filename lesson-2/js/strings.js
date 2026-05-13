const output = document.querySelector('p');

/* STEP 1: Creating Strings */
let step1 = "This is a string";
output.textContent = step1;

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
let step2 = 'You\'re a mean one, Mr. Grinch.';
step2 = `You're a mean one, Mr. Grinch.`;
output.textContent = step2;

let step2b = "\tHi\nmy\nname\nis\nClaire.";
output.textContent = step2b;

/* STEP 3: Concatenation */
let step3a = "Javascript";
let step3b = "rocks!";
output.textContent = step3a + " " + step3b;
// output.textContent = `${step3a} ${step3b}`;

/* STEP 4: Numbers and Strings */
let step4a = "Fahrenheit " + 451;
output.textContent = step4a;
// numbers can be converted to strings
let step4b = 2024;
let step4c = step4b.toString();
let step4d = String(step4b);

// strings can be converted to numbers, too
let step4e = Number(step4d);
// and back again, if we want