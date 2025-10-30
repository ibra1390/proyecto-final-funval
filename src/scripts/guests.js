//guests counters
let adultsCount = 0;
let childrenCount = 0;

export function initGuests() {
    setupGuests();
}

//Setup guests dropdown and counters
function setupGuests() {
    let selectGuests = document.querySelector("#select-guests");
    let guestsDropdown = document.querySelector("#guests-dropdown");

    // Open and close guests dropdown 
    selectGuests.addEventListener("click", ()=> {
        guestsDropdown.classList.toggle("hidden");
        //Close location suggestions if open
        document.querySelector("#location-suggestions").classList.add("hidden");
    });

   //counter buttons function
   setupCounterButtons();

   //Close guests dropdown when clicking outside
    document.addEventListener("click", (e) =>{
        if (!e.target.closest("#select-guests") && !e.target.closest("#guests-dropdown")) {
            guestsDropdown.classList.add("hidden");
        }
   });
}

//Function for counter buttons
function setupCounterButtons() {
    //Adults
    document.querySelector("#decrease-adults").addEventListener("click", () => {
        if (adultsCount > 0) {
            adultsCount--;
            updateGuests();
        }
    });
    
    document.querySelector("#increase-adults").addEventListener("click", () => {
            adultsCount++;
            updateGuests();
    });

    //Children
    document.querySelector("#decrease-children").addEventListener("click", () => {
        if (childrenCount > 0) {
            childrenCount--;
            updateGuests();
        }
    });
    
    document.querySelector("#increase-children").addEventListener("click", () => {
            childrenCount++;
            updateGuests();
    });
}

function updateGuests() {
    const totalGuests = adultsCount + childrenCount;

    //Update guests display
    let displayText;
    if (totalGuests > 0) {
        if (totalGuests === 1) {
            displayText = "1 guest";
        } else {
            displayText = `${totalGuests} guests`;
        }
    } else {
        displayText = "Add guests";
    }

    //Update counter numbers
    document.querySelector("#adults-count").textContent = adultsCount;
    document.querySelector("#children-count").textContent = childrenCount;

    //Update modal text
    let modalText = document.querySelector("#select-guests p");
    modalText.textContent = displayText;

    if (totalGuests === 0) {
        modalText.classList.add("text-gray-400");
        modalText.classList.remove("text-gray-800", "dark:text-gray-300");
    } else {
        modalText.classList.add("text-gray-800", "dark:text-gray-100");
        modalText.classList.remove("text-gray-400");
    }

    //Update searchbar text
    let headerText = document.querySelector("#searchBar .guests-text");
    if (headerText) {
        headerText.textContent = displayText;

        if (totalGuests === 0) {
            headerText.classList.add("text-gray-400", "dark:text-gray-500");
            headerText.classList.remove("text-gray-800", "dark:text-gray-100");
        } else {
            headerText.classList.add("text-gray-800", "dark:text-gray-100");
            headerText.classList.remove("text-gray-400", "dark:text-gray-500");
        }
    }
}

export function getGuestsCount() {
    return adultsCount + childrenCount;
}