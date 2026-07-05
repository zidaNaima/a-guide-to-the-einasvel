import PHYLO_DATA from "../../content/PHYLO_DATA.json";

const flatten = (node: any): any[] => {
    const result = [{ name: node.name, href: node.href, src: node.src }];

    if (node.children) {
        for (const child of node.children) {
            result.push(...flatten(child));
        }
    }

    return result;
};

const SpeciesList = () => {
    const species = flatten(PHYLO_DATA[0]);
    species.sort((s1, s2) => s1.name.localeCompare(s2.name));

    return (
        <>
            <div className="species-list underline-link link-on-dark text-sm">
                <ul>
                    {species.map(s => (
                        s.href &&
                        <>
                            <li key={s.src}>
                                <div className="species-list-item">
                                    <img src={s.src} />
                                    <div className={`${s.children && "phylo-fill"}`}><a href={`life${s.href}`}><p>{s.name}</p></a><span></span></div>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SpeciesList;