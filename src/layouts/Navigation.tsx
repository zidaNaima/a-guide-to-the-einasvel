import type React from "react";

interface NavigationProps {
    pathname: string
}

const Navigation = ({ pathname }: NavigationProps) => {
    const routes = [
        {
            main: "Home",
            href: "/",
            pages: [
                {
                    name: "Home",
                    path: "",
                    sections: [
                        {
                            name: "Site Summary",
                            id: "site-summary",
                        },
                        {
                            name: "Gallery",
                            id: "gallery"
                        }
                    ]
                }
            ]
        },
        {
            main: "Galaxy",
            href: "/galaxy",
        },
        {
            main: "Organic Life",
            href: "/organic-life",
            sections: [
                {
                    name: "Phylogenetic Tree",
                    id: "phylogenetic",
                },
                {
                    name: "Full Species List",
                    id: "species-list",
                },
            ]
        },
        {
            main: "Society",
            href: "/society",
            sections: [
                {
                    name: "Forms of Self Expression",
                    id: "self-expression",
                }
            ]
        },
        {
            main: "Language",
            href: "/language",
            sections: [
                {
                    name: "Phonology",
                    id: "phonology",
                }
            ]
        },
        {
            main: "Stories",
            href: "/stories",
        },
        {
            main: "About Me",
            href: "/about",
            pages: [
                {
                    name: "Naima",
                    path: "/naima",
                    sections: [
                        {
                            name: "About the Creator",
                            id: "about-the-creator",
                        }
                    ]
                },
                {
                    name: "Contact Me",
                    path: "/contact-me",
                }
            ]
        },
    ]

    const toggleNav = () => {
        const nav = document.querySelector("nav");
        nav?.classList.toggle("hidden");
    }

    const toggleSub = (ulId: string, btnId: string) => {
        const subList = document.querySelectorAll(".sub-nav");
        subList.forEach((s) => { s.id !== ulId && s.classList.remove("!block") });
        const ul = document.querySelector(`#${ulId}`);
        ul?.classList.toggle("!block");

        const btnList = document.querySelectorAll(".nav-btn");
        btnList.forEach((btn) => btn.id !== btnId && (btn.textContent = "\u203A"));
        const btn = document.querySelector(`#${btnId}`);
        btn && (btn.textContent = (btn?.textContent == "\u203A" ? "\u2039" : "\u203A"));
    }

    return (
        <>
            <div id="ham" className="md:hidden cursor-pointer w-20 h-13 pt-1.25" onClick={toggleNav}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height={40} className="ml-6"><path d="M4 18L20 18" stroke="var(--color-font-secondary)" strokeWidth="2" strokeLinecap="round"></path><path d="M4 12L20 12" stroke="var(--color-font-secondary)" strokeWidth="2" strokeLinecap="round"></path><path d="M4 6L20 6" stroke="var(--color-font-secondary)" strokeWidth="2" strokeLinecap="round"></path></svg>
            </div>

            <nav className="hidden md:block">
                <ul className="flex justify-center text-font-blue text-sm sm:text-base font-medium tracking-wide">
                    {
                        routes.map(r => (
                            <div key={r.href}>
                                <li>
                                    {/* ham nav expansion */}
                                    <div className="flex justify-between">
                                        <a href={r.href} className="main">{r.main}</a>
                                        <button
                                            id={r.href.replace("/", "btn-")}
                                            className="nav-btn pr-4 sm:px-6 -my-2 md:hidden cursor-pointer text-xl"
                                            onClick={() => toggleSub(r.main.replace(" ", "-"), r.href.replace("/", "btn-"))}
                                        >
                                            &rsaquo;
                                        </button>
                                    </div>

                                    {/* nav pill */}
                                    {(pathname === r.href.split("/")[1]) &&
                                        <img
                                            style={{ viewTransitionName: `nav-pill` } as React.CSSProperties}
                                            src="/okshlidIcon.png" className="nav-pill"
                                        />
                                    }

                                    <ul id={`${r.main.replace(" ", "-")}`}>
                                        {r.pages &&
                                            r.pages.map(p => (
                                                <li key={p.name} className="md:mt-2">
                                                    {p.name !== "Home" &&
                                                        <a href={`${r.href}${p.path}`}>{p.name}</a>
                                                    }

                                                    {p.sections && p.sections.map(s => (
                                                        <a key={s.name} href={`${r.href}${p.path}#${s.id}`} className="sub">{s.name}</a>
                                                    ))}
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </li>
                            </div>
                        ))
                    }
                </ul >
            </nav >
        </>
    )
}

export default Navigation;