import { useParams } from "react-router-dom";
import { articles } from "../utils/article-content";
import NotFoundPage from "./NotFoundPage";

function Article() {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name == articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="w-5/12 mx-auto mt-3">
      <h1 className="text-2xl font-bold text-center capitalize">
        {article.title}
      </h1>
      <p className="mt-2">{article.content[0]}</p>
    </div>
  );
}

export default Article;
