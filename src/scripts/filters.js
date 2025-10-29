import { initLocations } from "./locations.js";
import { initGuests, getGuestsCount } from "./guests.js";
import { stays } from "./stays.js";
import { renderStays } from "./utils.js";

export function initFilters() {
    initLocations();
    initGuests();
    runSearch();
}

function runSearch() {
    
}