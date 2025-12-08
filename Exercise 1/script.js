/*
Exercise #1 (sugerencia: join())
*/
// En scripts/dropdown.js
document.addEventListener('DOMContentLoaded', function() { // Asegura que el DOM esté listo
    const dropdown = document.getElementById('exerciseDropdown');

    dropdown.addEventListener('change', function() {
        const valorSeleccionado = this.value; // 'this' se refiere al dropdown
        console.log('Has seleccionado:', valorSeleccionado);

        // Ejemplo: Cambiar el texto de un párrafo
        const parrafo = document.createElement('p');
        parrafo.textContent = `La opción seleccionada fue: ${valorSeleccionado}`;
        document.body.appendChild(parrafo);
    });
});


let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
    let result = arr.join(" ");
    console.log(result);  
}
printOutString();

//Complete the function to print out the string: This is a sentence.
