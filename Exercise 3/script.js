/*
Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
const numbers = [1, 2, 3, 4];
let sum = 0;
let product = 1;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  product *= numbers[i];
}
console.log("The sum is " + sum);
console.log("The product is " + product);