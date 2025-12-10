async function handleFetchClick() {
    const btn = document.getElementById("fetch-btn");
    const loading = document.getElementById("loading-message");
    btn.disabled = true;
    loading.style.display = "block";

}

let getExercise = document.getElementById("exerciseDropdown");
let value = getExercise.value;
let text = getExercise.options[getExercise.selectedIndex].text;
