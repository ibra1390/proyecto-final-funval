import { stays } from "./stays.js";
import { crearCards } from "./utils.js";

//Contenedor de cards
let contenedorStays = document.querySelector("#stays-container");
stays.forEach((stay) => {
    contenedorStays.innerHTML += crearCards(stay);
})

//Contador de cards mostradas
let staysContador = document.querySelector("#contador-stays");
staysContador.textContent = "12+ stays";
//staysContador.textContent = `${stays.length}+ stays`;

