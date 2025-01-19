interface CardProps {
    imgUrl : string
    title : string
    link: string
}

export default function Card(props : CardProps) {

    return (
        <div className="px-4 py-6 w-1/2 md:w-1/4 xl:w-1/6 2xl:w-[12.5%] min-[2020px]:w-[215px]">
            <a href={props.link}>
                <img src={props.imgUrl} className="w-full rounded-3xl border-2 border-[#2f2f2f] hover:scale-125 transition-all duration-300 peer relative z-10" />
                <p className="text-xl font-semibold text-center hover:underline peer-hover:opacity-0 transition-opacity duration-200">{props.title}</p>
            </a>
        </div>
    );
}