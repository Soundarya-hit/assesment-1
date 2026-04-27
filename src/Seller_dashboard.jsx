import React, { useState } from "react";
import {
  FaHome,
  FaBox,
  FaBriefcase,
  FaEye,
  FaCrown,
} from "react-icons/fa";

const SellerDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "My Products", icon: <FaBox /> },
    { name: "Job Listings", icon: <FaBriefcase /> },
    { name: "Profile Views", icon: <FaEye /> },
    { name: "Membership", icon: <FaCrown /> },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <>
            {/* ✅ NOW placed correctly */}
            <h2 style={styles.welcome}>Welcome, Seller</h2>

            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <p>Total Products</p>
                <h3>$</h3>
              </div>

              <div style={styles.card}>
                <p>Profile Views</p>
                <h3>4</h3>
              </div>
            </div>

            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <p>Add Product</p>
                <div style={styles.iconBox}>▶</div>
              </div>

              <div style={styles.card}>
                <p>Post Job</p>
                <div style={styles.iconBox}>📅</div>
              </div>
            </div>

            <div style={styles.buttonContainer}>
              <button style={styles.button}>Add Product</button>
              <button style={styles.button}>Post Job</button>
            </div>
          </>
        );

      case "My Products":
        return <h2>📦 My Products Page</h2>;

      case "Job Listings":
        return <h2>💼 Job Listings Page</h2>;

      case "Profile Views":
        return <h2>👁 Profile Views Page</h2>;

      case "Membership":
        return <h2>👑 Membership Page</h2>;

      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* 🔥 Top Header */}
      <div style={styles.header}>
        <h2 style={styles.headerText}>Seller Dashboard</h2>
      </div>

      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.menu}>
            {menuItems.map((item) => (
              <div
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                style={{
                  ...styles.menuItem,
                  backgroundColor:
                    activeMenu === item.name ? "#000" : "transparent",
                  color: activeMenu === item.name ? "#fff" : "#000",
                }}
              >
                <span style={styles.icon}>{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div style={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default SellerDashboard;

const styles = {
  wrapper: {
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    height: "65px",
    backgroundColor: "#e0e0e0",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    borderBottom: "1px solid #616161",
  },

  headerText: {
    fontSize: "38px",
    fontWeight: "bold",
    margin: 0,
  },

  container: {
    display: "flex",
    height: "calc(100vh - 90px)",
  },

  sidebar: {
    width: "220px",
    backgroundColor: "#a3a2a2",
    padding: "20px 10px",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "0.3s",
    color: "#000",
  },

  icon: {
    fontSize: "18px",
  },

  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#d8d4d4",
  },

  /* 🔥 NEW POSITION STYLE */
  welcome: {
    marginBottom: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    padding: "40px 15px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "30px",
  },

  iconBox: {
    fontSize: "30px",
    backgroundColor: "#ccc",
    padding: "20px 10px",
    borderRadius: "4px",
  },

  buttonContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },

  button: {
    flex: 1,
    padding: "20px 12px",
    backgroundColor: "#555",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "22px",
  },
};