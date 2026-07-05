import { useState, useEffect } from "react";
import PHYLO_DATA from "../../content/PHYLO_DATA.json";

const Node = ({ node }: { node: any }) => {
    return (
        <li>
            <div className="phylo-item">
                {node.href ?
                    <>
                        <img src={node.src} />
                        <div className={`${node.children && "phylo-fill"}`}><a href={`life${node.href}`}><p>{node.name}</p></a><span></span></div>
                    </>
                    :
                    <>
                        <span className="phylo-extension"></span>
                        <div className={`${node.children && "phylo-fill"}`}><p>{node.name}</p><span></span></div>
                    </>
                }

                {node.children &&
                    <ul>
                        {node.children.map((child: any, i: number) => <Node key={i} node={child} />)}
                    </ul>
                }
            </div>
        </li>
    );
}

const Phylogenetic = () => {
    const [isMd, setIsMd] = useState(window.innerWidth > 768);

    const handleResize = () => {
        setIsMd(window.innerWidth > 768);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <>
            {isMd &&
                <div className="phylo-wrapper underline-link link-on-dark">
                    <div className="phylo text-sm">
                        <ul>
                            <Node node={PHYLO_DATA[0]} />
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default Phylogenetic;