import React from 'react';
import Article from './Article';
const News = ({ news }) => (
  <div className="flex flex-wrap -mb-4 -mx-2">
    {news.map((article, index) => (
      <Article key={index} article={article} />
    ))}
  </div>
);

export default News;
