import { useState } from "react";
import HotJupiterData from "./HotJupiterData";
import GasGiantOne from "./GasGiantOne";

interface planetSelectorProps {
    planet: string;
    size: string;
    position: string;
}

const SolarSystemDataHalf = () => {
    const [activePlanet, setActivePlanet] = useState("Hot Jupiter");


    const handleClick = (planet: string) => {
        setActivePlanet(planet);
    }

    const PlanetSelector = ({ planet, size, position }: planetSelectorProps) => {
        return (
            <button onClick={() => handleClick(planet)} className={`bg-red-100/50 absolute rounded-full cursor-pointer aspect-square ${size} ${position} ${activePlanet === planet && "border-3 border-font"}`} />
        )
    }

    return (
        <>
            {/* buttons that overlay solar system image to the left */}
            <div className="absolute aspect-square left-0 top-0 md:bottom-0 w-full md:w-[50%] md:my-auto bg-red-100/10">
                <PlanetSelector planet="Hot Jupiter" size="w-[6%]" position="left-[54.5%] mt-[57%] md:left-[57%] md:mt-[52%]" />
                <PlanetSelector planet="Gas Giant One" size="w-[13%]" position="left-[21%] mt-[68.5%] md:left-[23%] md:mt-[62%]" />
            </div>

            <div className="flex flex-col h-full">
                <div
                    className="font-serif text-4xl sm:text-7xl md:text-4xl lg:text-7xl uppercase mb-4 text-center"
                >
                    {activePlanet}
                </div>

                <div className="overflow-y-auto pr-4">
                    <section className="relative mb-4">
                        <img src="/solarSystemPlanets.png" alt="Twelve main planetary bodies of a solar system shown with various designs and sizes." className="w-full object-cover" />

                        <div className="absolute top-0 w-full">
                            <PlanetSelector planet="Hot Jupiter" size="w-[7%]" position="left-[20.5%] mt-[27%]" />
                            <PlanetSelector planet="Gas Giant One" size="w-[16%]" position="left-[55%] mt-[23%]" />
                        </div>
                    </section>

                    {activePlanet === "Hot Jupiter" && <HotJupiterData />}
                    {activePlanet === "Gas Giant One" && <GasGiantOne />}
                </div>
            </div>
        </>
    )
}

export default SolarSystemDataHalf