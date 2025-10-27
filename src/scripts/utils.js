/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function crearCards({superHost, type, beds, photo, title, rating}) {
    //Si es SuperHost o no
    let superHostHTML = "";
    if (superHost) {
        superHostHTML = `<span class="border border-gray-800 rounded-2xl px-3 py-1 text-xs font-bold font-montserrat text-gray-800">SUPERHOST</span>`;
    }

    //camas con valor null
    let  typeHTML = "";
    if (beds !== null) {
        typeHTML = typeHTML = `<span class="text-xs sm:text-base font-montserrat text-gray-500">${type} . ${beds} beds</span>`;
    } else {
        typeHTML = `<span class="text-xs sm:text-base font-montserrat text-gray-500">${type}</span>`;
    }

    //cards para stays
    return `
        <div>
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
                        <span class="text-xs sm:text-base font-montserrat text-gray-800">${rating}</span>
                    </div>
                </div>
                <h3 class="font-semibold font-montserrat text-sm sm:text-base text-gray-800">
                    ${title}
                </h3>
            </div>
        </div>
    `;
}


