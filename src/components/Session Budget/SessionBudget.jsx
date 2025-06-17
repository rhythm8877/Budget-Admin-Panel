"use client";

import { useState } from "react";
import Select from "react-select";
import "./SessionBudget.css";

const SessionBudget = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({ value: "all", label: "All" });
  const [selectedSession, setSelectedSession] = useState({ value: "2025-26", label: "2025-26" });

  const departmentOptions = [
    { value: "all", label: "All" },
    { value: "agri", label: "Agri & Allied" },
    { value: "rural", label: "Rural Development" },
    { value: "special", label: "Special Area Programme" },
    { value: "irrigation", label: "Irrigation" },
    { value: "energy", label: "Energy" },
    { value: "industries", label: "Industries & Minerals" },
    { value: "transport", label: "Transport" },
    { value: "sctech", label: "Sc & Tech" },
    { value: "geneco", label: "General Eco. Services" },
    { value: "social", label: "Social Services" },
    { value: "general", label: "General Services" }
  ];

  // Generate session options from 2015-16 to current year+1 (2025-26)
  const generateSessionOptions = () => {
    const options = [];
    for (let year = 2015; year <= 2025; year++) {
      const session = `${year}-${(year + 1).toString().slice(-2)}`;
      options.push({ value: session, label: session });
    }
    return options;
  };

  const sessionOptions = generateSessionOptions();

  // Sector names mapping for display in totals
  const sectorNames = {
    "agri": "Agri & Allied",
    "rural": "Rural Development",
    "special": "Special Area Programme",
    "irrigation": "Irrigation",
    "energy": "Energy",
    "industries": "Industries & Minerals",
    "transport": "Transport",
    "sctech": "Sc & Tech",
    "geneco": "General Eco. Services",
    "social": "Social Services",
    "general": "General Services"
  };

  // Initialize budget data structure for all departments
  const budgetData = [
    // Agri & Allied sub-departments (ALL 13 departments)
    { id: 1, mainDept: "agri", departmentName: "Agriculture", approvedOutlays: "500000", earmarked: "300000" },
    { id: 2, mainDept: "agri", departmentName: "Horticulture", approvedOutlays: "350000", earmarked: "200000" },
    { id: 3, mainDept: "agri", departmentName: "Soil & Water Conservation", approvedOutlays: "250000", earmarked: "150000" },
    { id: 4, mainDept: "agri", departmentName: "A.H & Vety Service", approvedOutlays: "420000", earmarked: "320000" },
    { id: 5, mainDept: "agri", departmentName: "Fisheries", approvedOutlays: "180000", earmarked: "120000" },
    { id: 6, mainDept: "agri", departmentName: "Forestry & Wildlife", approvedOutlays: "320000", earmarked: "220000" },
    { id: 7, mainDept: "agri", departmentName: "Cooperation", approvedOutlays: "150000", earmarked: "100000" },
    { id: 8, mainDept: "agri", departmentName: "Land Resources Development", approvedOutlays: "280000", earmarked: "180000" },
    { id: 9, mainDept: "agri", departmentName: "Nagaland Bamboo Dev. Agency", approvedOutlays: "120000", earmarked: "80000" },
    { id: 10, mainDept: "agri", departmentName: "Bio-resource & Aromatic Plant", approvedOutlays: "90000", earmarked: "60000" },
    { id: 11, mainDept: "agri", departmentName: "Bee & Honey Mission", approvedOutlays: "70000", earmarked: "50000" },
    { id: 12, mainDept: "agri", departmentName: "NEPED", approvedOutlays: "110000", earmarked: "80000" },
    { id: 13, mainDept: "agri", departmentName: "Hydroger", approvedOutlays: "85000", earmarked: "65000" },
    
    // Rural Development sub-departments (ALL 3 departments)
    { id: 14, mainDept: "rural", departmentName: "Rural Development", approvedOutlays: "620000", earmarked: "420000" },
    { id: 15, mainDept: "rural", departmentName: "SIRD", approvedOutlays: "180000", earmarked: "120000" },
    { id: 16, mainDept: "rural", departmentName: "Land Revenue", approvedOutlays: "250000", earmarked: "150000" },
    
    // Special Area Programme sub-departments (ALL 3 departments)
    { id: 17, mainDept: "special", departmentName: "Special Development Scheme", approvedOutlays: "380000", earmarked: "280000" },
    { id: 18, mainDept: "special", departmentName: "Local Area Development Programme", approvedOutlays: "420000", earmarked: "320000" },
    { id: 19, mainDept: "special", departmentName: "Development of Under Developed Areas", approvedOutlays: "350000", earmarked: "250000" },
    
    // Irrigation sub-departments (1 department)
    { id: 20, mainDept: "irrigation", departmentName: "Water Resources", approvedOutlays: "480000", earmarked: "380000" },
    
    // Energy sub-departments (ALL 4 departments)
    { id: 21, mainDept: "energy", departmentName: "Distribution & Revenue (D&R)", approvedOutlays: "520000", earmarked: "420000" },
    { id: 22, mainDept: "energy", departmentName: "Transmission & Generation (T&G)", approvedOutlays: "650000", earmarked: "550000" },
    { id: 23, mainDept: "energy", departmentName: "New& Renewable Energy", approvedOutlays: "280000", earmarked: "180000" },
    { id: 24, mainDept: "energy", departmentName: "Electrical Inspectorate", approvedOutlays: "150000", earmarked: "100000" },
    
    // Industries & Minerals sub-departments (ALL 4 departments)
    { id: 25, mainDept: "industries", departmentName: "Industries & Commerce", approvedOutlays: "380000", earmarked: "280000" },
    { id: 26, mainDept: "industries", departmentName: "Sericulture", approvedOutlays: "120000", earmarked: "80000" },
    { id: 27, mainDept: "industries", departmentName: "Geology & Mining", approvedOutlays: "250000", earmarked: "150000" },
    { id: 28, mainDept: "industries", departmentName: "NSMDC", approvedOutlays: "180000", earmarked: "120000" },
    
    // Transport sub-departments (ALL 4 departments)
    { id: 29, mainDept: "transport", departmentName: "Roads & Bridges", approvedOutlays: "720000", earmarked: "620000" },
    { id: 30, mainDept: "transport", departmentName: "Mechanical Engineering", approvedOutlays: "350000", earmarked: "250000" },
    { id: 31, mainDept: "transport", departmentName: "Road Transport", approvedOutlays: "420000", earmarked: "320000" },
    { id: 32, mainDept: "transport", departmentName: "Motor Vehicle", approvedOutlays: "180000", earmarked: "120000" },
    
    // Sc & Tech sub-departments (2 departments)
    { id: 33, mainDept: "sctech", departmentName: "Science and Technology", approvedOutlays: "280000", earmarked: "180000" },
    { id: 34, mainDept: "sctech", departmentName: "Information Technology & Com", approvedOutlays: "350000", earmarked: "250000" },
    
    // General Eco. Services sub-departments (6 departments)
    { id: 35, mainDept: "geneco", departmentName: "Planning Machinery", approvedOutlays: "220000", earmarked: "120000" },
    { id: 36, mainDept: "geneco", departmentName: "Tourism", approvedOutlays: "380000", earmarked: "280000" },
    { id: 37, mainDept: "geneco", departmentName: "Economics & Statistics", approvedOutlays: "150000", earmarked: "100000" },
    { id: 38, mainDept: "geneco", departmentName: "Civil Supplies", approvedOutlays: "280000", earmarked: "180000" },
    { id: 39, mainDept: "geneco", departmentName: "Legal Metrology & CP", approvedOutlays: "120000", earmarked: "80000" },
    { id: 40, mainDept: "geneco", departmentName: "Evaluation", approvedOutlays: "90000", earmarked: "60000" },
    
    // Social Services sub-departments (23 departments)
    { id: 41, mainDept: "social", departmentName: "School Education", approvedOutlays: "850000", earmarked: "650000" },
    { id: 42, mainDept: "social", departmentName: "Higher Education", approvedOutlays: "720000", earmarked: "520000" },
    { id: 43, mainDept: "social", departmentName: "SCERT", approvedOutlays: "180000", earmarked: "120000" },
    { id: 44, mainDept: "social", departmentName: "Technical Education", approvedOutlays: "320000", earmarked: "220000" },
    { id: 45, mainDept: "social", departmentName: "Sports & Youth Services", approvedOutlays: "280000", earmarked: "180000" },
    { id: 46, mainDept: "social", departmentName: "Art & Culture", approvedOutlays: "150000", earmarked: "100000" },
    { id: 47, mainDept: "social", departmentName: "Health & Family Welfare", approvedOutlays: "920000", earmarked: "720000" },
    { id: 48, mainDept: "social", departmentName: "Public Health Engineering", approvedOutlays: "680000", earmarked: "480000" },
    { id: 49, mainDept: "social", departmentName: "PWD Housing", approvedOutlays: "450000", earmarked: "350000" },
    { id: 50, mainDept: "social", departmentName: "G.A. Housing", approvedOutlays: "320000", earmarked: "220000" },
    { id: 51, mainDept: "social", departmentName: "Police Housing", approvedOutlays: "380000", earmarked: "280000" },
    { id: 52, mainDept: "social", departmentName: "Law & Justice", approvedOutlays: "250000", earmarked: "150000" },
    { id: 53, mainDept: "social", departmentName: "Home Guards Housing", approvedOutlays: "180000", earmarked: "120000" },
    { id: 54, mainDept: "social", departmentName: "Jails (Prison) Housing", approvedOutlays: "220000", earmarked: "150000" },
    { id: 55, mainDept: "social", departmentName: "Excise Housing", approvedOutlays: "150000", earmarked: "100000" },
    { id: 56, mainDept: "social", departmentName: "Urban Development", approvedOutlays: "580000", earmarked: "380000" },
    { id: 57, mainDept: "social", departmentName: "Municipal Affairs", approvedOutlays: "420000", earmarked: "320000" },
    { id: 58, mainDept: "social", departmentName: "Information & Public Relations", approvedOutlays: "180000", earmarked: "120000" },
    { id: 59, mainDept: "social", departmentName: "Labour", approvedOutlays: "150000", earmarked: "100000" },
    { id: 60, mainDept: "social", departmentName: "Employment, Skill Dev & Entrepreneurship", approvedOutlays: "320000", earmarked: "220000" },
    { id: 61, mainDept: "social", departmentName: "Social Welfare", approvedOutlays: "580000", earmarked: "380000" },
    { id: 62, mainDept: "social", departmentName: "Women Resources", approvedOutlays: "280000", earmarked: "180000" },
    
    // General Services sub-departments (14 departments)
    { id: 63, mainDept: "general", departmentName: "Printing & Stationery", approvedOutlays: "120000", earmarked: "80000" },
    { id: 64, mainDept: "general", departmentName: "Administrative Training Institute", approvedOutlays: "150000", earmarked: "100000" },
    { id: 65, mainDept: "general", departmentName: "Assembly Complex Project", approvedOutlays: "380000", earmarked: "280000" },
    { id: 66, mainDept: "general", departmentName: "Fire Services", approvedOutlays: "220000", earmarked: "150000" },
    { id: 67, mainDept: "general", departmentName: "Treasury & Accounts", approvedOutlays: "180000", earmarked: "120000" },
    { id: 68, mainDept: "general", departmentName: "Border Affairs", approvedOutlays: "280000", earmarked: "180000" },
    { id: 69, mainDept: "general", departmentName: "Parliamentary Affairs", approvedOutlays: "120000", earmarked: "80000" },
    { id: 70, mainDept: "general", departmentName: "Taxes", approvedOutlays: "250000", earmarked: "150000" },
    { id: 71, mainDept: "general", departmentName: "Village Guards", approvedOutlays: "180000", earmarked: "120000" },
    { id: 72, mainDept: "general", departmentName: "Chief Electoral Officer", approvedOutlays: "150000", earmarked: "100000" },
    { id: 73, mainDept: "general", departmentName: "Home incl. Disaster management", approvedOutlays: "420000", earmarked: "320000" },
    { id: 74, mainDept: "general", departmentName: "Tribal Affairs", approvedOutlays: "380000", earmarked: "280000" },
    { id: 75, mainDept: "general", departmentName: "Minority Affairs", approvedOutlays: "250000", earmarked: "150000" },
    { id: 76, mainDept: "general", departmentName: "State Lotteries", approvedOutlays: "120000", earmarked: "80000" }
  ];

  // Filter data based on selected department
  const getFilteredData = () => {
    if (selectedDepartment.value === "all") {
      return budgetData;
    }
    return budgetData.filter(item => item.mainDept === selectedDepartment.value);
  };

  const filteredBudgetData = getFilteredData();

  // Calculate negotiated loan
  const calculateNegotiatedLoan = (approvedOutlays, earmarked) => {
    const outlaysNum = parseFloat(approvedOutlays) || 0;
    const earmarkedNum = parseFloat(earmarked) || 0;
    const result = outlaysNum - earmarkedNum;
    return result > 0 ? result : 0;
  };

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  // Calculate sector totals
  const calculateSectorTotals = () => {
    const sectorTotals = {};
    
    // Initialize sector totals
    Object.keys(sectorNames).forEach(sector => {
      sectorTotals[sector] = {
        approvedOutlays: 0,
        earmarked: 0,
        negotiatedLoan: 0
      };
    });
    
    // Calculate totals for each sector
    filteredBudgetData.forEach(item => {
      const sector = item.mainDept;
      const approvedOutlays = parseFloat(item.approvedOutlays) || 0;
      const earmarked = parseFloat(item.earmarked) || 0;
      const negotiatedLoan = calculateNegotiatedLoan(item.approvedOutlays, item.earmarked);
      
      sectorTotals[sector].approvedOutlays += approvedOutlays;
      sectorTotals[sector].earmarked += earmarked;
      sectorTotals[sector].negotiatedLoan += negotiatedLoan;
    });
    
    return sectorTotals;
  };

  // Calculate grand totals
  const calculateGrandTotals = () => {
    const totalApprovedOutlays = filteredBudgetData.reduce((sum, item) => {
      return sum + (parseFloat(item.approvedOutlays) || 0);
    }, 0);

    const totalEarmarked = filteredBudgetData.reduce((sum, item) => {
      return sum + (parseFloat(item.earmarked) || 0);
    }, 0);

    const totalNegotiatedLoan = totalApprovedOutlays - totalEarmarked;

    return {
      totalApprovedOutlays,
      totalEarmarked,
      totalNegotiatedLoan: totalNegotiatedLoan > 0 ? totalNegotiatedLoan : 0
    };
  };

  const sectorTotals = calculateSectorTotals();
  const grandTotals = calculateGrandTotals();

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

  // Prepare table rows with sector totals
  const prepareTableRows = () => {
    if (selectedDepartment.value !== "all") {
      return filteredBudgetData.map((item, index) => {
        const negotiatedLoan = calculateNegotiatedLoan(item.approvedOutlays, item.earmarked);
        
        return (
          <tr key={item.id}>
            <td className="sl-no-column">{index + 1}</td>
            <td className="department-name-column">{item.departmentName}</td>
            <td className="approved-outlays-column">
              <div className="currency-display">
                <span className="currency-symbol">₹</span>
                <span className="amount-text">{formatNumber(item.approvedOutlays)}</span>
              </div>
            </td>
            <td className="earmarked-column">
              <div className="currency-display">
                <span className="currency-symbol">₹</span>
                <span className="amount-text">{formatNumber(item.earmarked)}</span>
              </div>
            </td>
            <td className="negotiated-loan-amount">
              {negotiatedLoan > 0 ? `₹${formatNumber(negotiatedLoan)}` : ""}
            </td>
          </tr>
        );
      });
    } else {
      // For "All" view, group by sector and add sector totals
      const rows = [];
      let currentRowIndex = 0;
      
      // Group departments by sector
      const sectorGroups = {};
      Object.keys(sectorNames).forEach(sector => {
        sectorGroups[sector] = filteredBudgetData.filter(item => item.mainDept === sector);
      });
      
      // Create rows with sector totals
      Object.keys(sectorNames).forEach(sector => {
        const departments = sectorGroups[sector];
        
        // Add department rows
        departments.forEach(item => {
          const negotiatedLoan = calculateNegotiatedLoan(item.approvedOutlays, item.earmarked);
          
          rows.push(
            <tr key={item.id}>
              <td className="sl-no-column">{++currentRowIndex}</td>
              <td className="department-name-column">{item.departmentName}</td>
              <td className="approved-outlays-column">
                <div className="currency-display">
                  <span className="currency-symbol">₹</span>
                  <span className="amount-text">{formatNumber(item.approvedOutlays)}</span>
                </div>
              </td>
              <td className="earmarked-column">
                <div className="currency-display">
                  <span className="currency-symbol">₹</span>
                  <span className="amount-text">{formatNumber(item.earmarked)}</span>
                </div>
              </td>
              <td className="negotiated-loan-amount">
                {negotiatedLoan > 0 ? `₹${formatNumber(negotiatedLoan)}` : ""}
              </td>
            </tr>
          );
        });
        
        // Add sector total row if there are departments in this sector
        if (departments.length > 0) {
          rows.push(
            <tr key={`total-${sector}`} className="sector-total-row">
              <td className="sl-no-column"></td>
              <td className="sector-total-label">Total - {sectorNames[sector]}</td>
              <td className="approved-outlays-column sector-total-amount">
                ₹{formatNumber(sectorTotals[sector].approvedOutlays)}
              </td>
              <td className="earmarked-column sector-total-amount">
                ₹{formatNumber(sectorTotals[sector].earmarked)}
              </td>
              <td className="sector-total-amount">
                ₹{formatNumber(sectorTotals[sector].negotiatedLoan)}
              </td>
            </tr>
          );
        }
      });
      
      return rows;
    }
  };

  return (
    <div className="session-budget-container">
      <header>
        <div className="logo-text">Session Budget</div>
      </header>

      <div className="data-container">
        <div className="control-panel-filters">
          <div className="department-selector">
            <span className="label-text">Department:</span>
            <Select
              value={selectedDepartment}
              onChange={setSelectedDepartment}
              options={departmentOptions}
              styles={customSelectStyles}
              isSearchable
              placeholder="Select Department"
            />
          </div>
          <div className="session-selector">
            <span className="label-text">Session:</span>
            <Select
              value={selectedSession}
              onChange={setSelectedSession}
              options={sessionOptions}
              styles={customSelectStyles}
              isSearchable={false}
              placeholder="Select Session"
            />
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="sl-no-column">Sl No.</th>
                <th>Department Name</th>
                <th className="approved-outlays-column">Approved Outlays for {selectedSession.value}</th>
                <th className="earmarked-column">Earmarked/Core activities</th>
                <th>Negotiated Loan</th>
              </tr>
            </thead>
            <tbody>
              {prepareTableRows()}
            </tbody>
            <tfoot>
              <tr className="grand-total-row">
                <td className="sl-no-column"></td>
                <td className="grand-total-label">Grand Total</td>
                <td className="approved-outlays-column grand-total-amount">
                  ₹{grandTotals.totalApprovedOutlays > 0 ? formatNumber(grandTotals.totalApprovedOutlays) : "0"}
                </td>
                <td className="earmarked-column grand-total-amount">
                  ₹{grandTotals.totalEarmarked > 0 ? formatNumber(grandTotals.totalEarmarked) : "0"}
                </td>
                <td className="grand-total-amount">
                  ₹{grandTotals.totalNegotiatedLoan > 0 ? formatNumber(grandTotals.totalNegotiatedLoan) : "0"}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SessionBudget; 