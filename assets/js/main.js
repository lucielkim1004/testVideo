document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
    const cards = Array.from(document.querySelectorAll(".card"));
    const copyrightYear = document.getElementById("copyright-year");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear().toString();
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter;
            updateActiveButton(button);
            filterCards(selectedFilter);
        });
    });

    function updateActiveButton(activeButton) {
        filterButtons.forEach((button) => {
            const isActive = button === activeButton;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive.toString());
        });
    }

    function filterCards(filter) {
        cards.forEach((card) => {
            const isVisible = filter === "all" || card.dataset.type === filter;
            card.style.display = isVisible ? "flex" : "none";
        });
    }
});
