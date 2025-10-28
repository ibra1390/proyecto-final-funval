export function initModal() {
    let searchBar = document.querySelector("#searchBar");
    let closeModalBtn = document.querySelector("#closeModal");
    let modal = document.querySelector("#modal");

    //Open modal when clicking on search bar
    if (searchBar) {
        searchBar.addEventListener("click", (e) => {
            modal.classList.remove("hidden");
        });
    }

    //Close modal when clicking "X" button
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", (e) => {
            modal.classList.add("hidden");
        });
    }

    //Close modal when clicking outside it
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }
}
