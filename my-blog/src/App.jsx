import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ArticleListPage from "./pages/ArticleListPage";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
