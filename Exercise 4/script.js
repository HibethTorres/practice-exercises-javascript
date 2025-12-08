/*
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console.
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

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];   

console.log("Finding common courses between two students:");
console.log("Student 1 courses:", student1Courses);
console.log("Student 2 courses:", student2Courses);

for (let i = 0; i < student1Courses.length; i++) {
  for (let j = 0; j < student2Courses.length; j++) {
    if (student1Courses[i] === student2Courses[j]) {
      console.log("Common course: " + student1Courses[i]);
    }
  }
}