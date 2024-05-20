'use strict';

// 1. isHometown

function isHometown(town) {

    return town === "San Francisco";
}
console.log(isHometown('San Francisco'));


// 2. getFullName
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(getFullName("Ivan", "Rendon"));

// 3. calculateTotal
function calculateTotal(basePrice, state, tax = 0.05) {

    const subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === "CA") {
        fee = 0.03 * subtotal;
    } else if (state === "PA") {
        fee = 2;
    } else if (state === "MA") {
        if (basePrice <= 100 ) {
            fee = 1;
        } else {
            fee = 3; 
        }
    }

    return subtotal + fee;
}

console.log(calculateTotal(100, 'CA')); 
console.log(calculateTotal(100, 'PA'));
console.log(calculateTotal(100, 'MA')); 
console.log(calculateTotal(150, 'MA')); 
console.log(calculateTotal(100, 'TX'));

