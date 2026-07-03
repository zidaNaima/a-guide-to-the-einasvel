import type React from "react";

interface NavigationProps {
    pathname: string
}

const Navigation = ({ pathname }: NavigationProps) => {
    const routes = [
        {
            main: "Home",
            href: "/",
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
        },
        {
            main: "Galaxy",
            href: "/galaxy",
        },
        {
            main: "Organic Life",
            href: "/life",
        },
        {
            main: "Society",
            href: "/society",
            sections: [
                {
                    name: "Forms of Self Expression",
                    id: "self-expression",
                },
                {
                    name: "The Significance of Hair",
                    id: "hair",
                    isSub: true
                },
                {
                    name: "Body Language",
                    id: "body-language",
                    isSub: true
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
                },
                {
                    name: "Consonants",
                    id: "consonants",
                    isSub: true
                },
                {
                    name: "Vowels",
                    id: "vowels",
                    isSub: true
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
            sections: [
                {
                    name: "Contact",
                    id: "contact",
                }
            ]
        },
    ]

    return (
        <>
            <nav>
                <ul className="flex justify-center text-font-blue text-sm font-medium tracking-wide">
                    {
                        routes.map(r => (
                            <>
                                <li>
                                    <a href={r.href} className="main">{r.main}</a>
                                    {(pathname === r.href) &&
                                        <img
                                            style={{ viewTransitionName: `nav-pill` } as React.CSSProperties}
                                            src="./okshlidIcon.png" className="nav-pill"
                                        />
                                    }
                                    <ul>
                                        {r.sections &&
                                            r.sections.map(s => (
                                                <li><a href={`${r.href}#${s.id}`} className={`${s.isSub && "sub"}`}>{s.name}</a></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            </>
                        ))
                    }
                </ul >
            </nav >
        </>
    )
}

export default Navigation;