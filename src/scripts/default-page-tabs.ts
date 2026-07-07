import { navigate } from "astro:transitions/client";

window.addEventListener("load", () => {
    // declare initial default page routes only on the first load
    sessionStorage.setItem("aboutPgTab", "/about/naima");
    sessionStorage.setItem("lifePgTab", "/organic-life/animals");
    sessionStorage.setItem("galaxyPgTab", "/galaxy/mk'mih'oh");
}, { once: true });

document.addEventListener("astro:before-preparation", (event) => {
    const targetPath = event.to.pathname;

    switch (true) {
        case (targetPath === "/about"): {
            // prevent navigation to the targetPath
            event.preventDefault();
            // switch to saved entry page or default entry page
            const newPath =
                sessionStorage.getItem("aboutPgTab") || "/about/naima";
            navigate(newPath);
        }
            break;

        case (targetPath.startsWith("/about/")):
            // save current path (excluding specific section)
            sessionStorage.setItem("aboutPgTab", targetPath.split("#")[0]);
            break;

        case (targetPath === "/organic-life"): {
            event.preventDefault();
            const newPath =
                sessionStorage.getItem("lifePgTab") || "/organic-life/animals";
            navigate(newPath);
        }
            break;

        case (targetPath.startsWith("/organic-life/")):
            // save current path
            sessionStorage.setItem("lifePgTab", targetPath.split("#")[0]);
            break;

        case (targetPath === "/galaxy"):
            event.preventDefault();
            const newPath =
                sessionStorage.getItem("galaxyPgTab") || "/galaxy/mk'mih'oh";
            navigate(newPath);
            break;

        case (targetPath.startsWith("/galaxy/")):
            // save current path
            sessionStorage.setItem("galaxyPgTab", targetPath.split("#")[0]);
            break;


        default:
            break;
    }

});