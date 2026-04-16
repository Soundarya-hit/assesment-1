import React, { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  // 🍔 FOOD PRODUCTS
  const products = [
  {
    name: "Full meals",
    seller: "Green hotel",
    image: `${import.meta.env.BASE_URL}images/h.jpeg`
  },
  {
    name: "Pearl Millet Gruel",
    seller: "Nature Basket",
    image: "/images/a.jpeg"
  },
  {
    name: "kulipaniyaram",
    seller: "A2V",
    image: "/images/b.jpeg"
  },
  {
    name: "Pongal",
    seller: "QuickBite Kitchens",
    image: "/images/d.jpeg"
  }
];

  return (
    <div className={darkMode ? "dark" : "light"}>
      <style>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
          

        html, body, #root {
  width: 100%;
  height: 100%;
}

        body {
          overflow-x: hidden;
        }

        /* ================= SPACE STARS ================= */
        @keyframes starsMove {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }

        .stars {
          position: fixed;
          width: 100%;
          height: 200%;
          background: transparent url("https://www.transparenttextures.com/patterns/stardust.png");
          animation: starsMove 60s linear infinite;
          z-index: 0;
          opacity: 0.6;
        }

        /* ================= SUN RAYS ================= */
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

        .dark::before {
          content: "";
          position: fixed;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(56,189,248,0.2), transparent 70%);
          top: 20%;
          left: 10%;
          filter: blur(80px);
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
        }

        /* ================= NAVBAR ================= */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 50px;
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.1);
        }

        .dark .navbar {
          background: rgba(0,0,0,0.4);
        }

        .logo img {
          height: 40px;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          list-style: none;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: inherit;
          font-weight: 500;
        }

        .toggle-btn {
          background: linear-gradient(135deg, #f594ed, #eee01a);
          border: none;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          color: white;
        }

        /* ================= HERO ================= */
        .hero {
          text-align: center;
          padding: 80px 20px 40px;
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-size: 42px;
          color:orange;
        }

        .hero p {
          color: pink;
        }

        .search-box {
          display: flex;
          justify-content: center;
          margin-top: 25px;
        }

        .search-box input {
          padding: 12px 20px;
          width: 300px;
          border-radius: 30px;
          border: none;
        }

        .search-box button {
          margin-left: 10px;
          padding: 12px 20px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #ce0ce7, #f3f709);
          color: white;
        }

        /* ================= CATEGORIES ================= */
        .categories {
          display: flex;
          justify-content: center;
          gap: 15px;
          padding: 30px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .category {
          padding: 10px 20px;
          border-radius: 20px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .dark .category {
          background: rgba(30,41,59,0.6);
        }

        /* ================= PRODUCTS ================= */
        /* ================= PRODUCTS ================= */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  padding: 40px;
  position: relative;
  z-index: 1;
}

.product-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  border-radius: 15px;
  transition: 0.3s;
  text-align: center; /* center content */
  padding-bottom: 15px;
}

.dark .product-card {
  background: rgba(30,41,59,0.7);
}

.product-card:hover {
  transform: translateY(-10px) scale(1.03);
}

/* ✅ FIXED IMAGE STYLE */
.product-card img {
  width: 110px;
  height: 110px;
  object-fit: cover;      /* prevents stretching */
  border-radius: 50%;     /* makes circle */
  margin: 20px auto 10px; /* center */
  display: block;
  border: 3px solid #fff;
}

.dark .product-card img {
  border: 3px solid rgba(255,255,255,0.3);
}

.product-info {
  padding: 10px;
}

.product-name {
  font-weight: bold;
}

.seller {
  color: gray;
}

        /* ================= FOOTER ================= */
        .footer {
          text-align: center;
          padding: 30px;
          position: relative;
          z-index: 1;
        }

      `}</style>

      {/* Background Effects */}
      {darkMode && <div className="stars"></div>}
      {!darkMode && <div className="sun"></div>}

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/c.jpeg" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <h1>Discover Fresh Food & Groceries</h1>
        <p>Farm fresh ingredients delivered to your door</p>

        <div className="search-box">
          <input type="text" placeholder="Search food items..." />
          <button>Search</button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="categories">
        {["Vegetables", "Fruits", "Dairy", "Bakery", "Meals"].map((cat, i) => (
          <div key={i} className="category">{cat}</div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <img src={p.image} alt={p.name} />
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="seller">{p.seller}</div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="footer"></div>
    </div>
  );
};

export default Home;
