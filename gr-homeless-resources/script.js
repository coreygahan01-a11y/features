const searchInput = document.getElementById("search-input");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const cards = Array.from(document.querySelectorAll(".card"));
const resultsStatus = document.getElementById("results-status");
const emptyState = document.getElementById("empty-state");
const resetButton = document.getElementById("reset-filters");

let activeCategory = "all";

function updateDirectory() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of cards) {
    const category = card.dataset.category || "";
    const keywords = card.dataset.keywords || "";
    const text = card.textContent.toLowerCase();

    const matchesCategory = activeCategory === "all" || category === activeCategory;
    const matchesQuery = !query || text.includes(query) || keywords.includes(query);
    const shouldShow = matchesCategory && matchesQuery;

    card.hidden = !shouldShow;
    if (shouldShow) {
      visibleCount += 1;
    }
  }

  const noun = visibleCount === 1 ? "resource" : "resources";
  resultsStatus.textContent = `Showing ${visibleCount} ${noun}.`;
  emptyState.hidden = visibleCount > 0;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category || "all";

    for (const btn of filterButtons) {
      const isSelected = btn === button;
      btn.classList.toggle("active", isSelected);
      btn.setAttribute("aria-pressed", String(isSelected));
    }

    updateDirectory();
  });
}

searchInput.addEventListener("input", updateDirectory);

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";

  for (const btn of filterButtons) {
    const isAll = btn.dataset.category === "all";
    btn.classList.toggle("active", isAll);
    btn.setAttribute("aria-pressed", String(isAll));
  }

  updateDirectory();
  searchInput.focus();
});

updateDirectory();
