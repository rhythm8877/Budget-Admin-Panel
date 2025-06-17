"use client"

import { useState } from "react"
import "../styles/Dashboard.css"
import ApprovedProject from "./Approved Project/ApprovedProject"
import NewProjectForm from "./New Project Form/NewProjectForm"
import OthersForm from "./Others Form/OthersForm"
import PlanningForm from "./Planning Form/PlanningForm"
import SessionBudget from "./Session Budget/SessionBudget"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Others Form")

  const renderSection = () => {
    switch (activeSection) {
      case "Others Form":
        return <OthersForm />
      case "Planning Form":
        return <PlanningForm />
      case "New Project Form":
        return <NewProjectForm />
      case "Approved Project":
        return <ApprovedProject />
      case "Session Budget":
        return <SessionBudget />
      default:
        return <OthersForm />
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