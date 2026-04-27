import React, { useState, useRef, useEffect, useMemo } from "react";

const Jobslist = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [theme, setTheme] = useState("professional");
  const [page, setPage] = useState("jobs");
  const [selectedJob, setSelectedJob] = useState(null);

  const [resume, setResume] = useState(null);

  const openJobDetails = (job) => {
    setSelectedJob(job);
    setPage("details");
  };

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
  if (search.trim() === "") {
    setShowResults(false);
    setSelectedJob(null);   // ✅ clears right panel
  }
}, [search]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  const handleSearch = () => {
    if (search.trim() !== "") setShowResults(true);
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = () => {
    alert("Application Submitted Successfully!");
    console.log("Resume:", resume);
  };

  const caps = useMemo(() => Array.from({ length: 25 }), []);
  const papers = useMemo(() => Array.from({ length: 25 }), []);
  const sparkles = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <div className={`job-page ${theme}`}>

<style>{`
/* ================= YOUR ORIGINAL CSS ================= */
.job-page { min-height: 100vh;
 height: auto; padding: 40px;
 color: #fff; position: relative; 
 overflow-x: hidden; 
 font-family: Arial; 
 background: #cfcdcd;}



.bg-layer { position: fixed; 
top:0; left:0; width:100%; height:100%; 
z-index:0; pointer-events:none; }

.cap, .paper, .sparkle { position:absolute; 
top:-50px; opacity:0.6; }

.search-container { display:flex; 
gap:15px; justify-content:center; 
margin-top:20px; flex-wrap:wrap;
 z-index:2; position:relative; }
.input-box { padding:14px 18px;
 border-radius:0px; border:none; width:260px; }
.search-btn { padding:14px 20px; 
border-radius:0px; border:none;
 background: #b8aeae; color:white; }
.search-btn.active { background: linear-gradient(135deg,#f594ed,#eee01a); }

.jobs { margin-top:20px; display:grid; 
grid-template-columns:repeat(1,minmax(250px,1fr));
 gap:20px; z-index:2; position:relative; }

.job-card {
  background: rgb(153, 149, 149);
  padding: 20px;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.job-left { display: flex; flex-direction: column; gap: 5px; }
.job-title { font-size: 18px; font-weight: bold; }

.job-right { display: flex; align-items: center; }

.view-btn {
  padding: 10px 16px;
  border: none;
  border-radius: 0px;
  background: linear-gradient(135deg, #b3bbb6, #818884);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.view-btn:hover { transform: scale(1.05); opacity: 0.9; }

.empty-text { text-align:center; margin-top:50px; color:gray; }

.left-side {
  flex: 1;

  background: rgba(243, 238, 238, 0.05);  /* ✅ light glass effect */
  padding: 20px;                       /* spacing inside */
  border-radius: 6px;                  /* optional (remove if you want sharp edges) */
}

/* DETAILS */
.container {
  margin-top: 20px;
  padding: 20px;             /* increased spacing */
  background: rgba(247, 238, 238, 0.2);
  width: 100%;               /* ✅ full width */
  max-width: 100%;           /* ✅ prevent overflow */
  box-sizing: border-box;    /* ✅ important */
}
.line { height:1px; 
background:rgba(255,255,255,0.2); 
margin:15px 0; }
.descriptionBox { padding:15px;
 background:rgba(255,255,255,0.08);
  border-radius:0px; min-height:120px; }
.applyBtn { padding:8px 10px;
 background:linear-gradient(135deg,#f594ed,#eee01a);
  border:none; border-radius:0px; font-weight:bold; }
.actions { display:flex; gap:10px; }
.uploadBtn { flex:1; text-align:center;
 padding:8px 10px; background:#2563eb;
  border-radius:0px; cursor:pointer; }
.submitBtn { flex:1; padding:8px 10px;
 background:#16a34a; border:none; border-radius:0px;
  color:white; }

/* ✅ NEW ONLY LAYOUT CSS */
/* ✅ TOP BAR IMPROVED */
.top-header {
  background: #a0a2a5;
  padding: 15px 25px;

  display: flex;                 /* 🔥 main layout */
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid gray;
}

/* LEFT SIDE */
.header-left {
  font-size: 38px;               /* ✅ bigger font */
  font-weight: bold;
}

/* RIGHT SIDE */
.header-right {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* INPUTS */
.top-search {
  padding: 8px 12px;
  border: 2px solid black;
  outline: none;
  border-radius: 4px;
}

/* SEARCH BUTTON */
.top-search-btn {
  padding: 8px 12px;
  border: none;
  background: gray;
  color: black;
  cursor: pointer;
  border-radius: 4px;
}

.main-layout {
  display:flex;
  gap:40px;
  position:relative;
  z-index:2;
}
/* RIGHT SIDE */
.right-side {
  flex: 1;
  border-left: 1px solid rgba(121, 115, 115, 0.94);
  padding-left: 20px;
  overflow: hidden;          /* ✅ stops overflow */
}

/* LEFT SIDE (optional spacing) */
.left-side {
  flex: 1;
  padding-right: 20px;
}

.right-topbar {
  background: #b7b8bb;
  padding: 15px 20px;

  text-align: left;          /* ✅ move to left */
  font-size: 32px;           /* optional bigger */
  font-weight: bold;

  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.container h2 {
  text-align: left;     /* ✅ force left alignment */
  margin: 0 0 10px 0;   /* optional clean spacing */
  font-size: 32px;
  color: #666;
}

`}</style>

      {/* BACKGROUND */}
     

      <div className="top-header">

  {/* LEFT SIDE */}
  <div className="header-left">
    Job Listings Page
  </div>

  {/* RIGHT SIDE */}
  <div className="header-right">
    <input type="text" placeholder="Search..." className="top-search" />
    <input type="text" placeholder="Location..." className="top-search" />
    <button className="top-search-btn">🔍</button>
  </div>

</div>

      {/* ✅ MAIN SPLIT */}
      <div className="main-layout">

        {/* LEFT SIDE */}
        <div className="left-side">

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

          {showResults ? (
            <div className="jobs">
              {filteredJobs.map((job, index) => (
                <div className="job-card" key={index}>
                  <div className="job-left">
                    <div className="job-title">{job.title}</div>
                    <div>{job.company}</div>
                    <div>{job.location}</div>
                    <div>{job.salary}</div>
                  </div>

                  <div className="job-right">
                    <button
                      className="view-btn"
                      onClick={() => openJobDetails(job)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-text">Start searching 🎯</p>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">
           {/* ✅ RIGHT SIDE TOP BAR */}
  <div className="right-topbar">
    Job Details & Apply
  </div>

          {selectedJob && search ? (
  <div className="container">
              <h2>{selectedJob.title}</h2>

              <div className="line"></div>

              <p><b>Company:</b> {selectedJob.company}</p>
              <p><b>Location:</b> {selectedJob.location}</p>
              <p><b>Salary:</b> {selectedJob.salary}</p>

              <div className="line"></div>

              <div className="descriptionBox">
                {selectedJob.description || "No description available"}
              </div>

              <div className="line"></div>

              <div style={{ textAlign: "center" }}>
                <button className="applyBtn">Apply Now</button>
              </div>

              <div className="line"></div>

              <div className="actions">
                <label className="uploadBtn">
                  Upload Resume
                  <input type="file" hidden onChange={handleFileChange} />
                </label>

                <button className="submitBtn" onClick={handleSubmit}>
                  Submit Application
                </button>
              </div>

            </div>
          ) : (
            <p className="empty-text">Select a job to view details</p>
          )}

        </div>

      </div>
    </div>
  );
};

export default Jobslist;