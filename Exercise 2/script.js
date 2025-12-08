/*
Exercise #2 (sugerencia map())
*/

// Write a function that:
// -Takes in an array of numbers from the user, using a prompt.
// -Doubles the value of each number in the array.
// -Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

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
function doubleArray() {
    // Taking input from the user
    let input = prompt("Please enter numbers separated by commas (e.g., 1,2,3):");
    let numArray = input.split(',').map(Number);
    let doubledArray = numArray.map(num => num * 2);
    console.log("Given the Input Array:", numArray);
    console.log("Doubled Array:", doubledArray);
    return doubledArray;
}
doubleArray();



