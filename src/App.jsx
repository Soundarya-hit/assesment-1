import React, { useState } from "react";
import Jobslist from "./Jobslist";
import SellerDashboard from "./Seller_dashboard";
const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");

  const products = [
    { name: "Product 1", seller: "Seller 1", image: "" },
    { name: "Product 2", seller: "Seller 2", image: "" },
    { name: "Product 3", seller: "Seller 3", image: "" },
    { name: "Product 4", seller: "Seller 4", image: "" },
    { name: "Product 5", seller: "Seller 5", image: "" },
    { name: "Product 6", seller: "Seller 6", image: "" }
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  
  );

  return (
    
    <div className={darkMode ? "dark" : "light"}>
      {/* BACKGROUND */}
      {darkMode && <div className="stars"></div>}
      {!darkMode && <div className="sun"></div>}
      <style>{`
        
html, body, #root {
  width: 100%;
  min-height: 100%;   /* ✅ FIX */
  margin: 0;
  padding: 0;
  background: black;
  overflow-x: hidden; /* ✅ prevent side scroll */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* 🔥 IMPROVED STAR ANIMATION (supports long pages) */
@keyframes starsMove {
  from { transform: translateY(0); }
  to { transform: translateY(-3000px); } /* ✅ bigger movement */
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* ✅ full screen only */
  background: url("https://www.transparenttextures.com/patterns/stardust.png");
  animation: starsMove 120s linear infinite; /* ✅ slower + smoother */
  z-index: 0;
  opacity: 0.6;
}

/* 🌞 SUN */
@keyframes sunPulse {
  0%,100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
}

.sun {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #fde047, #facc15, transparent 70%);
  filter: blur(40px);
  animation: sunPulse 6s infinite;
  z-index: 0;
}

/* ✅ MAIN CONTAINER FIX */
.dark {
  background: radial-gradient(circle at 20% 30%, #1e293b, #020617);
  min-height: 100vh;
  height: auto; /* ✅ allow infinite growth */
  color: white;
  position: relative;
}

.light {
  background: linear-gradient(to bottom, #fefce8, #e0f2fe);
  min-height: 100vh;
  height: auto; /* ✅ allow infinite growth */
  color: black;
  position: relative;
}

/* ✅ KEEP CONTENT ABOVE BACKGROUND */
.navbar,
.section-box {
  position: relative;
  z-index: 1;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  backdrop-filter: blur(12px);
}

.nav-links {
  display: flex;
  gap: 50px;
  list-style: none;
  margin-left: auto;
}

.nav-links li {
  cursor: pointer;
}

.toggle-btn {
  background: linear-gradient(135deg, #f594ed, #eee01a);
  border: none;
  padding: 6px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
}

/* SECTION */
.section-box {
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  backdrop-filter: blur(12px);
  background: transparent;
}

/* SEARCH SECTION */
.search-section {
  background: rgba(255,255,255,0.08);
  padding: 30px 35px;

  display: flex;              /* ✅ enable flex */
  flex-direction: column;
  align-items: center;        /* ✅ horizontal center */
  justify-content: center;    /* vertical balance */
  text-align: center;
}
.search-section h1 {
  font-size: 40px;
  color: orange;
  margin-bottom: 25px;
}

.hero {
  text-align: center;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;   /* ✅ ensures inner alignment */
  gap: 0px;

  width: 100%;
  max-width: 550px;          /* keeps nice centered width */
}

.search-box input { 
  padding: 12px;
  width: 100%;             /* ✅ takes full available space */
  border: none;
  outline: none;
  flex: 1;    
          
}

.search-box button {
  padding: 12px;
  border: none;
  background: linear-gradient(135deg, #ce0ce7, #f3f709);
  color: white;
  cursor: pointer;
  white-space: nowrap;
}

/* CATEGORY */
.categories {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top:25px;
}

.category {
  padding: 16px 78px;
  background: rgba(255,255,255,0.08);
}

/* TITLE */
.section-title {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 42px;
  color: orange;
  margin-bottom: 25px;
}

.section-title::before,
.section-title::after {
  content: "";
  flex: 1;
  height: 2px;
  background: rgba(27, 228, 211, 0.9);
  margin: 0 15px;
}

/* PRODUCTS */
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  background: rgba(255,255,255,0.9);
  padding: 4px 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dark .product-card {
  background: rgba(30,41,59,0.8);
}

.product-image {
  width: 60px;
  height: 60px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  width: 40px;
  height: 40px;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-weight: 600;
  font-size: 14px;
}

.seller {
  font-size: 12px;
  color: gray;
}

      `}</style>

      {/* NAVBAR */}
      <div className="navbar">
        <div>MyLogo</div>

        <ul className="nav-links">
          <li onClick={() => setPage("home")}>Home</li>
          <li onClick={() => setPage("products")}>Products</li>
          <li onClick={() => setPage("jobs")}>Jobs</li>
          <li onClick={() => setPage("login")}>Login</li>
          <li onClick={() => setPage("register")}>Register</li>
        </ul>

        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <div className="section-box hero search-section">
  <h1>Search Products....</h1>

  <div className="search-box">
    <input
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button>🔍︎</button>
  </div>
</div>

          <div className="section-box">
            <h1 style={{ textAlign: "center", marginBottom: "25px", color: "orange", fontSize: "42px" }}>
              Browse Categories
            </h1>

            <div className="categories">
              {["Category 1","Category 2","Category 3","Category 4","Category 6"].map((c, i) => (
                <div key={i} className="category">{c}</div>
              ))}
            </div>
          </div>

          <div className="section-box">
            <h2 className="section-title">
  Featured Products
</h2>
<div className="products">
  {filteredProducts.map((p, i) => (
    <div className="product-card" key={i}>

      {/* LEFT SIDE - IMAGE */}
      <div className="product-image">
        <img
          src={p.image || "https://cdn-icons-png.flaticon.com/512/1829/1829586.png"}
          alt="product"
        />
      </div>

      {/* RIGHT SIDE - INFO */}
      <div className="product-info">
        <div
          className="product-name"
          style={{ cursor: "pointer" }}
          onClick={() => alert(`Coming Soon: ${p.name}`)}
        >
          {p.name}
        </div>
        <div className="seller">{p.seller}</div>
      </div>

    </div>
  ))}
</div>
            
          </div>
        </>
      )}

      {page === "jobs" && <Jobslist setPage={setPage} />}

{page === "login" && <SellerDashboard />}
    </div>
  );
};

export default Home;