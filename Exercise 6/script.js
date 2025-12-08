/*
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
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



const array = [3, 6, 12, 5, 100, 1 ];


    function bubbleSort(arr) {
        for (let i=0; i<arr.length; i++){
            for (let j=0; j<arr.length-1;j++){
                if (arr[j] > arr[j+1]){
                    let tempVar = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tempVar;
                }
            }
        }    return arr;
    } 

console.log("Given array: " + array);
console.log("Sorted array: " + bubbleSort(array));