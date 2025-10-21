import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import NavBar from "../../components/NavBar/NavBar";
import LeftAside from "../../components/Homelayout/LeftAside";
import RightAside from "../../components/Homelayout/RightAside";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <header>
        <Header></Header>
        <section className="my-6">
          <LatestNews></LatestNews>
        </section>
        <section>
          <NavBar></NavBar>
        </section>
      </header>
      <main className="grid grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main-content col-span-6 ">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
