"use client"

import { useState } from "react"
import "../styles/Dashboard.css"
import ApprovedProject from "./Approved Project/ApprovedProject"
import NewProjectForm from "./New Project Form/NewProjectForm"
import OthersForm from "./Others Form/OthersForm"
import OthersStatement from "./Others Statement/OthersStatement"
import PlanningForm from "./Planning Form/PlanningForm"
import ProjectApproval from "./Project Approval/ProjectApproval"
import SessionBudgetDescriptive from "./Session Budget Descriptive/SessionBudgetDescriptive"
import SessionBudget from "./Session Budget/SessionBudget"
import Sidebar from "./Sidebar"
import StatePlan from "./State Plan/StatePlan"

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
      case "Project Approval":
        return <ProjectApproval />
      case "Approved Project":
        return <ApprovedProject />
      case "Session Budget":
        return <SessionBudget />
      case "Session Budget Descriptive":
        return <SessionBudgetDescriptive />
      case "State Plan":
        return <StatePlan />
      case "Others Statement":
        return <OthersStatement />
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