/*
Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

// 1. Guardamos la función original por si la necesitamos
const originalLog = console.log;
const outputDiv = document.getElementById('console-output');

// 2. Sobreescribimos console.log
console.log = function(...args) {
    // Llamamos a la original para que sigas viéndolo en la consola real (F12)
    originalLog.apply(console, args);

    // Creamos un nuevo elemento de texto para el HTML
    const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : arg
    ).join(' ');

    const newLine = document.createElement('div');
    newLine.textContent = `> ${message}`;
    outputDiv.appendChild(newLine);
};

/**
 * Code snippet to complete:
 */

function sumAndProduct() {
    // Taking input from the user
    let input = prompt("Please enter numbers separated by commas (e.g., 1,2,3):");
    let numArray = input.split(',').map(Number);  
    let sum = numArray.reduce((acc, curr) => acc + curr, 0);
    let product = numArray.reduce((acc, curr) => acc * curr, 1);
    return { sum, product, numArray };
}

const { sum, product, numArray } = sumAndProduct();
console.log("Given the array", numArray);
console.log("The sum is " + sum);
console.log("The product is " + product);