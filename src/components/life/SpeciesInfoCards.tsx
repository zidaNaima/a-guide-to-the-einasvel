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
                className="md:flex-1 flex w-full md:block h-fit lg:w-60 float-left text-sm bg-light-gray border border-font-secondary md:mr-6 mb-2"
            >
                <img src={src} alt={alt} className="m-auto h-40 lg:h-fit" />
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
    text?: string,
}

export const SpeciesMapCard = ({ src, alt, text }: MapCardProps) => {
    return (
        <>
            <div
                className="md:flex-1 w-full lg:w-80 float-right text-sm bg-light-gray border border-font-secondary p-3 lg:ml-6 mb-2"
            >
                <div className="flex flex-col">
                    <FullScreenImg src={src} alt={alt} className="rounded-full h-full max-h-30 w-fit m-auto" />
                    <p className="text-center text-xs">Click to view in full screen</p>
                </div>
                <div className="pt-2">{text}</div>
            </div>
        </>
    );
}