import { useState } from "react";
import Tag from "./Tag";

const SiteSummary = () => {
    const pages = [
        {
            page: "Galaxy",
            desc: "Learn information on the climate and orbit of Mk'mih'oh.",
            link: "/galaxy",
            src: "../../public/map.png"
        },
        {
            page: "Organic Life",
            desc: "Learn about the plants and animals that live on the planet Mk'mih'oh.",
            link: "/life",
            src: "../../public/waterEater.png"
        },
        {
            page: "Society",
            desc: "Learn about the Einasvel culture and the makeup of their anatomy. Read about beliefs, clothing, and hunting practices.",
            link: "/society",
            src: "../../public/fight.png"
        },
        {
            page: "Language",
            desc: "Learn about the Naunoh/hl/oh language, listen to its sounds, and translate your own sentences.",
            link: "/language",
            src: "../../public/numbers.png"
        },
        {
            page: "Stories",
            desc: "Read about how two cultures colide whrn an Oele'in is stranded far from home, or about how stars can't always be seen from the ground.",
            link: "/stories",
            src: "../../public/comic.png"
        },
        {
            page: "About Me",
            desc: "Learn more about me and my projects outside of this one! See how I take characters from this world and humanize them.",
            link: "/about",
            src: "../../public/livingRoom.png"
        }
    ]

    const [page, setPage] = useState(pages[0].page);
    const [desc, setDesc] = useState(pages[0].desc);
    const [link, setLink] = useState(pages[0].link);

    const handleClick = (img: any) => {
        setPage(img.page);
        setDesc(img.desc);
        setLink(img.link);
    }

    return (
        <div>
            <section className="grid grid-cols-3 md:flex md:h-40 lg:h-80 gap-4">
                {
                    pages.map((p) => (
                        <div key={p.page} className="flex-1 cursor-pointer shadow-md shadow-shadow hover:font-semibold" onClick={() => { handleClick(p) }}>
                            <img
                                src={p.src}
                                className="w-full h-32 lg:h-68 object-cover"
                            />
                            <p className="h-8 lg:h-12 content-center w-full text-center bg-off-white text-sm tracking-wide">{p.page}</p>
                        </div>
                    ))
                }
            </section>

            <section className="bg-off-white py-2 px-4 flex flex-col mt-10 mb-20 rounded-[8px]">
                <div>
                    <p className="text-xl font-bold">{page}</p>
                    <p className="mb-2">{desc}</p>
                </div>

                <div className="w-full flex justify-end">
                    <Tag content={<a href={link}>Go To Page &rarr;</a>} />
                </div>
            </section>
        </div>
    );
}

export default SiteSummary;