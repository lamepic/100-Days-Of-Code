import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => {
        return (
          <Link
            to={`/articles/${article.name}`}
            key={article.name}
            className="capitalize"
          >
            <h3 className="text-xl">{article.title}</h3>
            <p className="text-sm text-gray-500">
              {article.content[0].substring(0, 50)}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export default ArticleList;
