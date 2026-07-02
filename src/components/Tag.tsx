type TagProps = {
    content: any;
    color?: string;
}

const Tag = ({ content, color }: TagProps) => {
    let style = "bg-[#EFBD81] text-[#67320B] border-[#67320B]";

    if (color == "red" || content == "About Me") {
        style = "bg-[#F5B7A6] text-[#67320B] border-[#67320B]";
    } else if (color == "green" || content == "Organic Life") {
        style = "bg-[#E9F6DF] text-[#39601A] border-[#39601A]";
    } else if (color == "blue" || content == "Galaxy") {
        style = "bg-[#8DD1F0] text-[#3C3E79] border-[#3C3E79]";
    } else if (color == "teal" || content == "Society") {
        style = "bg-[#BFE9E9] text-font-blue border-font-blue";
    } else if (color == "yellow" || content == "Stories") {
        style = "bg-[#FAE67A] text-[#67320B] border-[#67320B]";
    } else if (color == "gray" || content == "Gallery Only") {
        style = "bg-light-gray text-font-secondary border-font-secondary";
    }

    return (
        <div className={`text-sm text-center px-2 py-0.75 rounded-[8px] border-1 tracking-wide ${style}`}>{content}</div>
    )
}

export default Tag