import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredNews = data.filter((item) => item.category_id === parseInt(id));
        setNews(filteredNews);
      });
  }, [id]);

  return (
    <div>
      <h1>Category News - {id}</h1>
      {news.length > 0 ? (
        news.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <p>By: {item.author.name}</p>
            <p>Views: {item.total_view}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CategoryNews;
