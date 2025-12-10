console.log("JS cargado.");

window.addEventListener("load", () => {
    console.log("Página cargada.");

    const audio = document.getElementById("musica");

    // Verificar si el archivo existe
    audio.addEventListener("error", () => {
        console.error("ERROR: No se pudo cargar el archivo de audio. Revisa la ruta.");
    });

    const permiso = sessionStorage.getItem("audioPermitido");
    console.log("Permiso leído:", permiso);

    if (permiso === "1") {
        console.log("Intentando reproducir audio...");
        audio.play()
            .then(() => {
                console.log("REPRODUCCIÓN EXITOSA.");
                sessionStorage.removeItem("audioPermitido");
            })
            .catch(err => {
                console.error("ERROR al reproducir:", err);
            });
    } else {
        console.warn("Autoplay bloqueado: no se detectó clic previo en home.html");
    }
});
