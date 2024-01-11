import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

function Article() {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useUser();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/articles/${name}`);
      setArticle(res.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p className="text-xl">Loading...</p>;
  }

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="w-5/12 mx-auto mt-3">
      <h1 className="text-2xl font-bold text-center capitalize">
        Article upvotes: {article.upvotes}
      </h1>
      {/* <p className="mt-2">{article.content[0]}</p> */}
    </div>
  );
}

export default Article;
