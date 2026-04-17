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

      {/* BACKGROUND */}
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
          animation: sunPulse 6s infinite;
          z-index: 0;
        }

        .dark {
          background: radial-gradient(circle at 20% 30%, #1e293b, #020617);
          min-height: 100vh;
          color: white;
          position: relative;
        }

        .light {
          background: linear-gradient(to bottom, #fefce8, #e0f2fe);
          min-height: 100vh;
          color: black;
          position: relative;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 15px 40px;
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 1;
        }

        .nav-links {
          display: flex;
          gap: 50px;
          list-style: none;
        }

        .nav-links li {
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

        .section-box {
          width: 90%;
          margin: 20px auto;
          padding: 20px;
          border-radius: 10px;
          background: rgba(148, 153, 158, 0.9);
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 1;
        }

        .hero {
          text-align: center;
        }

        .hero h1 {
          font-size: 40px;
          color: orange;
          margin-bottom: 25px;
        }

        .search-box {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .search-box input {
          padding: 12px;
          width: 280px;
          border-radius: 30px;
          border: none;
          outline: none;
        }

        .search-box button {
          padding: 12px 20px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #ce0ce7, #f3f709);
          color: white;
          cursor: pointer;
        }

        .categories {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .category {
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255,255,255,0.3);
        }

        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
       .product-card {
  background: rgba(255,255,255,0.9);
  border-radius: 14px;
  padding: 12px 15px;

  display: flex;
  align-items: center;

  justify-content: flex-start; /* important */
  gap: 12px;
}

.dark .product-card {
  background: rgba(30,41,59,0.8);
}

/* LEFT SIDE IMAGE */
.product-image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: #ccc;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  flex-shrink: 0;
}

/* IMAGE INSIDE */
.product-image img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

/* RIGHT SIDE TEXT */
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
          <div className="section-box hero">
            <h1>Search Products....</h1>

            <div className="search-box">
              <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Search</button>
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
            <h2 style={{ textAlign: "center", marginBottom: "25px", color: "orange", fontSize: "42px" }}>
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

      {/* JOBS PAGE (IMPORTANT FIX) */}
      {page === "jobs" && <Jobslist setPage={setPage} />}
    </div>
  );
};

export default Home;