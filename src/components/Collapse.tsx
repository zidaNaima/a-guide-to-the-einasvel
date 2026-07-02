interface CollapseProps {
    name: string;
}

const Collapse = ({ name }: CollapseProps) => {
    return (
        <div className="section-toggle cursor-pointer flex justify-between text-lg font-bold pb-2">
            <p>{name}</p>
            <p>&ndash;</p>
        </div>
    );
}

export default Collapse;