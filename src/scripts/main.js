import { stays } from "./stays.js";
import { renderStays } from "./utils.js";
import { initModal } from "./modal.js"
import { initFilters } from "./filters.js"

function init() {
    renderStays(stays);
    initModal();
    initFilters();
}

document.addEventListener("DOMContentLoaded", init);
