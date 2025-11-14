import React from "react";
import "./Categories.css";

function Categories() {
  const items = [
    { name: "Furniture", emoji: "🪑" },
    { name: "Hand Bag", emoji: "👜" },
    { name: "Books", emoji: "📚" },
    { name: "Tech", emoji: "💻" },
    { name: "Sneakers", emoji: "👟" },
    { name: "Travel", emoji: "🧳" },
  ];

  return (
    <section className="categories">
      <h2>Shop Our Top Categories</h2>
      <div className="cat-grid">
        {items.map((item, index) => (
          <div key={index} className="cat-card">
            <span>{item.emoji}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;