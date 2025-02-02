import Card from "./Card";
import CategoryTitle from "./CategoryTitle";

export default function MainPage() {
  return (
    <div className="p-5 flex flex-col gap-8">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="flex flex-col gap-8">
          <CategoryTitle title="Classics" />
          <div className="flex flex-wrap">
            {[...Array(15)].map((_, j) => (
              <Card
                key={j}
                title="Back to the Future"
                link=""
                imgUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiAUI52_-niASQabl_PqdkJQ-moVziM6ahfiYkZW9NSnhcciNw"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
