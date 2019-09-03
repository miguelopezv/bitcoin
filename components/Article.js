import React from 'react';

const Article = ({ article }) => {
  const { urlToImage, url, title, description, source } = article;
  return (
    <div className="w-1/2 px-2 mb-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {urlToImage ? (
          <img className="w-full" src={urlToImage} alt={title} />
        ) : null}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {source.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Article;
