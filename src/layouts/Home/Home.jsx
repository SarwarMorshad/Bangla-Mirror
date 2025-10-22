import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import NavBar from "../../components/NavBar/NavBar";
import LeftAside from "../../components/Homelayout/LeftAside";
import RightAside from "../../components/Homelayout/RightAside";
import { FaBars, FaTimes, FaThList, FaShareAlt } from "react-icons/fa";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Close menu when route changes (when user clicks a category)
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <div className="w-11/12 mx-auto my-6">
      <header>
        <Header />
        <section className="my-6">
          <LatestNews />
        </section>
        <section>
          <NavBar />
        </section>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-base-100 border-t border-base-300 z-40 shadow-lg">
        <div className="flex justify-around items-center p-2">
          <button
            onClick={() => setShowMenu(showMenu === "categories" ? false : "categories")}
            className="flex flex-col items-center gap-1 p-2 hover:bg-base-200 rounded-lg flex-1"
          >
            <FaThList className="text-xl" />
            <span className="text-xs">Categories</span>
          </button>
          <button
            onClick={() => setShowMenu(showMenu === "social" ? false : "social")}
            className="flex flex-col items-center gap-1 p-2 hover:bg-base-200 rounded-lg flex-1"
          >
            <FaShareAlt className="text-xl" />
            <span className="text-xs">Social</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {showMenu && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="fixed bottom-0 left-0 right-0 bg-base-100 rounded-t-2xl max-h-[80vh] overflow-y-auto shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-base-100 z-10 p-4 border-b border-base-300">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">
                  {showMenu === "categories" ? "Categories" : "Find Us On"}
                </h2>
                <button onClick={() => setShowMenu(false)} className="btn btn-sm btn-circle btn-ghost">
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>
            <div className="p-4 pb-20">{showMenu === "categories" ? <LeftAside /> : <RightAside />}</div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-6 mb-20 lg:mb-6">
        {/* Left Aside - Desktop Only */}
        <aside className="hidden lg:block lg:col-span-3">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="col-span-1 lg:col-span-6">
          <Outlet />
        </section>

        {/* Right Aside - Desktop Only */}
        <aside className="hidden lg:block lg:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
