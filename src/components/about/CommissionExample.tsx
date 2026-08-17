import { useState } from "react";
import FullScreenImg from "../FullScreenImg";

const CommissionOptions = [
    {
        name: "Lineart",
        price: "$60",
        src: "/satyrLine.png",
    },
    {
        name: "Solids",
        price: "$75",
        src: "/satyrSolid.png",
    },
    {
        name: "Rendered",
        price: "$95",
        src: "/satyrRender.png",
    }
]

const CommissionExample = () => {
    const [src, setSrc] = useState(CommissionOptions[1].src);
    const [name, setName] = useState(CommissionOptions[1].name);

    const handleClick = (opt: any) => {
        setSrc(opt.src);
        setName(opt.name);
    }

    return (
        <>
            <section className="flex flex-col w-full sm:flex-row md:flex-col gap-4 md:w-min">
                <div className="w-full bg-off-white rounded-[8px] border border-font-secondary p-4">
                    <p>
                        Drawings, Short Animations, Backgrounds, Sketches. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className="flex justify-center gap-8 mt-3">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 23 20" fill="#80CB46" stroke="#39601A" strokeWidth={0.5}>
                                <path d="M21.88,0.57c-0.206,-0.343 -0.651,-0.454 -0.994,-0.248c-0.089,0.053 -0.17,0.113 -0.249,0.174 
                                    c-0.365,0.272 -0.747,0.711 -1.055,1.041c-2.703,2.917 -5.153,6.095 -7.172,9.536 
                                    c-0.201,0.334 -0.41,0.701 -0.578,1.053c-0.162,0.332 -0.335,0.699 -0.489,1.038 
                                    c-1.063,-1.945 -2.739,-4.081 -4.724,-4.951c-0.794,-0.328 -1.579,0.507 -1.186,1.282 
                                    c0.117,0.228 0.253,0.442 0.389,0.657c0.664,1.046 1.445,2.002 2.135,3.025 
                                    c0.876,1.282 1.613,2.64 2.326,4.018c0.491,0.929 1.881,0.79 2.173,-0.229 
                                    c0.491,-1.035 0.997,-2.059 1.538,-3.067c0.173,-0.327 0.372,-0.675 0.538,-1.005 
                                    c0.161,-0.324 0.343,-0.698 0.511,-1.02c1.392,-2.726 3.063,-5.297 4.868,-7.776 
                                    c0.306,-0.418 0.724,-0.983 1.037,-1.396c0.199,-0.267 0.518,-0.661 0.689,-0.938 
                                    c0.106,-0.167 0.206,-0.338 0.283,-0.524C22.01,1.02 22.0,0.78 21.88,0.57z" />
                            </svg>
                            <p>Offers</p>
                        </div>
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 23 20" fill="#80CB46" stroke="#39601A" strokeWidth={0.5}>
                                <path d="M21.88,0.57c-0.206,-0.343 -0.651,-0.454 -0.994,-0.248c-0.089,0.053 -0.17,0.113 -0.249,0.174 
                                    c-0.365,0.272 -0.747,0.711 -1.055,1.041c-2.703,2.917 -5.153,6.095 -7.172,9.536 
                                    c-0.201,0.334 -0.41,0.701 -0.578,1.053c-0.162,0.332 -0.335,0.699 -0.489,1.038 
                                    c-1.063,-1.945 -2.739,-4.081 -4.724,-4.951c-0.794,-0.328 -1.579,0.507 -1.186,1.282 
                                    c0.117,0.228 0.253,0.442 0.389,0.657c0.664,1.046 1.445,2.002 2.135,3.025 
                                    c0.876,1.282 1.613,2.64 2.326,4.018c0.491,0.929 1.881,0.79 2.173,-0.229 
                                    c0.491,-1.035 0.997,-2.059 1.538,-3.067c0.173,-0.327 0.372,-0.675 0.538,-1.005 
                                    c0.161,-0.324 0.343,-0.698 0.511,-1.02c1.392,-2.726 3.063,-5.297 4.868,-7.776 
                                    c0.306,-0.418 0.724,-0.983 1.037,-1.396c0.199,-0.267 0.518,-0.661 0.689,-0.938 
                                    c0.106,-0.167 0.206,-0.338 0.283,-0.524C22.01,1.02 22.0,0.78 21.88,0.57z" />
                            </svg>
                            <p>Trades</p>
                        </div>
                    </div>
                </div>

                <section className="flex flex-col gap-2">
                    <p className="text-font">Click to see an example</p>

                    {CommissionOptions.map((o) => (
                        <button key={o.name} className="h-12 w-70.5 sm:w-80 md:w-90 bg-off-white border border-font-secondary rounded-full overflow-hidden relative" onClick={() => { handleClick(o) }} >
                            <img
                                key={o.src}
                                src={o.src}
                                className="absolute top-0 -mt-20 size-40 object-cover cursor-pointer z-0"
                            />

                            <div className={`flex justify-end p-2 absolute top-0 right-0 h-full border ${o.name === name ? "w-70 gap-12 bg-[#E9F6DF] border-2 border-[#80CB46]" : "w-60 gap-6 bg-off-white border-font-secondary"} items-center rounded-full transition-all z-1`}>
                                <div className="text-lg">
                                    <p>{o.name} &bull; <span className="font-bold">{o.price}</span></p>
                                </div>

                                <div className="size-9 bg-light-gray border border-font-secondary rounded-full flex justify-center items-center">
                                    {o.name === name && <div className="size-6 bg-[#80CB46] rounded-full" />}
                                </div>
                            </div>
                        </button>
                    ))}

                    <p className="text-font text-xs font-light">
                        Prices are based on estimations and are subject to change.
                        <br />
                        Please message me for more detailed information.
                    </p>
                </section>
            </section>

            {/* xl:mb-27 accounts for small image heights */}
            <div className="flex-1 w-full h-full max-h-120.25 flex flex-col gap-4 xl:mb-27">
                <img src={src} alt={`${name} drawing of a fantastical satyr-like creature in a forest with another small creature by its side.`} className="min-w-0 w-full min-h-full flex-1 object-cover rounded-[8px] border border-font-secondary" />

                <div className="m-auto">
                    <div className="flex flex-row justify-center gap-2 mb-2">
                        {name === CommissionOptions[0].name &&
                            <>
                                <FullScreenImg src="/leoDeath.png" alt="DnD fight scene showing a Harengon Rogue in a defensive pose across from an armored Warrior Goddess with a sword." className="size-20 object-cover rounded-[8px] border border-font-secondary" />
                            </>
                        }

                        {name === CommissionOptions[1].name &&
                            <>
                                <FullScreenImg src="/ehlAngry.png" alt="Angry Oele'in (Ehlaunoh) snarling up at the camera with a hand behind its ear." className="size-20 object-cover rounded-[8px] border border-font-secondary" />
                            </>
                        }

                        {name === CommissionOptions[2].name &&
                            <>
                                <FullScreenImg src="/illith.png" alt="Old male Dwarf (DnD) in ragged clothes with a wand in his belt." className="size-20 object-cover rounded-[8px] border border-font-secondary" />
                                <FullScreenImg src="/eliRender.png" alt="Mermaid with a driftwood bow and sailfish-skull arrow aims at an off-screen target. Echetteria belongs to @0relli on Instagram, @bagagec on ArtFight." className="size-20 object-cover rounded-[8px] border border-font-secondary" />
                                <FullScreenImg src="/entropy.gif" alt="Anthropomorphic Valais Blacknose (Left) and colorful scene-core Bat (Right) taking a selfie with silly expressions. Entropy (Right) belongs to @Valkyrie_Victorious on ArtFight." className="size-20 object-cover rounded-[8px] border border-font-secondary" />
                            </>
                        }
                    </div>

                    <p className="text-center text-font text-sm">Click to view in full screen</p>
                </div>
            </div>
        </>
    );
}

export default CommissionExample