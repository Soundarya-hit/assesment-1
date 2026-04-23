import React from "react";

const HomePage = () => {
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ];

  const products = new Array(6).fill({
    name: "Product Name",
    seller: "Seller Name",
    image: "https://via.placeholder.com/50"
  });

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="logo">Logo</div>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Jobs</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <h2>Search Products...</h2>
        <div className="search-box">
          <input type="text" placeholder="Search Products..." />
          <button>🔍</button>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <h3>Browse Categories</h3>
        <div className="category-list">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured">
        <div className="featured-title">
          <span>Featured Products</span>
        </div>

        <div className="product-grid">
          {products.map((p, index) => (
            <div key={index} className="product-card">
              <div>
                <h4>{p.name}</h4>
                <p>{p.seller}</p>
              </div>

              {/* Image instead of icon */}
              <img src={p.image} alt="" className="product-img" />
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden; /* prevent side scroll gap */
  }

  .container {
    width: 100vw;   /* 🔥 full screen width */
    min-height: 100vh; /* 🔥 full screen height */
  }

  /* Header */
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    background: #f8f8f8;
    border-bottom: 1px solid #ccc;
  }

  .logo {
    font-weight: bold;
    font-size: 18px;
  }

  .nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
  }

  /* Search */
  .search-section {
    width: 100%;
    text-align: center;
    padding: 30px 20px;
    background: #d1caca;
  }

  .search-box {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.search-box input {
  width: 60%;              /* 🔥 increase length (change to 70–80% if needed) */
  max-width: 800px;        /* optional limit so it doesn’t become too big */
  padding: 12px;
  border: 1px solid #ccc;
  outline: none;
}

.search-box button {
  padding: 12px 18px;
  border: none;
  background: #666;
  color: white;
  cursor: pointer;
}

  /* Categories */
  .categories {
    width: 100%;
    padding: 20px 40px;
    text-align: center;
  }

  .category-list {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 70px;
  }

  .category-card {
    padding: 12px 40px;
    background: #d1caca;
    border: 1px solid #d3cdcd;
  }

  /* Featured */
  .featured {
    width: 100%;
    padding: 30px 40px;
  }

  /* Heading with lines */
  .featured-title {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .featured-title::before,
  .featured-title::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #999;
  }

  .featured-title span {
    padding: 0 15px;
    font-weight: bold;
  }

  .product-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .product-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #ddd;
    background: #d1caca;
  }

  .product-img {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
  }

`}</style>
    </div>
  );
};

export default HomePage;