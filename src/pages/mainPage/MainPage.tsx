import Card from "./Card";
import CategoryTitle from "./CategoryTitle";

export default function MainPage() {
    return (
        <div className="p-5 flex flex-col gap-8">
            <CategoryTitle title="Classics" />
            <div className="flex flex-wrap gap-4">
                <Card title="Back to the Future" link="" imgUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiAUI52_-niASQabl_PqdkJQ-moVziM6ahfiYkZW9NSnhcciNw" />
                <Card title="Back to the Future" link="" imgUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiAUI52_-niASQabl_PqdkJQ-moVziM6ahfiYkZW9NSnhcciNw" />
                <Card title="Back to the Future" link="" imgUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiAUI52_-niASQabl_PqdkJQ-moVziM6ahfiYkZW9NSnhcciNw" />
            </div>
        </div>
    );
}