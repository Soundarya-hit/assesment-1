import React, { useState } from "react";
import { FaHome, FaBox, FaBriefcase, FaUser, FaCrown } from "react-icons/fa";

const SellerDashboard = () => {

  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [search, setSearch] = useState({
    s1: "",
    s2: "",
    s3: ""
  });

  const handleClick = (name) => {
    alert(name + " clicked");
  };

  // ✅ ICON MAP
  const icons = {
    "Dashboard": <FaHome />,
    "My Products": <FaBox />,
    "Job Listings": <FaBriefcase />,
    "Profile Views": <FaUser />,
    "Membership": <FaCrown />
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Arial, sans-serif;
          background: transparent;
          overflow-x: hidden;
        }

        .gradient-bg {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(
            270deg,
            #00c6ff,
            #0072ff,
            #ff6a00,
            #ee0979,
            #00ff87,
            #00c6ff
          );
          background-size: 600% 600%;
          animation: gradientMove 12s ease infinite;
          z-index: -2;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .blob {
          position: fixed;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
          animation: moveBlob 20s infinite alternate ease-in-out;
          z-index: -1;
        }

        .blob:nth-child(2){ top:5%; left:5%; background:#00c6ff; }
        .blob:nth-child(3){ top:40%; left:65%; background:#ff6a00; animation-duration:25s;}
        .blob:nth-child(4){ top:75%; left:20%; background:#00ff87; animation-duration:30s;}

        @keyframes moveBlob {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(120px,-80px) scale(1.2); }
          100% { transform: translate(-80px,120px) scale(1); }
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          color: black;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 20px;
          margin-top: 15px;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.12);
        }

        .topbar h2 {
          margin: 0;
          font-size: 30px;
        }

        .search-group {
          display: flex;
          gap: 10px;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.2);
          padding: 5px 10px;
          border-radius: 8px;
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          width: 100px;
        }

        .bottom {
          flex: 1;
          display: flex;
        }

        .sidebar {
          width: 220px;
          padding: 20px;
          backdrop-filter: blur(15px);
          background: rgba(255,255,255,0.1);
        }

        /* ✅ UPDATED SIDEBAR ITEMS */
        .sidebar li {
          list-style: none;
          padding: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: 0.3s;
        }

        .sidebar li .icon {
          font-size: 18px;
          transition: 0.3s;
        }

        .sidebar li:hover {
          background: rgba(255,255,255,0.3);
          transform: translateX(6px);
        }

        .sidebar li.active {
          background: rgba(255,255,255,0.4);
          font-weight: bold;
        }

        .sidebar li.active .icon {
          transform: scale(1.2);
        }

        .main {
          flex: 1;
          padding: 20px;
          color: #fff;
        }

        .welcome {
          font-size: 34px;
          margin-bottom: 10px;
        }

        .row {
          display: flex;
          gap: 20px;
          margin-bottom: 25px;
        }

        .card {
          flex: 1;
          min-height: 100px;
          padding: 25px;
          border-radius: 12px;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          font-size: 25px;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 0 20px rgba(255,255,255,0.4);
        }

        .icon {
          font-size: 52px;
        }

        .buttons {
          display: flex;
          gap: 20px;
        }

        .btn {
          flex: 1;
          padding: 14px;
          border: none;
          border-radius: 10px;
          background: rgba(255,255,255,0.25);
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          font-size: 25px;
        }

        .btn:hover {
          background: rgba(255,255,255,0.5);
          box-shadow: 0 0 15px #00c6ff;
        }

      `}</style>

      <div className="gradient-bg"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>

      <div className="app">

        <div className="topbar">
          <h2>Seller Dashboard</h2>
        <div className="search-group"> <div className="search-box">🔍 <input placeholder="Search 1" value={search.s1} onChange={(e)=>setSearch({...search,s1:e.target.value})}/> </div> <div className="search-box">🔍 <input placeholder="Search 2" value={search.s2} onChange={(e)=>setSearch({...search,s2:e.target.value})}/> </div> <div className="search-box">🔍 <input placeholder="Search 3" value={search.s3} onChange={(e)=>setSearch({...search,s3:e.target.value})}/> </div> </div> </div>

        <div className="bottom">

          {/* ✅ SIDEBAR WITH ICONS */}
          <ul className="sidebar">
            {Object.keys(icons).map(item => (
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

          <div className="main">

            <div className="welcome">Welcome, Seller!</div>
            <h2>{activeMenu}</h2>
<div className="row"> 
  <div className="card" onClick={()=>handleClick("Total Products")}>
     <div>Total Products <br/><b>💲</b></div>
      <div className="icon">📦</div> </div> 
      <div className="card" onClick={()=>handleClick("Profile Views")}> 
        <div>Profile Views <br/><b>4</b></div> 
        <div className="icon">👤</div> </div>
         </div> <div className="row"> <div className="card" onClick={()=>handleClick("Add Product")}>
           <div>Add Product</div> <div className="icon">➕</div>
            </div> <div className="card" onClick={()=>handleClick("Post Job")}>
               <div>Post Job</div> <div className="icon">💼</div> 
               </div> </div> <div className="buttons">
                 <button className="btn" onClick={()=>handleClick("Add Product Button")}> Add Product </button>
                  <button className="btn" onClick={()=>handleClick("Post Job Button")}> Post Job </button> 
                  </div> </div> </div> </div>
                   </>
            
  );
};

export default SellerDashboard;