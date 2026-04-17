import React, { useState } from "react";
import Jobslist from "./Jobslist";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");

  const products = [
    { name: "Product 1", seller: "Seller 1", image: "" },
    { name: "Product 2", seller: "Seller 2", image: "" },
    { name: "Product 3", seller: "Seller 3", image: "" },
    { name: "Product 4", seller: "Seller 4", image: "" }
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* ✅ BACKGROUND ANIMATION */}
      {darkMode && <div className="stars"></div>}
      {!darkMode && <div className="sun"></div>}

      <style>{`

        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        /* ================= STARS ================= */
        @keyframes starsMove {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }

        .stars {
          position: fixed;
          width: 100%;
          height: 200%;
          background: url("https://www.transparenttextures.com/patterns/stardust.png");
          animation: starsMove 60s linear infinite;
          z-index: 0;
          opacity: 0.6;
        }

        /* ================= SUN ================= */
        @keyframes sunPulse {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        .sun {
          position: fixed;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #fde047, #facc15, transparent 70%);
          filter: blur(40px);
          animation: sunPulse 6s ease-in-out infinite;
          z-index: 0;
        }

        /* ================= DARK MODE ================= */
        .dark {
          position: relative;
          background: radial-gradient(circle at 20% 30%, #1e293b, #020617 80%);
          color: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* 🔥 EXTRA GLOW EFFECT (IMPORTANT) */
        .dark::before {
          content: "";
          position: fixed;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(56,189,248,0.2), transparent 70%);
          top: 20%;
          left: 10%;
          filter: blur(80px);
          z-index: 0;
        }

        /* ================= LIGHT MODE ================= */
        .light {
          position: relative;
          background: linear-gradient(to bottom, #fefce8, #e0f2fe);
          color: #111;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .light::before {
          content: "";
          position: fixed;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(253,224,71,0.4), transparent 70%);
          top: -100px;
          right: -100px;
          filter: blur(80px);
          z-index: 0;
        }

        /* KEEP CONTENT ABOVE */
        .navbar, .hero, .categories, .products, .section-title {
          position: relative;
          z-index: 1;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 15px 40px;
          backdrop-filter: blur(12px);
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
        }

        .nav-links span {
          cursor: pointer;
        }

        .toggle-btn {
          background: linear-gradient(135deg, #f594ed, #eee01a);
          border: none;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          color: white;
        }

        /* HERO */
        .hero {
          text-align: center;
          padding: 60px 20px 30px;
        }

        .hero h1 {
          font-size: 52px;
          color:orange;
        }

        .search-box {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .search-box input {
          padding: 12px 20px;
          width: 280px;
          border-radius: 30px;
          border: none;
          outline: none;
        }

        .search-box button {
          margin-left: 10px;
          padding: 12px 20px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #ce0ce7, #f3f709);
          color: white;
        }

        /* CATEGORIES */
        .categories {
          display: flex;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          flex-wrap: wrap;
        }

        .category {
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255,255,255,0.6);
        }

        .dark .category {
          background: rgba(30,41,59,0.6);
        }

        /* TITLE */
        .section-title {
          text-align: center;
          font-size: 22px;
          margin-top: 10px;
          color: orange;
        }

        /* PRODUCTS */
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          padding: 30px;
        }

        .product-card {
          background: rgba(255,255,255,0.9);
          border-radius: 14px;
          text-align: center;
          padding: 15px;
        }

        .dark .product-card {
          background: rgba(30,41,59,0.8);
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        /* CIRCLE IMAGE */
        .product-image {
          width: 90px;
          height: 90px;
          margin: 0 auto 10px;
          border-radius: 50%;
          background: #86898d;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-image img {
          width: 60px;
          height: 60px;
          object-fit: cover;
        }

        .product-name {
          font-size: 14px;
          font-weight: 600;
        }

        .seller {
          font-size: 12px;
          color: gray;
        }

      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">MyLogo</div>

        <ul className="nav-links">
          <li><span onClick={() => setPage("home")}>Home</span></li>
          <li><span>Products</span></li>
          <li><span onClick={() => setPage("jobs")}>Jobs</span></li>
          <li><span>Login</span></li>
          <li><span>Register</span></li>

          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <>
          <div className="hero">
            <h1>Search Products....</h1>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>

          <div className="categories">
            {["Category 1","Category 2","Category 3","Category 4","Category 5","Category 6"]
              .map((cat, i) => (
                <div key={i} className="category">{cat}</div>
              ))}
          </div>

          <h2 className="section-title">Featured Products</h2>

          <div className="products">
            {filteredProducts.map((p, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img
                    src={
                      p.image
                        ? p.image
                        : "https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                    }
                    alt="product"
                  />
                </div>

                <div className="product-name">{p.name}</div>
                <div className="seller">{p.seller}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {page === "jobs" && <Jobslist setPage={setPage} />}
    </div>
  );
};

export default Home;