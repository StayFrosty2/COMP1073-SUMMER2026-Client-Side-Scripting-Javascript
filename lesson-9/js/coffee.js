const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    size;
    isDecaf;

    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    serveIt() {
        let cup = document.createElement("img");

        cup.setAttribute("src", "images/coffee-cup.svg");

        if(this.isDecaf == true) {
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        }
        else {
            cup.setAttribute("src", "images/coffee-cup-purple.svg")
        }

        switch (this.size) {
            case "small":
                cup.setAttribute("height", 100);
                cup.setAttribute("width", 100);
                break;
            case "medium":
                cup.setAttribute("height", 150);
                cup.setAttribute("width", 150);
                break;
            case "large":
                cup.setAttribute("height", 200);
                cup.setAttribute("width", 200);
                break;
            default:
                cup.setAttribute("height", 150);
                cup.setAttribute("width", 150);
                break;
        }

        cup.setAttribute("title", `A ${this.size} ${this.isDecaf ? "decafinated" : "caffinated"} coffee.`);

        output.appendChild(cup);
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
// let claireCoffee = new Coffee("medium", false);
// claireCoffee.serveIt();

// let joeCoffee = new Coffee("large", true);
// joeCoffee.serveIt();

// let nedCoffee = new Coffee("small", false);
// nedCoffee.serveIt();

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    milkType;
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }
}
/* STEP 6: Create a new instance of the Latte object */

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG


// Cameron Yon - Lab 2 Work

// Create the subclass of coffee, in my case it will be an iced coffee
class IcedCoffee extends Coffee {
    // Flavoring variable for the coffee
    flavor;
    
    // Constructor
    constructor(size, isDecaf, flavor) {
        super(size, isDecaf);
        this.flavor = flavor;
    }

    // Method to add the description of the coffee to the output
    icedCoffeeDesc() {
        let cup = document.createElement("p");
        cup.textContent = `A ${this.size} ${this.isDecaf ? "decafinated" : "caffinated"} Iced Coffee with a ${this.flavor} shot.`;
        output.appendChild(cup);
    }
}

// Going further, a second subclass extending from IcedCoffee
class IcedLatte extends IcedCoffee {
    // milkType variable
    milkType;

    // Constructor
    constructor(size, isDecaf, flavor, milkType) {
        super(size, isDecaf, flavor);
        this.milkType = milkType;
    }

    // Method to add the description of the coffee to the output
    icedLatteDesc() {
        let cup = document.createElement("p");
        cup.textContent = `A ${this.size} ${this.isDecaf ? "decafinated" : "caffinated"} Iced Latte with a ${this.flavor} shot and ${this.milkType} milk.`;
        output.appendChild(cup);
    }
}

// Initiate the two objects
let claireCoffee = new IcedCoffee("medium", false, "vanilla");
let rubyCoffee = new IcedLatte("large", true, "hazelnut", "oat");

// Call the serveIt() and respective description functions for both
claireCoffee.serveIt();
claireCoffee.icedCoffeeDesc();

rubyCoffee.serveIt();
rubyCoffee.icedLatteDesc();