import React, { useEffect, useState } from "react";
import "../css/News.css";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20"
        );
        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p id="news">{""}</p>
      <div id="news" className="news">
        <ul>
          {news.map((item) => (
            <li key={item.id}>
              <div className="single-news">
                <h2 className="news-title">{item.title}</h2>
                <img className="news-img" src={item.imgURL} alt="news" />
                <p className="news-description">{item.description}</p>
                <div className="news-source">
                  <p>Source: {item.source}</p>
                  <Link className="news-link" to={item.link} target="_blank">
                    <button>
                      Read more... <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default News;
