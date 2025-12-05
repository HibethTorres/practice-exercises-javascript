/*
For each of the exercises below, assume you are starting with the following people
array.
let people = [&quot;Maria&quot;, &quot;Dani&quot;, &quot;Luis&quot;, &quot;Juan&quot;, &quot;Camila&quot;];
1. Write a command that prints out all of the people in the list.
2. Write the command to remove &quot;Dani&quot; from the array.
3. Write the command to remove &quot;Juan&quot; from the array.
4. Write the command to move &quot;Luis&quot; to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log &quot;Maria&quot;, exit
from the loop. (usar break)
7. Write the command that gives the indexOf where &quot;Maria&quot; is located.
At the end of the exercise, there should be 4 people in the array.

*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Print all people
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Remove "Dani"
people.splice(people.indexOf("Dani"), 1);

// 3. Remove "Juan"
people.splice(people.indexOf("Juan"), 1);

// 4. Move "Luis" to the front
let luisIndex = people.indexOf("Luis");
let luis = people.splice(luisIndex, 1)[0];
people.unshift(luis);
//people.unshift("Luis");

// 5. Add your name to the end
people.push("Hibeth");

// 6. Loop and exit after "Maria"

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

// 7. Index of "Maria"
console.log("Index of Maria: " + people.indexOf("Maria"));

// Final state of the array
console.log("Final people array: " + people);


//--------THE END--------