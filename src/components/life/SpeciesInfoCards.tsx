import FullScreenImg from "../FullScreenImg";

interface BuildCardProps {
    src?: string,
    alt?: string,
    size?: string,
    weight?: string,
    lifespan?: string,
    habitat?: string
}

export const SpeciesBuildCard = ({ src, alt, size, weight, lifespan, habitat }: BuildCardProps) => {
    return (
        <>
            <div
                className="flex lg:block w-full lg:w-60 float-left text-sm bg-light-gray border border-font-secondary md:mr-6 mb-2"
            >
                <img src={src} alt={alt} className="h-40 lg:h-fit" />
                <div className="p-3">
                    {size && <p><span className="font-bold">Size: </span>{size}</p>}
                    {weight && <p><span className="font-bold">Weight: </span>{weight}</p>}
                    {lifespan && <p><span className="font-bold">Lifespan: </span>{lifespan}</p>}
                    {habitat && <p><span className="font-bold">Habitat: </span>{habitat}</p>}
                </div>
            </div>
        </>
    );
}

interface MapCardProps {
    src: string,
    alt: string,
    text?: any,
}

export const SpeciesMapCard = ({ src, alt, text }: MapCardProps) => {
    return (
        <>
            <div
                className="w-full md:w-80 float-right text-sm bg-light-gray border border-font-secondary p-3 md:ml-6 mb-2"
            >
                <div className="flex flex-col">
                    <FullScreenImg src={src} alt={alt} className="rounded-[100%] w-full max-w-75 m-auto aspect-[2/1]" />
                    <p className="text-center text-xs">Click to view in full screen</p>
                </div>
                <div className="pt-2">{text}</div>
            </div>
        </>
    );
}