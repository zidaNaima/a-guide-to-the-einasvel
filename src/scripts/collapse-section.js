window.addEventListener("DOMContentLoaded", () => {
    const collapse = document.querySelector("#collapse");
    const expand = document.querySelector("#expand");
    const toggles = document.querySelectorAll(".section-toggle");
    const ndash = "\u2013";

    collapse.addEventListener("click", () => {
        toggles.forEach((t) => {
            t.lastElementChild.textContent = "+";
            t.nextElementSibling.classList.add("hidden");
        });
    });
    expand.addEventListener("click", () => {
        toggles.forEach((t) => {
            t.lastElementChild.textContent = ndash;
            t.nextElementSibling.classList.remove("hidden");
        });
    });
    toggles.forEach((t) => {
        t.addEventListener("click", () => {
            t.nextElementSibling.classList.toggle("hidden");
            t.lastElementChild.textContent =
                t.lastElementChild.textContent == "+" ? ndash : "+";
        });
    });
});