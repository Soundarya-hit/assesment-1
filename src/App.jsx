import React, { useState } from "react";
import Jobslist from "./Jobslist";
import Admin from "./Adminpage";
import Chat from "./Chat";
import Seller from "./Seller_dashboard";
import Register from "./Job_seeker";

const HomePage = () => {
  const [page, setPage] = useState("home");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ];

  const products = [
    { name: "Product 1", seller: "Seller A", category: "Category 1", location: "Chennai", image: "https://via.placeholder.com/80" },
    { name: "Product 2", seller: "Seller B", category: "Category 2", location: "Madurai", image: "https://via.placeholder.com/80" },
    { name: "Product 3", seller: "Seller C", category: "Category 3", location: "Coimbatore", image: "https://via.placeholder.com/80" },
    { name: "Product 4", seller: "Seller D", category: "Category 1", location: "Chennai", image: "https://via.placeholder.com/80" },
    { name: "Product 5", seller: "Seller E", category: "Category 4", location: "Salem", image: "https://via.placeholder.com/80" },
    { name: "Product 6", seller: "Seller F", category: "Category 2", location: "Madurai", image: "https://via.placeholder.com/80" },
    { name: "Product 7", seller: "Seller E", category: "Category 4", location: "Salem", image: "https://via.placeholder.com/80" },
    { name: "Product 8", seller: "Seller F", category: "Category 2", location: "Madurai", image: "https://via.placeholder.com/80" },
    { name: "Product 9", seller: "Seller E", category: "Category 4", location: "Salem", image: "https://via.placeholder.com/80" },
  ];

  const filteredProducts = products.filter((p) => {
    return (
      (selectedCategory === "" || p.category === selectedCategory) &&
      (selectedLocation === "" || p.location === selectedLocation)
    );
  });

  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <div className="logo">Logo</div>
        <div className="nav">
          <a onClick={() => setPage("home")}>Home</a>
          <a onClick={() => setPage("products")}>Products</a>
          <a onClick={() => setPage("jobs")}>Jobs</a>
          <a onClick={() => setPage("login")}>Login</a>
          <a onClick={() => setPage("seller")}>Seller</a>
          <a onClick={() => setPage("register")}>Register</a>
          <a onClick={() => setPage("chat")}>💬</a>
        </div>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div className="home-page">

          <div className="search-section">
            <h1>Search Products...</h1>
            <div className="search-box">
              <input type="text" placeholder="Search Products..." />
              <button
                className={activeSearch ? "search-btn active" : "search-btn"}
                onClick={() => setActiveSearch(!activeSearch)}
              >
                🔍
              </button>
            </div>
          </div>

          {/* CATEGORY CLICKABLE */}
          <div className="categories">
            <h3>Browse Categories</h3>
            <div className="category-list">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className={`category-card ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPage("products"); // 👈 go to product page
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT CARDS CLICKABLE */}
          <div className="featured">
            <div className="featured-title">
              <span>Featured Products</span>
            </div>

            <div className="product-grid">
              {products.map((p, i) => (
                <div
                  key={i}
                  className={`product-card ${activeProductIndex === i ? "active" : ""}`}
                  onClick={() => {
                    setActiveProductIndex(i);
                    setPage("products"); // 👈 open products page
                  }}
                >
                  <div>
                    <h4>{p.name}</h4>
                    <p>{p.seller}</p>
                  </div>
                  <img src={p.image} className="product-img-right" />
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* PRODUCTS */}
      {page === "products" && (
        <div className="products-page">
          <div className="products-container">

            <div className="products-header">
              <h2 className="header-title">Product Listing Page</h2>
            </div>

            <div className="products-layout">
              
              <div className="sidebar">
                <h2>Filters:</h2>

                <div className="filter-box">
                  <label>Filter by Category</label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map((cat, i) => <option key={i}>{cat}</option>)}
                  </select>
                </div>

                <div className="filter-box">
                  <label>Location</label>
                  <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                    <option value="">All Locations</option>
                    {[...new Set(products.map(p => p.location))].map((loc, i) => (
                      <option key={i}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="product-panel">

                <div className="panel-header">
                  <span>Product Name</span>
                  <button className="details-btn small">View Details</button>
                </div>

                <div className="product-list">
                  {filteredProducts.map((p, i) => (
                    <div key={i} className="product-row-new">

                      <div className="product-info">
                        <h4>{p.name}</h4>
                        <p>{p.seller}</p>
                      </div>

                      <button
                        className={activeProductIndex === i ? "details-btn small active" : "details-btn small"}
                        onClick={() => setActiveProductIndex(i)}
                      >
                        View Details
                      </button>

                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* OTHER PAGES */}
      {page === "jobs" && <Jobslist />}
      {page === "login" && <Admin />}
      {page === "chat" && <Chat />}
      {page === "seller" && <Seller />}
      {page === "register" && <Register />}

      <style>{`

.container {
  min-height: 100vh;
 background: linear-gradient(135deg, #f1c07f, #f15c5c); 
}

/* CATEGORY */
.category-card:hover {
  border: 2px solid #000;
}

.category-card.active {
  border: 2px solid #000;
}

/* PRODUCT CARD */
.product-card:hover {
  border: 2px solid #000;
}

.product-card.active {
  border: 2px solid #000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
}

html, body, #root {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

.featured-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.featured-title::before,
.featured-title::after {
  content: "";
  flex: 1;
  height: 2px;
  background: #c8d4d2;
}

.featured-title span {
  margin: 0 15px;
  font-size: 24px;
  font-weight: bold;
}

.product-card h4 {
  font-size: 14px;   /* smaller product name */
}

.product-card p {
  font-size: 12px;   /* smaller seller name */
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
   background: linear-gradient(135deg, #f1c07f, #f15c5c);
  border-bottom: 1px solid #8d0f0f;
}

.nav a {
  margin-left: 20px;
  cursor: pointer;
  color:black;
  font-size:22px;
}

.home-page,
.products-page {
  flex: 1;
}

.search-section {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #f1c07f, #f15c5c);
}


.search-box {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.search-box input {
  width: 50%;
  padding: 10px;
  background:transparent;
}

/* SEARCH BUTTON */
.search-btn {
  padding: 10px;
  background: transparent;
  color: white;
  cursor: pointer;
}

.search-btn.active {
  background: #e27a34;
  color: black;
}

/* CATEGORIES */
.categories {
  padding: 30px 10px;
  text-align: center;
  font-size:24px;
   background: linear-gradient(135deg, #f15c5c, #f1c07f);
 
}
  .category-list {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 20px; /* 👈 add this */
}

.category-card {
  padding: 10px 45px;
  background: #f1c07f;
  font-size: 14px;   /* 👈 reduce only box text */
}

/* FEATURED */
.featured {
  padding: 15px;
  font-size:24px;
  background: linear-gradient(135deg, #f1c07f, #f15c5c);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.product-card {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #d4c77d;
  margin-top:20px;
}

.product-img-right {
  width: 60px;
  height: 60px;
}

/* PRODUCTS PAGE */
/* OUTER BOX */
.products-container {
   background: linear-gradient(135deg, #f1c07f, #f15c5c);
  padding: 15px;
  border: 1px solid #161616;
}

/* HEADER BAR */
.products-header {
   background: linear-gradient(135deg, #f1c07f, #f15c5c);
  border: 1px solid #570404;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start; /* 👈 LEFT ALIGN */
  height: 50px;
  padding-left: 15px;
}

/* REMOVE default margin pushing it */
.header-title {
  margin: 0;
  font-size: 38px;
}

/* LAYOUT */
.products-layout {
  display: flex;
  gap: 15px;
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  background: transparent;
  border: 1px solid #1a1919;
  padding: 15px;
}

.filter-box {
  margin-top: 15px;
}

.filter-box label {
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
  color:black;
}

.filter-box select {
  width: 100%;
  padding: 10px;
  background:transparent;
  color:black;
}

/* RIGHT PANEL */
.product-panel {
  flex: 1;
  background: transparent;
  border: 1px solid #0e0d0d;
  padding: 10px;
}

/* PANEL HEADER ROW */
.panel-header {
  display: flex;
  justify-content: space-between;
  background: transparent;
  padding: 8px;
  border: 1px solid #080808;
  margin-bottom: 10px;
  font-weight: bold;
}

/* PRODUCT LIST */
.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* EACH ROW */
.product-row-new {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 10px;
  border: 1px solid #080808;
}

/* TEXT */
.product-info h4 {
  font-size: 14px;
  margin-bottom: 3px;
}

.product-info p {
  font-size: 12px;
  color: #161616;
}

/* BUTTON */
.details-btn {
  background: #d4c77d;
  color: black;
  cursor: pointer;
}

.details-btn.small {
  padding: 6px 12px;
  font-size: 12px;
}

.details-btn.active {
  background: transparent;
}

      `}</style>
    </div>
  );
};

export default HomePage;