/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function createCards({superHost, type, beds, photo, title, rating}) {
    //check if it is SuperHost or not
    let superHostHTML = "";
    if (superHost) {
        superHostHTML = `<span class="border border-gray-800 dark:border-gray-200 rounded-2xl px-3 py-1 text-xs font-bold font-montserrat text-gray-800 dark:text-gray-100">SUPERHOST</span>`;
    }

    //check beds with null values
    let  typeHTML = "";
    if (beds !== null) {
        typeHTML = `<span class="text-xs sm:text-base font-montserrat text-gray-500 dark:text-gray-200">${type} . ${beds} beds</span>`;
    } else {
        typeHTML = `<span class="text-xs sm:text-base font-montserrat text-gray-500 dark:text-gray-200">${type}</span>`;
    }

    //cards for stays
    return `
        <div class="card-container opacity-0 transition-opacity duration-500">
            <div class="rounded-2xl overflow-hidden">
                <img class="object-cover w-full h-52 sm:h-64 xl:h-96" src="${photo}" 
                 alt="${title}" 
                />
            </div>
            <div class="p-2">
                <div class="flex items-center justify-between mb-1">
                    <div class="flex items-center gap-2">
                        ${superHostHTML}
                        ${typeHTML}
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 fill-red-500">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-xs sm:text-base font-montserrat text-gray-800 dark:text-gray-200">${rating}</span>
                    </div>
                </div>
                <h3 class="font-semibold font-montserrat text-sm sm:text-base text-gray-800 dark:text-gray-200">
                    ${title}
                </h3>
            </div>
        </div>
    `;
}

export function renderStays(stays) {
    // Cards container
    let staysContainer = document.querySelector("#stays-container");
    // Spinner
    staysContainer.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center py-16">
            <svg aria-hidden="true" class="w-16 h-16 sm:w-20 sm:h-20 text-gray-200 animate-spin fill-red-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
            <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg font-medium font-montserrat">Loading...</p>
        </div>
    `;

    //Loading cards asynchronously
    setTimeout(() => {
        //No results found
        if (stays.length === 0) {
            staysContainer.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-100 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 class="text-2xl font-bold font-montserrat text-gray-800 dark:text-gray-200 mb-3">No stays found</h3>
                    <p class="text-gray-500 dark:text-gray-300 font-montserrat text-lg">Try adjusting your search filters</p>
                </div>
            `;
        } else {
            staysContainer.innerHTML = "";

            // Rendering cards
            stays.forEach((stay) => {
                staysContainer.innerHTML += createCards(stay);
            });

            //Fade-in animation for cards
            setTimeout(() => {
                const cards = staysContainer.querySelectorAll(".card-container");
                cards.forEach(card => {
                    card.classList.remove("opacity-0");
                })
            }, 100);
        }
    }, 800);
}

