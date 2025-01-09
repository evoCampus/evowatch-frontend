interface CardProps {
    imgUrl : string
    title : string
    link: string
}

export default function Card(props : CardProps) {

    return (
        <div>
            <a href={props.link}>
                <img src={props.imgUrl} className="w-56 h-72 rounded-3xl border-2 border-black" />
                <p className="text-xl font-semibold text-center hover:underline">{props.title}</p>
            </a>
        </div>
    );
}