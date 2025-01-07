// pages/news.js
import React from 'react';

const NewsCard = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const News = () => {
  const newsData = [
    { title: '뉴스 제목 1', content: '뉴스 내용 1' },
    { title: '뉴스 제목 2', content: '뉴스 내용 2' },
    // 추가 뉴스 데이터
  ];

  return (
    <div>
      <h1>카드뉴스</h1>
      <div className="news-container">
        {newsData.map((news, index) => (
          <NewsCard key={index} title={news.title} content={news.content} />
        ))}
      </div>
      <style jsx>{`
        .news-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default News;