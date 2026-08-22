type TagProps = {
    content: any;
    color?: string;
    className?: string;
}

const Tag = ({ content, color, className }: TagProps) => {
    let style = "bg-tag-orange-bg text-tag-orange-text border-tag-orange-text";

    if (color == "red" || content == "About Me") {
        style = "bg-tag-red-bg text-tag-red-text border-tag-red-text";
    } else if (color == "green" || content == "Organic Life") {
        style = "bg-tag-green-bg text-tag-green-text border-tag-green-text";
    } else if (color == "blue" || content == "Galaxy") {
        style = "bg-tag-blue-bg text-tag-blue-text border-tag-blue-text";
    } else if (color == "teal" || content == "Society") {
        style = "bg-tag-teal-bg text-tag-teal-text border-tag-teal-text";
    } else if (color == "yellow" || content == "Stories") {
        style = "bg-tag-yellow-bg text-tag-yellow-text border-tag-yellow-text";
    } else if (color == "gray" || content == "Gallery Only") {
        style = "bg-light-gray text-font-secondary border-font-secondary";
    }

    return (
        <div className={`${className} ${style} text-sm text-center px-2 py-0.75 rounded-[8px] border-1 tracking-wide`}>{content}</div>
    )
}

export default Tag