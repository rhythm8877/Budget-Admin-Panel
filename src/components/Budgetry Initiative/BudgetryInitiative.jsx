"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import "./BudgetryInitiative.css";

const BudgetryInitiative = () => {
  // Generate session options dynamically based on current date
  const generateSessionOptions = () => {
    const options = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11 (0 is January)
    const currentYear = currentDate.getFullYear();
    
    // Calculate the current financial year
    // If current month is January to March (0-2), we're in the previous year's financial year
    // Otherwise, we're in the current year's financial year
    const currentFinancialYearStart = currentMonth < 3 ? currentYear - 1 : currentYear;
    
    // Generate options from 2015-16 up to current financial year + 1
    for (let year = 2015; year <= currentFinancialYearStart + 1; year++) {
      const session = `${year}-${(year + 1).toString().slice(-2)}`;
      options.push({ value: session, label: session });
    }
    
    return options;
  };
  
  // Get current financial year
  const getCurrentFinancialYear = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11
    const currentYear = currentDate.getFullYear();
    const financialYearStart = currentMonth < 3 ? currentYear - 1 : currentYear;
    return `${financialYearStart}-${(financialYearStart + 1).toString().slice(-2)}`;
  };
  
  const [selectedSession, setSelectedSession] = useState(() => {
    const currentFY = getCurrentFinancialYear();
    return { value: currentFY, label: currentFY };
  });

  const [budgetData, setBudgetData] = useState([
    { id: 1, name: "State share to CSS/NEC/NLCPR", approvedOutlays: "", isSubmitted: false },
    { id: 2, name: "Land bank", approvedOutlays: "", isSubmitted: false },
    { id: 3, name: "CMCF", approvedOutlays: "", isSubmitted: false },
    { id: 4, name: "Monitoring Cell", approvedOutlays: "", isSubmitted: false },
    { id: 5, name: "GIS and Remote Sensing Centre", approvedOutlays: "", isSubmitted: false },
    { id: 6, name: "Implementation of SDG New Initiatives", approvedOutlays: "", isSubmitted: false },
    { id: 7, name: "Innovative programme/activities", approvedOutlays: "", isSubmitted: false },
    { id: 8, name: "High Level District Dev. Review", approvedOutlays: "", isSubmitted: false },
    { id: 9, name: "Gender Budgeting", approvedOutlays: "", isSubmitted: false },
    { 
      id: 10, 
      name: "Budget Initiative", 
      approvedOutlays: "", 
      isSubmitted: false,
      isParent: true,
      subProjects: [
        { id: 10.1, name: "i. Development in Interstate Border Areas", approvedOutlays: "", isSubmitted: false },
        { id: 10.2, name: "ii. Training for Public Servants and Authorities", approvedOutlays: "", isSubmitted: false },
        { id: 10.3, name: "iii. Nagaland Skill Mission", approvedOutlays: "", isSubmitted: false },
        { id: 10.4, name: "iv. Nagaland Solar Mission", approvedOutlays: "", isSubmitted: false },
        { id: 10.5, name: "v. Chief Minister Fellowship Programme", approvedOutlays: "", isSubmitted: false },
        { id: 10.6, name: "vi. Living Morung (Research & promotion of indigenous culture and tradition)", approvedOutlays: "", isSubmitted: false },
        { id: 10.7, name: "vii. NST Station Basic Amenities", approvedOutlays: "", isSubmitted: false },
        { id: 10.8, name: "viii. Drone School", approvedOutlays: "", isSubmitted: false },
        { id: 10.9, name: "ix. GST RFID Check Post & Intelligence Network", approvedOutlays: "", isSubmitted: false }
      ]
    }
  ]);

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('budgetryInitiativeData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setBudgetData(parsedData);
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, []);

  const [newSubProject, setNewSubProject] = useState("");

  // Handle input change for approved outlays
  const handleOutlaysChange = (id, value) => {
    // Allow only numbers and a single decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      const updatedData = budgetData.map(item => 
        item.id === id ? { ...item, approvedOutlays: value } : item
      );
      setBudgetData(updatedData);
    }
  };

  // Handle input change for sub-project approved outlays
  const handleSubProjectOutlaysChange = (mainId, subId, value) => {
    // Allow only numbers and a single decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      const updatedData = budgetData.map(item => {
        if (item.id === mainId && item.subProjects) {
          const updatedSubProjects = item.subProjects.map(subItem =>
            subItem.id === subId ? { ...subItem, approvedOutlays: value } : subItem
          );
          return { ...item, subProjects: updatedSubProjects };
        }
        return item;
      });
      setBudgetData(updatedData);
    }
  };

  // Handle submit for a specific row
  const handleSubmit = (id) => {
    const itemToUpdate = budgetData.find(item => item.id === id);
    
    // Format the amount to add "00" if it ends with a decimal point
    let formattedAmount = itemToUpdate.approvedOutlays;
    if (formattedAmount.endsWith('.')) {
      formattedAmount = formattedAmount + "00";
    }
    
    const updatedData = budgetData.map(item => 
      item.id === id ? { ...item, approvedOutlays: formattedAmount, isSubmitted: true } : item
    );
    
    setBudgetData(updatedData);
    
    // Save to localStorage if this is the State share to CSS/NEC/NLCPR
    if (itemToUpdate.name === "State share to CSS/NEC/NLCPR") {
      try {
        localStorage.setItem('budgetryInitiativeData', JSON.stringify(updatedData));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  };

  // Handle submit for a sub-project
  const handleSubProjectSubmit = (mainId, subId) => {
    const mainItem = budgetData.find(item => item.id === mainId);
    if (!mainItem || !mainItem.subProjects) return;
    
    const subItem = mainItem.subProjects.find(item => item.id === subId);
    if (!subItem) return;
    
    // Format the amount to add "00" if it ends with a decimal point
    let formattedAmount = subItem.approvedOutlays;
    if (formattedAmount.endsWith('.')) {
      formattedAmount = formattedAmount + "00";
    }
    
    const updatedData = budgetData.map(item => {
      if (item.id === mainId && item.subProjects) {
        const updatedSubProjects = item.subProjects.map(subItem =>
          subItem.id === subId ? { ...subItem, approvedOutlays: formattedAmount, isSubmitted: true } : subItem
        );
        return { ...item, subProjects: updatedSubProjects };
      }
      return item;
    });
    
    setBudgetData(updatedData);
    
    // Save to localStorage after any update
    try {
      localStorage.setItem('budgetryInitiativeData', JSON.stringify(updatedData));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  // Add a new sub-project
  const handleAddSubProject = () => {
    if (!newSubProject.trim()) return;
    
    const budgetInitiativeItem = budgetData.find(item => item.name === "Budget Initiative");
    if (!budgetInitiativeItem) return;
    
    const newSubId = budgetInitiativeItem.subProjects.length + 10.1;
    const numeral = budgetInitiativeItem.subProjects.length + 1;
    const numeralStr = toRoman(numeral);
    
    const updatedData = budgetData.map(item => {
      if (item.id === 10) {
        return {
          ...item,
          subProjects: [
            ...item.subProjects,
            { 
              id: newSubId, 
              name: `${numeralStr}. ${newSubProject}`, 
              approvedOutlays: "", 
              isSubmitted: false 
            }
          ]
        };
      }
      return item;
    });
    
    setBudgetData(updatedData);
    setNewSubProject("");
  };

  // Convert number to Roman numeral
  const toRoman = (num) => {
    const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv"];
    return romanNumerals[num - 1] || num.toString();
  };

  // Calculate total amount from submitted values
  const calculateTotal = () => {
    let total = 0;
    
    // Add up all main items (excluding parent items)
    budgetData.forEach(item => {
      if (item.isSubmitted && !item.isParent) {
        total += parseFloat(item.approvedOutlays) || 0;
      }
      
      // Add up all sub-projects
      if (item.subProjects) {
        item.subProjects.forEach(subItem => {
          if (subItem.isSubmitted) {
            total += parseFloat(subItem.approvedOutlays) || 0;
          }
        });
      }
    });
    
    return total;
  };

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return num; // Return the number as is, preserving trailing zeros
  };

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: '200px',
      border: '1px solid var(--border-color)',
      borderRadius: '6px',
      fontSize: '14px',
      '&:hover': {
        borderColor: 'var(--primary-color)'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--primary-color)' : 'white',
      color: state.isSelected ? 'white' : '#333',
      '&:hover': {
        backgroundColor: state.isSelected ? 'var(--primary-color)' : 'var(--primary-light)'
      }
    })
  };

  const total = calculateTotal();
  const formattedTotal = total.toFixed(2);

  return (
    <div className="budgetry-initiative-container">
      <header>
        <div className="logo-text">Budgetry Initiative</div>
      </header>

      <div className="data-container">
        <div className="control-panel-filters">
          <div className="session-selector">
            <span className="label-text">Financial Year:</span>
            <Select
              value={selectedSession}
              onChange={setSelectedSession}
              options={generateSessionOptions()}
              styles={customSelectStyles}
              isSearchable={false}
              placeholder="Select Session"
            />
          </div>
        </div>

        <div className="table-container">
          <div className="table-header">
            <span className="rs-in-lakh">Rs. in lakh</span>
          </div>
          <table>
            <thead>
              <tr>
                <th className="sl-no-column">Sl.No</th>
                <th className="others-column">Others</th>
                <th className="amount-column">
                  Approved Outlays for<br />{selectedSession.value}
                </th>
              </tr>
            </thead>
            <tbody>
              {budgetData.map((item) => (
                <>
                  <tr key={item.id} className={item.isParent ? "parent-row" : ""}>
                    <td className="sl-no-column">{item.id}</td>
                    <td className="others-column">{item.name}</td>
                    <td className="approved-outlays-column">
                      {!item.isParent && (
                        item.isSubmitted ? (
                          <div className="currency-display">
                            <span className="currency-symbol">₹</span>
                            <span className="amount-text">{formatNumber(item.approvedOutlays)}</span>
                          </div>
                        ) : (
                          <div className="input-with-button">
                            <div className="currency-input-container">
                              <span className="currency-symbol">₹</span>
                              <input
                                type="text"
                                className="number-input"
                                value={item.approvedOutlays}
                                onChange={(e) => handleOutlaysChange(item.id, e.target.value)}
                                placeholder="Enter amount"
                              />
                            </div>
                            <button 
                              className="submit-button"
                              onClick={() => handleSubmit(item.id)}
                              disabled={!item.approvedOutlays}
                            >
                              Submit
                            </button>
                          </div>
                        )
                      )}
                    </td>
                  </tr>
                  
                  {item.subProjects && item.subProjects.map((subItem) => (
                    <tr key={subItem.id} className="sub-project-row">
                      <td className="sl-no-column"></td>
                      <td className="others-column sub-project-name">{subItem.name}</td>
                      <td className="approved-outlays-column">
                        {subItem.isSubmitted ? (
                          <div className="currency-display">
                            <span className="currency-symbol">₹</span>
                            <span className="amount-text">{formatNumber(subItem.approvedOutlays)}</span>
                          </div>
                        ) : (
                          <div className="input-with-button">
                            <div className="currency-input-container">
                              <span className="currency-symbol">₹</span>
                              <input
                                type="text"
                                className="number-input"
                                value={subItem.approvedOutlays}
                                onChange={(e) => handleSubProjectOutlaysChange(item.id, subItem.id, e.target.value)}
                                placeholder="Enter amount"
                              />
                            </div>
                            <button 
                              className="submit-button"
                              onClick={() => handleSubProjectSubmit(item.id, subItem.id)}
                              disabled={!subItem.approvedOutlays}
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  
                  {item.subProjects && (
                    <tr className="add-sub-project-row">
                      <td className="sl-no-column"></td>
                      <td className="others-column">
                        <div className="add-sub-project-container">
                          <input
                            type="text"
                            className="text-input"
                            value={newSubProject}
                            onChange={(e) => setNewSubProject(e.target.value)}
                            placeholder="Enter new sub-project name"
                          />
                          <button 
                            className="add-button"
                            onClick={handleAddSubProject}
                            disabled={!newSubProject.trim()}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="approved-outlays-column"></td>
                    </tr>
                  )}
                </>
              ))}
              <tr className="total-row">
                <td className="sl-no-column"></td>
                <td className="total-label">Total: Others</td>
                <td className="total-amount">
                  ₹{formattedTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetryInitiative;
