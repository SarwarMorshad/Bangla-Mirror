import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import RightAside from "../components/Homelayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard/NewsDetailsCard";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const foundNews = newsData.find((item) => item.id == id);
    setNews(foundNews);
  }, [id, newsData]);

  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-6 mb-20 lg:mb-6">
        <section className="col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
