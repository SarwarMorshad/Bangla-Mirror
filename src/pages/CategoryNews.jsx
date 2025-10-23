import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {
  // const newsData = useLoaderData();
  // console.log(newsData);
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        if (id == "0") {
          setNews(data);
          return;
        } else if (id == "1") {
          const filteredNews = data.filter((news) => news.others.is_today_pick == true);
          setNews(filteredNews);
        } else {
          const filteredNews = data.filter((item) => item.category_id == id);
          setNews(filteredNews);
        }
      });
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">News Found- {news.length}</h1>
      <div className="grid grid-cols-1 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
