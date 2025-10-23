const inputNombre = document.getElementById("nombre");
const botonBuscar = document.getElementById("botonBuscar");
const infoNombre = document.getElementById("infoNombre");
const infoMasa = document.getElementById("infoMasa");
const infoAltura = document.getElementById("infoAltura");
const infoOjos = document.getElementById("infoOjos");
const errorMensaje = document.getElementById("errorMensaje");

async function buscarPersonaje() {
    infoNombre.innerText = "...";
    infoMasa.innerText = "...";
    infoAltura.innerText = "...";
    infoOjos.innerText = "...";
    errorMensaje.innerText = "";

    const nombrePersonaje = inputNombre.value.trim().toLowerCase();

    if (nombrePersonaje === "") {

        errorMensaje.innerText = "Por favor, ingresa un nombre.";
        return;

    }


    try {
        const respuesta = await fetch("https://swapi.dev/api/people/?search=" + nombrePersonaje);

        if (!respuesta.ok) {
            throw new Error("Error al conectar con la API.");
        }

        const data = await respuesta.json();

        if (data.count === 0 || !data.results[0]) {
            throw new Error("Personaje no encontrado.");
        }

        const personaje = data.results[0];

        infoNombre.innerText = personaje.name;
        infoMasa.innerText = personaje.mass + " kg";
        infoAltura.innerText = personaje.height + " cm";
        infoOjos.innerText = personaje.eye_color;

    } catch (error) {
        errorMensaje.innerText = "Error: " + error.message;
        infoNombre.innerText = "";
        infoMasa.innerText = "";
        infoAltura.innerText = "";
        infoOjos.innerText = "";

    }

}

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    buscarPersonaje();

});