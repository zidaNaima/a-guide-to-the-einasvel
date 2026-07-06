import { navigate } from "astro:transitions/client";

document.addEventListener("astro:before-preparation", (event) => {
    const targetPath = event.to.pathname;

    switch (true) {
        case (targetPath === "/about"):
            // let the event loop clear fully
            event.preventDefault();
            setTimeout(() => navigate(newPath), 0);

            // switch to saved entry page or default entry page
            const newPath =
                sessionStorage.getItem("aboutPageTab") || "/about/naima";
            navigate(newPath);
            break;

        case (targetPath.startsWith("/about/")):
            // save current path
            sessionStorage.setItem("aboutPageTab", targetPath.split("#")[0]);
            break;

        default:
            break;
    }

});