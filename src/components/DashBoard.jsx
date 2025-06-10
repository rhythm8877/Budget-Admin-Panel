"use client"

import { useState } from "react"
import "../styles/Dashboard.css"
import MonthlyBudget from "./Monthly Budget/MonthlyBudget"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Monthly Budget")

  const renderSection = () => {
    switch (activeSection) {
      case "Monthly Budget":
        return <MonthlyBudget />
      default:
        return <MonthlyBudget />
    }
  }

  return (
    <div className="dashboard-grid">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default Dashboard