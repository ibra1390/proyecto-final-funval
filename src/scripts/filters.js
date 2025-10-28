import { stays } from "./stays.js";

// Create a new list without duplicates for cities and countries
const availableLocations = [...new Set(stays.map(({city, country}) => `${city}, ${country}`))];

// initialize filter
export function initFilters() {
    let locationSearch = document.querySelector("#location-search");
    let locationSuggestions = document.querySelector("#location-suggestions");

    // Get what user types in the searchbox
    locationSearch.addEventListener("input", (e) => {
        let searchTerm = e.target.value.toLowerCase();
        // filter locations that match the user's search
        let filtered = availableLocations.filter(location =>
            location.toLowerCase().includes(searchTerm)
        );
        // display the filtered results
        showSuggestions(filtered, locationSuggestions);
    });

    // Show all available locations when user click into the search box
    locationSearch.addEventListener("focus", () =>{
        showSuggestions(availableLocations, locationSuggestions);
    });

    // If user click outside the search box and suggestions dropdown
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#location-search") && !e.target.closest("#location-suggestions")) {
            locationSuggestions.classList.add("hidden"); //hides the suggestions dropdown
        }
    });
    
    //Find which suggestion was clicked in the dropdown
    locationSuggestions.addEventListener("click", (e) => {
        const clickedSuggestion = e.target.closest(".location-suggestion");
        // Get the location from the clicked suggestion
        if (clickedSuggestion) {
            let selectedLocation = clickedSuggestion.getAttribute("data-location");
            locationSearch.value = selectedLocation; //put the selection in the input

            locationSuggestions.classList.add("hidden");
        }
    });
}

// Display locations' dropdown
function showSuggestions(locations, container) {
    container.innerHTML = "";

    if (locations.length === 0) {
        container.innerHTML = `<div class="p-4 text-center text-gray-500 text-sm font-montserrat">No locations found</div>`;
    } else {
        locations.forEach(location => {
            container.innerHTML += `
                <div class="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 location-suggestion" 
                    data-location="${location}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span class="text-sm font-montserrat text-gray-500">${location}</span>
                </div>
            `;
        });
    }
    
    container.classList.remove("hidden");
}