/*
Exercise #2 (sugerencia map())
*/

// Write a function that:
// -Takes in an array of numbers from the user, using a prompt.
// -Doubles the value of each number in the array.
// -Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

function doubleArray() {
    // Taking input from the user
    let input = prompt("Please enter numbers separated by commas (e.g., 1,2,3):");
    let numArray = input.split(',').map(Number);
    let doubledArray = numArray.map(num => num * 2);
    console.log("Doubled Array:", doubledArray);
    return doubledArray;
}
doubleArray();



