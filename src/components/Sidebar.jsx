"use client";

import "../styles/Sidebar.css";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    {
      id: "Monthly Budget",
      label: "Monthly Budget",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    }
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        {/* <img src="/logo.svg" alt="Kohima Science College" className="logo" /> */}
        <div className="logo-text">
          <span className="college-name">Budget</span>
          <span className="college-type">Admin Panel</span>
        </div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeSection === item.id ? "active" : ""}`}
            onClick={() => setActiveSection(item.id)}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* <div className="logout-container">
        <div className="nav-item">
          <div className="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </div>
          <span className="nav-label">Logout</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
