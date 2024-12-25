interface CardProps {
    imgUrl : string
    title : string
}

export default function Card(props : CardProps) {

    return (
        <div>
            <img src={props.imgUrl} className="w-56 h-72 rounded-3xl border-2 border-black" />
            <p className="text-xl font-semibold">{props.title}</p>
        </div>
    );
}