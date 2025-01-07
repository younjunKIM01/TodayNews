import React from 'react';

const NewsCard = ({ title, content, image }) => (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

const Home = () => {
    const newsData = [
        { title: 'The Road Ahead', content: 'Exploring new horizons.', image: '/images/image1.jpg' },
        { title: 'From Top Down', content: 'A new perspective.', image: '/images/image2.jpg' },
        { title: 'Sunset Bliss', content: 'Capturing the beauty of nature.', image: '/images/image3.jpg' },
        // 추가 뉴스 데이터
    ];

    return (
        <div>
            <header className="header">
                <h1>Card News</h1>
                <p>Discover captivating stories through beautiful visual cards</p>
                <button className="cta-button">View More Posts</button>
            </header>
            <div className="news-container">
                <h2>Featured Posts</h2>
                <div className="featured-posts">
                    {newsData.map((news, index) => (
                        <NewsCard key={index} title={news.title} content={news.content} image={news.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;