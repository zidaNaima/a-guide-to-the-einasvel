import { useEffect, Fragment } from "react";

interface CarouselProps {
    images: { src: string, alt: string }[],
    uniqueId: string
}

const Carousel = ({ images, uniqueId }: CarouselProps) => {
    useEffect(() => {
        // each carousel must be handled separately
        const carousel = document.querySelector("#" + uniqueId);
        const arrows = carousel?.querySelectorAll<HTMLButtonElement>("[data-carousel-button]");

        // data attribute is nice so you don't have to worry about class overlap
        arrows?.forEach(a => {
            a.addEventListener("click", () => {
                const offset = a.dataset.carouselButton == "next" ? 1 : -1;
                const slides = carousel?.querySelector("[data-slides]");
                const dots = carousel?.querySelectorAll(".dot");

                if (slides) {
                    const activeSlide = slides.querySelector<HTMLLIElement>("[data-active]");
                    if (activeSlide) {
                        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
                        if (newIndex < 0) newIndex = slides.children.length - 1; // loops from front to back
                        if (newIndex >= slides.children.length) newIndex = 0; // loops from back to front

                        // true must be a string in HTML5
                        (slides.children[newIndex] as HTMLElement)
                            .dataset.active = "true";
                        delete activeSlide.dataset.active;

                        dots?.forEach((dot, i) => {
                            dot.classList.toggle("active", i === newIndex);
                        });
                    }
                }
            });
        });

    }, []);

    return (
        <>
            <div id={uniqueId} className="carousel-section">
                <section className="carousel">

                    {images.length > 1 &&
                        <button className="carousel-arrow carousel-last" data-carousel-button="last">
                            <svg viewBox="-10 -5 30 30"><g transform="translate(-331.000000, -6519.000000)"><path d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"></path></g></svg>
                        </button>
                    }

                    <ul data-slides>
                        {images.map((i: { src: string, alt: string }, index: number) => (
                            <Fragment key={i.src}>
                                {index === 0 ?
                                    <li className="carousel-slide" data-active >
                                        <img src={i.src} alt={i.alt} />
                                    </li>
                                    :
                                    <li className="carousel-slide" >
                                        <img src={i.src} alt={i.alt} />
                                    </li>
                                }
                            </Fragment>
                        ))}
                    </ul>

                    {images.length > 1 &&
                        <button className="carousel-arrow carousel-next" data-carousel-button="next">
                            <svg viewBox="-10 -5 30 30"><g transform="translate(-367.000000, -6519.000000)"><path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519"></path></g></svg>
                        </button>
                    }

                </section>

                {images.length > 1 &&
                    <div className="dots">
                        {images.map((x: any, index: number) => (
                            <div key={index} className={`dot ${index === 0 && "active"}`} />
                        ))}
                    </div>
                }
            </div>
        </>
    )
}

export default Carousel