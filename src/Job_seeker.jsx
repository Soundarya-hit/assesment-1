import React, { useState } from "react";

const Job_seeker = () => {
  const [activeMenu, setActiveMenu] = useState("My Profile");
  const [activeTab, setActiveTab] = useState("Resume");

  return (
    <div style={styles.container}>
      {/* 🔥 TOP BAR */}
      <div style={styles.topBar}>
        <div style={styles.title}>Job Seeker Profile</div>

        <div style={styles.topIcons}>
          <input style={styles.search} placeholder="" />
          <div style={styles.icon}>🔍</div>
          <div style={styles.icon}>👤</div>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div style={styles.main}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          {["My Profile", "My Applications", "User Reports"].map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveMenu(item)}
              style={{
                ...styles.menuItem,
                background:
                  activeMenu === item ? "#dcdcdc" : "transparent",
              }}
            >
              <span style={styles.menuIcon}>
                {i === 0 ? "👤" : i === 1 ? "📄" : "📊"}
              </span>
              {item}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.content}>
          {/* TABS */}
          <div style={styles.tabs}>
            <div
              onClick={() => setActiveTab("My Applications")}
              style={{
                ...styles.tab,
                background:
                  activeTab === "My Applications"
                    ? "#ee9999"
                    : "linear-gradient(135deg, #ce0ce7, #f3f709)",
              }}
            >
              My Applications
            </div>

            <div
              onClick={() => setActiveTab("Resume")}
              style={{
                ...styles.tab,
                background:
                  activeTab === "Resume" ? "linear-gradient(135deg, #ce0ce7, #f3f709)" : "#e0b75d",
              }}
            >
              Resume
            </div>
          </div>

          {/* CONTENT BOX */}
          <div style={styles.box}>
            <h3>Resume</h3>

            <button style={styles.uploadBtn}>
              👤 Upload Resume
            </button>

            {/* JOB LIST */}
            <div style={styles.jobRow}>
              <span>Job#1</span>
              <span>
                Applied ▼
              </span>
            </div>

            <div style={styles.jobRow}>
              <span>Job#2</span>
              <span>
                Interview Scheduled ✔
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  /* TOP BAR */
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    background: "#0e0d0d",
  },

  title: {
    fontWeight: "bold",
  },

  topIcons: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  search: {
    width: "120px",
    height: "25px",
    border: "1px solid #ccc",
  },

  icon: {
    fontSize: "16px",
    cursor: "pointer",
  },

  /* MAIN */
  main: {
    display: "flex",
    flex: 1,
  },

  /* SIDEBAR */
  sidebar: {
    width: "220px",
    borderRight: "1px solid #ccc",
    background: "#0a0a0a",
  },

  menuItem: {
    padding: "15px",
    borderBottom: "1px solid #ccc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color:"orange",
  },

  menuIcon: {
    marginRight: "10px",
  },

  /* CONTENT */
  content: {
    flex: 1,
    padding: "20px",
  },

  tabs: {
    display: "flex",
    gap: "5px",
    marginBottom: "10px",
  },

  tab: {
    padding: "10px 15px",
    cursor: "pointer",
    border: "1px solid #ccc",
  },

  box: {
    border: "1px solid #ccc",
    padding: "20px",
    background: "#070707",
  },

  uploadBtn: {
    padding: "8px 12px",
    background: "#ceaa36",
    border: "none",
    margin: "10px 0",
    cursor: "pointer",
  },

  jobRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderTop: "1px solid #ccc",
  },
};

export default Job_seeker;