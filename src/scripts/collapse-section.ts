window.addEventListener("DOMContentLoaded", () => {
    const collapse = document.querySelector("#collapse");
    const expand = document.querySelector("#expand");
    const toggles = document.querySelectorAll(".section-toggle");
    const ndash = "\u2013";

    if (collapse && expand && toggles) {
        collapse.addEventListener("click", () => {
            toggles.forEach((t) => {
                if (t && t.lastElementChild && t.nextElementSibling) {
                    t.lastElementChild.textContent = "+";
                    t.nextElementSibling.classList.add("hidden");
                }
            });
        });
        expand.addEventListener("click", () => {
            toggles.forEach((t) => {
                if (t && t.lastElementChild && t.nextElementSibling) {
                    t.lastElementChild.textContent = ndash;
                    t.nextElementSibling.classList.remove("hidden");
                }
            });
        });
        toggles.forEach((t) => {
            t.addEventListener("click", () => {
                if (t && t.lastElementChild && t.nextElementSibling) {
                    t.nextElementSibling.classList.toggle("hidden");
                    t.lastElementChild.textContent =
                        t.lastElementChild.textContent == "+" ? ndash : "+";
                }
            });
        });
    }
});