interface CardProps {
    imgUrl : string
    title : string
    link: string
}

export default function Card(props : CardProps) {

    return (
        <div className="w-36 xl:w-48">
            <a href={props.link}>
                <img src={props.imgUrl} className="w-full rounded-3xl border-2 border-black" />
                <p className="text-xl font-semibold text-center hover:underline">{props.title}</p>
            </a>
        </div>
    );
}