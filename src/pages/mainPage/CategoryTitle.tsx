interface CategoryTitleProps {
    title : string;
}

export default function CategoryTitle(props : CategoryTitleProps) {
    return (
        <div className="p-2 border-b-2 text-5xl">{props.title}</div>
    );
}