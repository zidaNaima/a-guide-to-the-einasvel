import { useState } from "react"

interface FullScreenImgProps {
    src: string,
    alt?: string,
    className?: string,
    text?: string
}

const FullScreenImg = ({ src, alt, className, text }: FullScreenImgProps) => {
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        console.log("open");
        setisOpen(!isOpen);
    }

    return (
        <>
            <img src={src} alt={alt} className={`${className} cursor-pointer`} onClick={handleClick} />

            {isOpen &&
                <div id="modal" className="fixed top-0 left-0 bg-shadow/50 w-full h-full content-center">
                    <div className="w-[92%] m-auto bg-shadow/60 p-6">
                        <button onClick={handleClick} className="w-full text-end text-red-500 text-3xl pb-2 cursor-pointer">&#10006;</button>
                        <img src={src} alt={alt} className="shadow-xl shadow-shadow/50 border border-shadow m-auto" />
                        {text && <p className="text-font text-lg mt-2 text-center p-2">{text}</p>}
                    </div>
                </div>
            }
        </>
    )
}

export default FullScreenImg