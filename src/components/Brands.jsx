import React from "react";
import "./Brands.css";

function Brands() {
  const brands = ["ADIDAS", "NIKE", "PUMA", "ROLEX", "MOLLIO", "SPORTS"];

  return (
    <section className="brands">
      <h2>Choose By Brand</h2>
      <div className="brand-grid">
        {brands.map((b, i) => (
          <div key={i} className="brand-card">
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;