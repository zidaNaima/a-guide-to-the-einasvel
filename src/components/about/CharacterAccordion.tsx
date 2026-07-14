import { useEffect, type ReactElement } from "react";
import Carousel from "../Carousel";
import Tag from "../Tag";

interface CardProps {
    src: string,
    name: string,
    content: ReactElement,
    startsActive?: boolean
}

const CharacterCard = ({ src, name, content, startsActive }: CardProps) => {
    return (
        <div className={`acc-item ${startsActive && "active"}`}>
            <section className="acc-name">
                <img src={src} /><p>{name}</p>
            </section>
            <section className="acc-slide">
                <img src={src} className="acc-bg" />
                <div className="acc-content">
                    {content}
                </div>
            </section>
        </div>
    )
}

const CharacterAccordion = () => {
    let isAnimating = false;

    useEffect(() => {
        const accItems = document.querySelectorAll(".acc-item");
        accItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                if (isAnimating) return;
                isAnimating = true;
                for (let i = 0; i < accItems.length; i++) {
                    if (i !== index)
                        accItems[i].classList.remove("active");
                    else
                        accItems[i].classList.add("active");
                }
                // wait for length of animation duration
                setTimeout(function () {
                    isAnimating = false;
                }, 800);
            });
        });
    }, []);

    return (
        <div id="char-accordion">
            <CharacterCard src="/eleanor.png" name="Eleanor" content={
                <>
                    <div className="md:flex gap-3 justify-between">
                        <div className="sm:float-left sm:mr-4 md:mr-0 md:float-none self-center flex justify-center">
                            {/* TODO: update alt text */}
                            <Carousel uniqueId="c-eleanor" images={[
                                { "src": "/livingRoom.png", "alt": "TEMP" },
                                { "src": "/eleanor.png", "alt": "TEMP" },
                                { "src": "/kitchen.png", "alt": "TEMP" }
                            ]}
                            />
                        </div>
                        <div className="md:w-80">
                            <div className="mb-4">
                                <p><span className="font-bold">Name: </span>Eleanor Delia Balan</p>
                                <p><span className="font-bold">Birthday: </span>---</p>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold">Relationship to...</p>
                                <p><span className="font-bold">Maukkohd: </span>Daughter (Adopted)</p>
                                <p><span className="font-bold">Hubert: </span>Acquaintances</p>
                                <p><span className="font-bold">Tobias: </span>Acquaintances</p>
                            </div>

                            <p>
                                Character summary. It appears when you click
                                the header.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt? Lorem, ipsum dolor.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 md:w-120">
                            <p>
                                More detailed information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis, magni, adipisci consequuntur, corporis architecto dicta dolor aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio modi atque exercitationem?
                            </p>
                            <div className="flex flex-wrap gap-3 my-3.5">
                                <Tag content="Aries" color="red" />
                                <Tag content="ENFP-A" color="green" />
                                <Tag content="Dog Person" color="yellow" />
                                <Tag content="Bug Collector" color="teal" />
                            </div>
                            <p>
                                Meta: Id hic sed possimus vitae exercitationem cupiditate neque numquam autem nobis quos? Laudantium sunt placeat suscipit qui, ad soluta beatae veritatis eos, magni doloremque culpa reprehenderit! Odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sit.
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 pb-4 md:mt-2 md:w-280">
                        <p>
                            <span className="font-bold">Want to see more of her? </span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate voluptate suscipit, earum quo, quaerat rem totam laboriosam magni magnam exercitationem nihil corrupti error quis blanditiis commodi quasi iure velit quas temporibus harum deserunt asperiores alias.
                        </p>
                    </div>
                </>
            }
            />

            <CharacterCard startsActive src="/tobias.png" name="Tobias" content={
                <>
                    <Carousel uniqueId="c-tobias" images={[
                        { "src": "/tobias.png", "alt": "TEMP" },
                    ]}
                    />
                </>
            }
            />

        </div>
    )

}

export default CharacterAccordion