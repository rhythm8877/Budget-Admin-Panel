"use client"

import { useState } from "react"
import "../styles/Dashboard.css"
import ApprovedProject from "./Approved Project/ApprovedProject"
import BudgetryInitiative from "./Budgetry Initiative/BudgetryInitiative"
import OthersForm from "./Others Form/OthersForm"
import OthersStatement from "./Others Statement/OthersStatement"
import PlanningForm from "./Planning Form/PlanningForm"
import ProjectApproval from "./Project Approval/ProjectApproval"
import SessionBudgetDescriptive from "./Session Budget Descriptive/SessionBudgetDescriptive"
import SessionBudget from "./Session Budget/SessionBudget"
import Sidebar from "./Sidebar"
import StatePlan from "./State Plan/StatePlan"

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Budgetry Initiative")

  const renderSection = () => {
    switch (activeSection) {
      case "Budgetry Initiative":
        return <BudgetryInitiative />
      case "Others Form":
        return <OthersForm />
      case "Planning Form":
        return <PlanningForm />
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
        return <BudgetryInitiative />
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