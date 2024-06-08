import ArticleCard from "./ArticleCard";
import { ARTICLES } from "@/app/constants";

export default function ArticleSection() {
  return (
    <section>
      <div>
        {ARTICLES.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
