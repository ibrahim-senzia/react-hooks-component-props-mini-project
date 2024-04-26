import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList () {
  return (
    <main>
      {blogData.posts.map((article) =>{
        return (
          <Article
          title={article.title}
          date={article.date}
          preview={article.preview}
          key={article.id}
          />
        )
      })}
    </main>
  )
}

export default ArticleList;