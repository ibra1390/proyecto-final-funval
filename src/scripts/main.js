import { stays } from "./stays.js";
import { renderStays } from "./utils.js";
import { initModal } from "./modal.js"

function init() {
    renderStays(stays);
    initModal();
}

document.addEventListener("DOMContentLoaded", init);
