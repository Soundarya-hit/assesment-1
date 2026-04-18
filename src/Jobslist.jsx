import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Jobslist = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [theme, setTheme] = useState("professional");

  const inputRef = useRef(null);

  const [jobs, setJobs] = useState([
  {
    title: "Chef",
    company: "Green Hotel",
    location: "Chennai",
    salary: "₹18,000 - ₹30,000"
  },
  {
    title: "Assistant Cook",
    company: "QuickBite Kitchens",
    location: "Bangalore",
    salary: "₹12,000 - ₹20,000"
  }
]);

  useEffect(() => {
    if (search.trim() === "") setShowResults(false);
  }, [search]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  const handleSearch = () => {
    if (search.trim() !== "") setShowResults(true);
  };

  // ✅ Stable background elements (NO flicker)
  const caps = useMemo(() => Array.from({ length: 25 }), []);
  const papers = useMemo(() => Array.from({ length: 25 }), []);
  const sparkles = useMemo(() => Array.from({ length: 30 }), []);
  const addJob = (newJob) => {
  setJobs([...jobs, newJob]);
};

  return (
    <div className={`job-page ${theme}`}>

     <style>{`
/* ================= BASE ================= */
.job-page {
  min-height: 100vh;   /* ✅ full screen */
  height: auto;        /* ✅ expands with content */
  padding: 40px;
  color: #fff;
  position: relative;
  overflow-x: hidden;  /* ✅ prevent side scroll */
  font-family: Arial, sans-serif;
}

/* ================= THEMES ================= */
.professional {
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.clean {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  color: #111;
}

.dark {
  background: #020617;
}

/* ================= BACKGROUND FIX ================= */
.bg-layer {
  position: fixed;   /* ✅ IMPORTANT FIX */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* ================= 🎓 CAPS ================= */
.cap {
  position: absolute;
  top: -50px;
  opacity: 0.6;
  font-size: 24px;
  animation: fallDown linear infinite;
}

@keyframes fallDown {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0;
  }
  10% { opacity: 0.6; }
  100% {
    transform: translateY(120vh) rotate(360deg); /* ✅ extended */
    opacity: 0;
  }
}

/* ================= 📄 PAPERS ================= */
.paper {
  position: absolute;
  top: -60px;
  opacity: 0.5;
  font-size: 20px;
  animation: fallPaper linear infinite;
}

@keyframes fallPaper {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateY(120vh) rotate(-360deg); /* ✅ extended */
    opacity: 0;
  }
}

/* ================= ✨ SPARKLES ================= */
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: gold;
  border-radius: 50%;
  opacity: 0.6;
  animation: sparkleMove linear infinite;
}

@keyframes sparkleMove {
  0% {
    transform: translateY(-10vh) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(120vh) scale(1.2); /* ✅ extended */
    opacity: 0;
  }
}

/* ================= UI ================= */
.search-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 80px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.input-box {
  padding: 14px 18px;
  border-radius: 6px;
  border: none;
  width: 260px;
  outline: none;
}

.search-btn {
  padding: 14px 20px;
  border-radius: 6px;
  border: none;
  background: gray;
  color: white;
  cursor: not-allowed;
}

.search-btn.active {
  background: linear-gradient(135deg, #f594ed, #eee01a);
  cursor: pointer;
}

.jobs {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 2;
}

.job-card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 0px;
  backdrop-filter: blur(10px);
}

.theme-switcher {
  position: relative; /* ✅ stays top */
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 3;
}

.theme-btn {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.empty-text {
  text-align: center;
  margin-top: 50px;
  color: gray;
  position: relative;
  z-index: 2;
}
`}</style>

      {/* 🎓 BACKGROUND LAYER */}
      <div className="bg-layer">
        {caps.map((_, i) => (
          <span
            key={`cap-${i}`}
            className="cap"
            style={{
              left: `${(i * 4) % 100}%`,
              animationDuration: `${4 + (i % 4)}s`,
              animationDelay: `${i % 3}s`,
              fontSize: `${18 + (i % 10)}px`,
            }}
          >
            🎓
          </span>
        ))}

        {papers.map((_, i) => (
          <span
            key={`paper-${i}`}
            className="paper"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDuration: `${5 + (i % 5)}s`,
              animationDelay: `${i % 3}s`,
            }}
          >
            📄
          </span>
        ))}

        {sparkles.map((_, i) => (
          <span
            key={`spark-${i}`}
            className="sparkle"
            style={{
              left: `${(i * 3) % 100}%`,
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${i % 2}s`,
            }}
          />
        ))}
      </div>

      {/* 🎨 THEME SWITCHER */}
      <div className="theme-switcher">
        <button className="theme-btn" onClick={() => setTheme("professional")}>
          Professional
        </button>
        <button className="theme-btn" onClick={() => setTheme("clean")}>
          Clean
        </button>
        <button className="theme-btn" onClick={() => setTheme("dark")}>
          Dark
        </button>
      </div>

      {/* 🔍 SEARCH */}
      <div className="search-container">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search jobs..."
          className="input-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location..."
          className="input-box"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          className={`search-btn ${search ? "active" : ""}`}
          disabled={!search}
          onClick={handleSearch}
        >
          🔍 Search
        </button>
      </div>

      {/* RESULTS */}
      {showResults ? (
        <div className="jobs">
          {filteredJobs.length > 0 ? (
           filteredJobs.map((job, index) => (
  <div className="job-card" key={index}>

    {/* LEFT + RIGHT LAYOUT */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

      {/* LEFT SIDE CONTENT */}
      <div>
        <div>{job.title}</div>
        <div>{job.company}</div>
        <div>{job.location}</div>
        <div>{job.salary}</div>
      </div>

      {/* RIGHT SIDE BUTTON */}
      <button
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          background: "linear-gradient(135deg, #f594ed, #eee01a)",
          fontWeight: "bold",
          whiteSpace: "nowrap"
        }}
        onClick={() => navigate("/job_details", { state: job })}
      >
        View Details
      </button>

    </div>

  </div>
))
          ) : (
            <p className="empty-text">No jobs found</p>
          )}
        </div>
      ) : (
        <p className="empty-text">
          Start searching for your career opportunities 🎯
        </p>
      )}
    </div>
  );
};

export default Jobslist;