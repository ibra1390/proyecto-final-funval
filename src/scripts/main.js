import { stays } from "./stays.js";
import { renderStays } from "./utils.js";
import { initModal } from "./modal.js"
import { initFilters } from "./filters.js"


document.addEventListener("DOMContentLoaded", () => {
    console.log("App initialized!");

    renderStays(stays);
    initModal();
    initFilters();
    
    //Displays standard counter
    const counter = document.querySelector("#stays-counter");
    counter.textContent = "12+ stays";
});


