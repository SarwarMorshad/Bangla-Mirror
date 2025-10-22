import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>
      <div className="grid grid-cols-1 mt-3 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-base-100 border-none hover:bg-base-200 justify-start font-semibold text-accent"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
