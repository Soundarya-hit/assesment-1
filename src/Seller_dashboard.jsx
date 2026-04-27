import React, { useState } from "react";
import { FaHome, FaBox, FaBriefcase, FaUser, FaCrown } from "react-icons/fa";

const Seller_dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const [search, setSearch] = useState({
    s1: "",
    s2: "",
    s3: ""
  });

  const handleClick = (name) => {
    alert(name + " clicked");
  };

  const icons = {
    Dashboard: <FaHome />,
    "My Products": <FaBox />,
    "Job Listings": <FaBriefcase />,
    "Profile Views": <FaUser />,
    Membership: <FaCrown />
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        /* FULL PAGE */
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #a3a3a7;
        }

        /* TOP BAR */
        .topbar {
          height: 70px;
          background: rgba(255,255,255,0.25);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        
        }

        .topbar h2 {
          font-size: 38px;
          color: #0e0d0d;
        }

        .search-group {
          display: flex;
          gap: 10px;
        }

        .search-box {
          background: rgba(255,255,255,0.2);
          padding: 5px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: black;
          width: 100px;
        }

        /* UNDER BAR */
        .underbar {
          display: flex;
          align-items: flex-start;
        
        }

        /* SIDEBAR */
        .sidebar {
          width: 220px;
          padding: 20px;
          background: gray;
          position: relative;
        }

        .sidebar li {
          list-style: none;
          padding: 14px;
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          transition: 0.3s;
          z-index: 1;
        }

        /* ✅ FIXED: removed overflow white strip */
        .sidebar li.active::before {
          content: "";
          position: absolute;
          left: 0;              /* FIX */
          top: 0;
          width: 100%;          /* FIX */
          height: 100%;
          background: rgba(255,255,255,0.25);
          z-index: -1;
          transition: 0.3s;
        }

        .sidebar li:hover::before {
          content: "";
          position: absolute;
          left: 0;              /* FIX */
          top: 0;
          width: 100%;          /* FIX */
          height: 100%;
          background: rgba(255,255,255,0.12);
          z-index: -1;
        }

        .icon {
          font-size: 18px;
        }

        /* RIGHT CONTENT */
        .main {
          padding: 20px;
          margin: 20px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          color: black;
          border-radius: 0px;

          display: inline-block;
          height: fit-content;
          width: 90%;
        }

        .welcome {
          font-size: 38px;
          margin-bottom: 10px;
          color: #fff;
          text-align: left;
        }

        .row {
          display: flex;
          gap: 20px;
          margin: 20px 0;
        }

        .card {
          flex: 1;
          padding: 30px 40px;
          border-radius: 0px;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          font-size: 25px;
        }

        .card:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.25);
        }

        .card-icon {
          font-size: 40px;
        }

        .buttons {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .btn {
          flex: 1;
          padding: 25px 20px;
          border: none;
          border-radius: 0px;
          cursor: pointer;
          font-weight: bold;
          background: rgba(255,255,255,0.2);
          color: white;
          font-size: 22px;
        }

        .btn:hover {
          background: rgba(255,255,255,0.35);
        }
      `}</style>

      <div className="app">
        {/* TOP BAR */}
        <div className="topbar">
          <h2>Seller Dashboard</h2>

          <div className="search-group">
            <div className="search-box">
              🔍
              <input
                placeholder="Search 1"
                value={search.s1}
                onChange={(e) =>
                  setSearch({ ...search, s1: e.target.value })
                }
              />
            </div>

            <div className="search-box">
              🔍
              <input
                placeholder="Search 2"
                value={search.s2}
                onChange={(e) =>
                  setSearch({ ...search, s2: e.target.value })
                }
              />
            </div>

            <div className="search-box">
              🔍
              <input
                placeholder="Search 3"
                value={search.s3}
                onChange={(e) =>
                  setSearch({ ...search, s3: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* UNDER BAR */}
        <div className="underbar">
          {/* SIDEBAR */}
          <ul className="sidebar">
            {Object.keys(icons).map((item) => (
              <li
                key={item}
                className={activeMenu === item ? "active" : ""}
                onClick={() => setActiveMenu(item)}
              >
                <span className="icon">{icons[item]}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div className="main">
            <div className="welcome">Welcome, Seller!</div>

            <div className="row">
              <div
                className="card"
                onClick={() => handleClick("Total Products")}
              >
                <div>
                  Total Products <br />
                  <b>💲</b>
                </div>
                <div className="card-icon">📦</div>
              </div>

              <div
                className="card"
                onClick={() => handleClick("Profile Views")}
              >
                <div>
                  Profile Views <br />
                  <b>4</b>
                </div>
                <div className="card-icon">👤</div>
              </div>
            </div>

            <div className="row">
              <div
                className="card"
                onClick={() => handleClick("Add Product")}
              >
                <div>Add Product</div>
                <div className="card-icon">➕</div>
              </div>

              <div
                className="card"
                onClick={() => handleClick("Post Job")}
              >
                <div>Post Job</div>
                <div className="card-icon">💼</div>
              </div>
            </div>

            <div className="buttons">
              <button
                className="btn"
                onClick={() => handleClick("Add Product Button")}
              >
                Add Product
              </button>

              <button
                className="btn"
                onClick={() => handleClick("Post Job Button")}
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seller_dashboard;