const inputNombre = document.getElementById("nombre")
const botonbuscar = document.getElementById("botonbuscar")
const peso = document.getElementById("peso")
const imagen = document.getElementById("imagen")
const sonido = document.getElementById("sonido")
const listaitems = document.getElementById("listaitems")

async function buscarInfoPokemon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputNombre.value)
    const infoPokemon = await respuesta.json();

    peso.innerText= infoPokemon.weight;
    imagen.src = infoPokemon.sprites.other.home.front_default;// poner una imagen 

    sonido.src = infoPokemon.cries.latest;// poner sonido 

    infoPokemon.held_items.forEach(item => {
        const itemLi = document.createElement("li");
        itemLi.innerText = i.item.name;
        listaitems.appendChild(itemLi);
    });
}

buscarboton.addEventListener("click", e=>{
    e.preventDefault();
    console.log("listo")

    buscarInfoPokemon();
});