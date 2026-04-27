import React from "react";


const Adminpage = () => {
  return (
    <div style={styles.container}>
      {/* 🔥 TOP BAR */}
      <div style={styles.topBar}>
        <div style={styles.title}>Admin Dashboard</div>

        <div style={styles.searchContainer}>
          <div style={styles.searchBox}>
            🔍
            <input style={styles.input} placeholder="Search..." />
          </div>

          <div style={styles.searchBox}>
            🔍
            <input style={styles.input} placeholder="Search..." />
          </div>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div style={styles.main}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <div style={styles.menuItem}>    👤 Manage Sellers</div>
          <div style={styles.menuItem}>   📦 Manage Products</div>
          <div style={styles.menuItem}>✅ Job Approvals</div>
          <div style={styles.menuItem}>📊User Reports</div>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.content}>
          {/* STATS */}
         <div style={styles.statsBar}>
  <div style={styles.statItem}>
    <h3>50</h3>
    <p>Pangtee Sellers</p>
  </div>

  <div style={styles.divider}></div>

  <div style={styles.statItem}>
    <h3>12</h3>
    <p>Active Jobs</p>
  </div>

  <div style={styles.divider}></div>

  <div style={styles.statItem}>
    <h3>📊</h3>
    <p>Site Analytics</p>
  </div>
</div>

          {/* GRAPH */}
          <div style={styles.graphBox}>
            <svg width="100%" height="150">
              <polyline
                fill="none"
                stroke="gray"
                strokeWidth="3"
                points="0,120 50,100 100,130 150,80 200,110 250,90 300,70 350,100 400,60"
              />
            </svg>
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
    background : " #d3caca",
  },

  /* TOP BAR */
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #131212",
    background: "#f8f3f3",
  },

  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: "32px",
  },

  searchContainer: {
    display: "flex",
    gap: "10px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "5px 8px",
    borderRadius: "4px",
    background: "#fdf9f9",
  },

  input: {
    border: "none",
    outline: "none",
    marginLeft: "5px",
  },

  /* MAIN */
  main: {
    display: "flex",
    flex: 1,
  },

  /* SIDEBAR */
  sidebar: {
    width: "220px",
    borderRight: "1px solid #2c2929",
    background: "transparent",
  },

  menuItem: {
    padding: "15px",
    borderBottom: "1px solid #202020",
    cursor: "pointer",
    color:"#1d1c1c",
  },

  /* CONTENT */
  content: {
    flex: 1,
    padding: "20px",
  },

 statsBar: {
  display: "flex",
  alignItems: "center",
  background: "transparent",
  border: "1px solid #161616",
  marginBottom: "20px",
  color:"#1d1c1c",
},

statItem: {
  flex: 1,
  textAlign: "center",
  padding: "15px",
},

divider: {
  width: "1px",
  height: "50px",
  background: "#161616",
},

  card: {
    flex: 1,
    background: "#1b1a1a",
    padding: "15px",
    textAlign: "center",
    border: "1px solid #ccc",
  },

  graphBox: {
    background: "#ada8a8",
    padding: "20px",
    border: "1px solid #201f1f",
  },
};

export default Adminpage;