import React, { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState("home");

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
    image: "https://via.placeholder.com/80",
  });

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="logo">Logo</div>
        <div className="nav">
          <a onClick={() => setPage("home")}>Home</a>
          <a onClick={() => setPage("products")}>Products</a>
          <a onClick={() => setPage("jobs")}>Jobs</a>
          <a>Login</a>
          <a>Register</a>
        </div>
      </div>

      {/* ================= HOME ================= */}
      {page === "home" && (
        <div className="home-page">
          <div className="search-section">
            <h2>Search Products...</h2>
            <div className="search-box">
              <input type="text" placeholder="Search Products..." />
              <button>🔍</button>
            </div>
          </div>

          <div className="categories">
            <h3>Browse Categories</h3>
            <div className="category-list">
              {categories.map((cat, i) => (
                <div key={i} className="category-card">{cat}</div>
              ))}
            </div>
          </div>

          <div className="featured">
            <div className="featured-title">
              <h3>Featured Products</h3>
            </div>

            <div className="product-grid">
              {products.slice(0, 6).map((p, i) => (
               <div className="product-card">
  {/* LEFT TEXT */}
  <div className="product-content">
    <h4>{p.name}</h4>
    <p>{p.seller}</p>
  </div>

  {/* RIGHT IMAGE */}
  <img src={p.image} alt="" className="product-img-right" />
</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= PRODUCTS ================= */}
      {page === "products" && (
        <div className="products-page">
          <h2 className="product-title">Product Listing Page</h2>

          <div className="products-layout">
            {/* Sidebar */}
            <div className="sidebar">
              <h4>Filters:</h4>
              <div className="filter-box">Filter by Category</div>
              <div className="filter-box">Location</div>
            </div>

            {/* Product List */}
            <div className="product-list">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="product-row">
                  <div>
                    <h4>Product Name</h4>
                    <p>Seller Name</p>
                  </div>
                  <button className="details-btn">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= JOBS ================= */}
      {page === "jobs" && (
        <div className="page">
          <h1>Jobs Page</h1>
        </div>
      )}

      {/* ================= CSS ================= */}
      <style>{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
}
html, body, #root {
  width: 100%;
  min-height: 100%;   /* ✅ FIX */
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* ✅ prevent side scroll */
}


.container {
  width: 100vw;
  height: 100vh; /* 🔥 FIXED FULL SCREEN */
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: #f8f8f8;
  border-bottom: 1px solid #ccc;
  flex-shrink: 0;
}

.nav a {
  margin-left: 20px;
  cursor: pointer;
}

/* MAIN CONTENT AREA */
.home-page,
.products-page,
.page {
  flex: 1;
  overflow: hidden;
}

/* HOME */
.search-section {
  text-align: center;
  padding: 50px 20px;
  background: #d1caca;
}

.search-box {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.search-box input {
  width: 50%;
  padding: 10px;
}

.search-box button {
  padding: 10px;
  background: #666;
  color: white;
  border: none;
}

.categories {
  padding:  30px 10px;
  text-align: center;
}

.category-list {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 10px;
}

.category-card {
  padding: 10px 45px;
  background: #d1caca;
}

.featured {
  padding: 15px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;   /* 🔥 vertical center */
  padding: 10px;
  background: #a5a3a3;
  border: 1px solid #ccc;
}

.product-content {
  display: flex;
  flex-direction: column;
}

/* Image on right */
.product-img-right {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 1px solid #ccc;
}

/* PRODUCTS */
.products-page {
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
}

.product-title {
  margin-bottom: 10px;
}

.products-layout {
  flex: 1;
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 220px;
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  background: #f5f5f5;
}

.filter-box {
  margin-top: 10px;
  padding: 10px;
  background: #e0e0e0;
}

.product-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.product-row {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #b1aeae;
}

.details-btn {
  background: #666;
  color: white;
  border: none;
  padding: 6px 12px;
}

/* Jobs */
.page {
  display: flex;
  justify-content: center;
  align-items: center;
}
`}</style>
    </div>
  );
};

export default HomePage;