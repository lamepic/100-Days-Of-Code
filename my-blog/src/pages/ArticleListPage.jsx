import ArticlesList from "../components/ArticlesList";
import { articles } from "../utils/article-content";

function ArticleListPage() {
  return (
    <div className="w-5/12 mx-auto mt-3">
      <h1 className="text-3xl font-bold">Articles</h1>
      <div className="mt-5">
        <ArticlesList articles={articles} />
      </div>
    </div>
  );
}

export default ArticleListPage;
