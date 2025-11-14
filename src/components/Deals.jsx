import React from "react";
import "./Deals.css";

function Deals() {
  const products = [
    {
      name: "Mini Car",
      price: "$99",
      img: "https://cdn-icons-png.flaticon.com/512/2482/2482868.png",
    },
    {
      name: "Instax Mini 9",
      price: "$79",
      img: "https://cdn-icons-png.flaticon.com/512/1047/1047712.png",
    },
    {
      name: "toys",
      price: "$159",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048313.png",
    },
    {
      name: "Note pad",
      price: "$125",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
  ];

  return (
    <section className="deals">
      <h2>Today's Best Deals For You</h2>
      <div className="deal-grid">
        {products.map((p, index) => (
          <div key={index} className="deal-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deals;