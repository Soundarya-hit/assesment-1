import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Job_details = () => {
  const location = useLocation();
  const job = location.state || {};

  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = () => {
    alert("Application Submitted Successfully!");
    console.log("Resume:", resume);
  };

  return (
    <div style={styles.page}>

      {/* TOP BAR */}
      <div style={styles.topBar}>
        Job Details & Apply
      </div>

      {/* MAIN CONTAINER */}
      <div style={styles.container}>

        {/* JOB TITLE (LEFT CORNER) */}
        <h2 style={styles.title}>{job.title}</h2>

        <div style={styles.line}></div>

        <p><b>Company:</b> {job.company}</p>
        <p><b>Location:</b> {job.location}</p>
        <p><b>Salary:</b> {job.salary}</p>

        <div style={styles.line}></div>

        <div style={styles.descriptionBox}>
          {job.description || "No description available"}
        </div>

        <div style={styles.line}></div>

        <div style={{ textAlign: "center" }}>
          <button style={styles.applyBtn}>
            Apply Now
          </button>
        </div>

        <div style={styles.line}></div>

        <div style={styles.actions}>

          <label style={styles.uploadBtn}>
            Upload Resume
            <input type="file" hidden onChange={handleFileChange} />
          </label>

          <button style={styles.submitBtn} onClick={handleSubmit}>
            Submit Application
          </button>

        </div>

      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial",
  },

  topBar: {
    background: "#111827",
    padding: "20px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
    borderBottom: "1px solid gray",
  },

  container: {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "10px",
  },

  title: {
    textAlign: "left",
    marginBottom: "10px",
  },

  line: {
    height: "1px",
    background: "rgba(255,255,255,0.2)",
    margin: "15px 0",
  },

  descriptionBox: {
    padding: "15px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "8px",
    minHeight: "120px",
  },

  applyBtn: {
    padding: "12px 25px",
    background: "linear-gradient(135deg, #f594ed, #eee01a)",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "10px",
  },

  uploadBtn: {
    flex: 1,
    textAlign: "center",
    padding: "12px",
    background: "#2563eb",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  submitBtn: {
    flex: 1,
    padding: "12px",
    background: "#16a34a",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Job_details;