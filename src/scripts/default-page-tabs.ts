import { navigate } from "astro:transitions/client";

window.addEventListener("load", () => {
    // declare initial default page routes only on the first load
    sessionStorage.setItem("aboutPgTab", "/about/naima");
    sessionStorage.setItem("lifePgTab", "/organic-life/animals");
    sessionStorage.setItem("galaxyPgTab", "/galaxy/mk'mih'oh");
    sessionStorage.setItem("langPgTab", "/language/naunohhloh");
    sessionStorage.setItem("societyPgTab", "/society/enausq'hl");
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
            sessionStorage.setItem("lifePgTab", targetPath.split("#")[0]);
            break;

        case (targetPath === "/galaxy"): {
            event.preventDefault();
            const newPath =
                sessionStorage.getItem("galaxyPgTab") || "/galaxy/mk'mih'oh";
            navigate(newPath);
        }
            break;

        case (targetPath.startsWith("/galaxy/")):
            sessionStorage.setItem("galaxyPgTab", targetPath.split("#")[0]);
            break;

        case (targetPath === "/language"): {
            event.preventDefault();
            const newPath =
                sessionStorage.getItem("langPgTab") || "/language/naunohhloh";
            navigate(newPath);
        }
            break;

        case (targetPath.startsWith("/language/")):
            sessionStorage.setItem("langPgTab", targetPath.split("#")[0]);
            break;

        case (targetPath === "/society"): {
            event.preventDefault();
            const newPath =
                sessionStorage.getItem("societyPgTab") || "/society/enausq'hl";
            navigate(newPath);
        }
            break;

        case (targetPath.startsWith("/society/")):
            sessionStorage.setItem("societyPgTab", targetPath.split("#")[0]);
            break;

        default:
            break;
    }

});