import React, { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [openId, setOpenId] = useState(null);

  const [products] = useState([
    {
      id: 1,
      name: "Product name",
      seller: "Seller name",
      category: "category",
      location: "location",
      price: "₹",
    },
    {
      id: 2,
      name: "Product name",
      seller: "Seller name",
      category: "category",
      location: "location",
      price: "₹",
    },
    {
     id: 4,
      name: "Product name",
      seller: "Seller name",
      category: "category",
      location: "location",
      price: "₹",
    },
    
  ]);

  const categories = [...new Set(products.map((p) => p.category))];
  const locations = [...new Set(products.map((p) => p.location))];

  const filteredProducts = products.filter((p) => {
    return (
      (category === "" || p.category === category) &&
      (location === "" || p.location === location)
    );
  });

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #0f172a;
        }

        .topbar {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 40px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 50px;
          font-weight: bold;
        }

        .container {
          display: flex;
          gap: 10px;
          padding: 15px;
          height: calc(100vh - 60px);
        }

        .left {
          width: 25%;
          background: rgba(255,255,255,0.08);
          padding: 15px;
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .left h2 {
          text-align: left;
          color: white;
          margin-bottom: 15px;
          font-size: 42px;
        }

        .left select {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 0px;
        }

        .right {
          width: 75%;
          padding: 15px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          overflow-y: auto;
        }

        /* HEADER FIX */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          color: white;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ✅ COMMON BUTTON (aligned same level as card button) */
        .btn-common {
          background: linear-gradient(135deg, #f594ed, #eee01a);
          color: black;
          border: none;
          padding: 8px 28px;
          border-radius: 0px;
          cursor: pointer;
          height: 38px; /* 👈 IMPORTANT: matches card button height */
        }

        .btn {
          background: linear-gradient(135deg, #f594ed, #eee01a);
          color: black;
          border: none;
          padding: 8px 14px;
          border-radius: 0px;
          cursor: pointer;
          height: 38px; /* 👈 match alignment */
        }

        .card {
          background: rgba(255,255,255,0.08);
          padding: 15px;
          margin-top: 12px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .details {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.2);
          color: white;
        }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        Product Listing Page
      </div>

      <div className="container">

        {/* LEFT */}
        <div className="left">
          <h2>Filters:</h2>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Filter by Category</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Location</option>
            {locations.map((l, i) => (
              <option key={i} value={l}>{l}</option>
            ))}
          </select>
        </div>

        {/* RIGHT */}
        <div className="right">

          {/* HEADER */}
          <div className="header">
          <h1 style={{ color: "white" }}>Product Name</h1>

            <div className="header-right">

              {/* ✅ COMMON TOP BUTTON (ALIGNED WITH CARD BUTTON) */}
              <button
                className="btn-common"
                onClick={() => alert("Common View Details Clicked")}
              >
                View Details
              </button>

            </div>
          </div>

          {/* PRODUCTS */}
          {filteredProducts.map((p) => (
            <div className="card" key={p.id}>

              <div className="card-header">
                <div>
                  <h4>{p.name}</h4>
                  <p>{p.seller}</p>
                </div>

                <button
                  className="btn"
                  onClick={() =>
                    setOpenId(openId === p.id ? null : p.id)
                  }
                >
                  {openId === p.id ? "Hide" : "View Details"}
                </button>
              </div>

              {openId === p.id && (
                <div className="details">
                  <p><b>Category:</b> {p.category}</p>
                  <p><b>Location:</b> {p.location}</p>
                  <p><b>Price:</b> {p.price}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </>
  );
};

export default Products;