/*
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
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

console.log(bubbleSort(array));