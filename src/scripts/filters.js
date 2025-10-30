import { initLocations, updateLocation } from "./locations.js";
import { initGuests, getGuestsCount } from "./guests.js";
import { stays } from "./stays.js";
import { renderStays } from "./utils.js";

export function initFilters() {
    initLocations();
    initGuests();

    // Search buttons event
    document.querySelectorAll(".search-btn").forEach(button => {
        button.addEventListener("click", searchStays)
    });
}

// Search for stays
function searchStays() {
    let location = document.querySelector("#location-search").value;
    let guests = getGuestsCount();

    console.log(`Filters - Locations:${location}, "Guests:${guests}`)

    //Filter 
    let results = stays;
    if (location) {
        results = results.filter(({city, country}) => 
            //changed from "===" to "includes" to allow partial matching
            `${city}, ${country}`.toLowerCase().includes(location.toLowerCase()) 
        );
    }
    if (guests > 0) {
        results = results.filter(({maxGuests}) => maxGuests >= guests);
    }

    console.log("Results found:", results.length);

    //Display results
    renderStays(results);
    updateTitle(results.length, location);
    updateLocation(location);
    
    //Close modal
    document.querySelector("#modal").classList.add("hidden");
}

function updateTitle(count, location = "") {
    let title = document.querySelector("#main-title");
    let counter = document.querySelector("#stays-counter");

    if (location) {
        let cityName = location.split(",")[0];
        title.textContent = `Stays in ${cityName}`;
    } else {
        title.textContent = "Stays in Finland";
    }

    //Stays counter
    if (location || count !== stays.length) {
        if (count === 0) {
            counter.textContent = "0 stays";
        } else {
            counter.textContent = count + "+ stays";
        }
    } 
}

