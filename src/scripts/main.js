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

    /* DARK MODE */
    let darkButton = document.querySelector("#dark-btn");
    let all = document.querySelector("#all");

    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        all.classList.add("dark");
        darkButton.checked = true;
    }
    
    darkButton.addEventListener("click", () => {
        all.classList.toggle("dark");

        if (all.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            darkButton.checked = true;
        } else {
            localStorage.setItem("theme", "light");
            darkButton.checked = false;
        }
    });
});


