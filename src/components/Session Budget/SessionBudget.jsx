"use client";

import { useState } from "react";
import Select from "react-select";
import "./SessionBudget.css";

const SessionBudget = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({ value: "all", label: "All" });
  
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
    // Agri & Allied sub-departments
    { id: 1, mainDept: "agri", departmentName: "Agriculture", approvedOutlays: "1154.84", earmarked: "430.00", negotiatedLoan: "724.84" },
    { id: 2, mainDept: "agri", departmentName: "Horticulture", approvedOutlays: "600.00", earmarked: "400.00", negotiatedLoan: "200.00" },
    { id: 3, mainDept: "agri", departmentName: "Soil & Water Conservation", approvedOutlays: "351.62", earmarked: "251.62", negotiatedLoan: "100.00" },
    { id: 4, mainDept: "agri", departmentName: "A.H & Vety Service", approvedOutlays: "476.00", earmarked: "26.00", negotiatedLoan: "450.00" },
    { id: 5, mainDept: "agri", departmentName: "Fisheries", approvedOutlays: "350.00", earmarked: "200.00", negotiatedLoan: "150.00" },
    { id: 6, mainDept: "agri", departmentName: "Forestry & Wildlife", approvedOutlays: "570.00", earmarked: "320.00", negotiatedLoan: "250.00" },
    { id: 7, mainDept: "agri", departmentName: "Cooperation", approvedOutlays: "320.00", earmarked: "320.00", negotiatedLoan: "0.00" },
    { id: 8, mainDept: "agri", departmentName: "Land Resources Development", approvedOutlays: "581.33", earmarked: "300.00", negotiatedLoan: "281.33" },
    { id: 9, mainDept: "agri", departmentName: "Nagaland Bamboo Dev. Agency", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" },
    { id: 10, mainDept: "agri", departmentName: "Bio-resource & Aromatic Plant", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" },
    { id: 11, mainDept: "agri", departmentName: "Bee & Honey Mission", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" },
    { id: 12, mainDept: "agri", departmentName: "NEPED", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" },
    { id: 13, mainDept: "agri", departmentName: "Hydroger", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" },
    
    // Rural Development sub-departments
    { id: 14, mainDept: "rural", departmentName: "Rural Development", approvedOutlays: "500.00", earmarked: "100.00", negotiatedLoan: "400.00" },
    { id: 15, mainDept: "rural", departmentName: "SIRD", approvedOutlays: "195.00", earmarked: "100.00", negotiatedLoan: "95.00" },
    { id: 16, mainDept: "rural", departmentName: "Land Revenue", approvedOutlays: "400.00", earmarked: "400.00", negotiatedLoan: "0.00" },
    
    // Special Area Programme sub-departments
    { id: 17, mainDept: "special", departmentName: "Special Development Scheme", approvedOutlays: "1200.00", earmarked: "1200.00", negotiatedLoan: "0.00" },
    { id: 18, mainDept: "special", departmentName: "Local Area Development Prog", approvedOutlays: "12000.00", earmarked: "12000.00", negotiatedLoan: "0.00" },
    { id: 19, mainDept: "special", departmentName: "Dev. of Under Developed Areas", approvedOutlays: "2700.00", earmarked: "2700.00", negotiatedLoan: "0.00" },
    
    // Irrigation sub-departments
    { id: 20, mainDept: "irrigation", departmentName: "Water Resources", approvedOutlays: "446.01", earmarked: "146.01", negotiatedLoan: "300.00" },
    
    // Energy sub-departments
    { id: 21, mainDept: "energy", departmentName: "Distribution & Revenue (D&R)", approvedOutlays: "902.42", earmarked: "400.00", negotiatedLoan: "502.42" },
    { id: 22, mainDept: "energy", departmentName: "Transmission & Generation (T&G)", approvedOutlays: "1426.55", earmarked: "1405.00", negotiatedLoan: "21.55" },
    { id: 23, mainDept: "energy", departmentName: "New and Renewable Energy", approvedOutlays: "300.00", earmarked: "200.00", negotiatedLoan: "100.00" },
    { id: 24, mainDept: "energy", departmentName: "Electrical Inspectorate", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" },
    
    // Industries & Minerals sub-departments
    { id: 25, mainDept: "industries", departmentName: "Industries & Commerce", approvedOutlays: "1005.00", earmarked: "535.00", negotiatedLoan: "470.00" },
    { id: 26, mainDept: "industries", departmentName: "Sericulture", approvedOutlays: "494.85", earmarked: "260.00", negotiatedLoan: "234.85" },
    { id: 27, mainDept: "industries", departmentName: "Geology & Mining", approvedOutlays: "500.00", earmarked: "350.00", negotiatedLoan: "150.00" },
    { id: 28, mainDept: "industries", departmentName: "NSMDC", approvedOutlays: "152.50", earmarked: "152.50", negotiatedLoan: "0.00" },
    
    // Transport sub-departments
    { id: 29, mainDept: "transport", departmentName: "Roads & Bridges", approvedOutlays: "5500.00", earmarked: "5500.00", negotiatedLoan: "0.00" },
    { id: 30, mainDept: "transport", departmentName: "Mechanical Engineering", approvedOutlays: "300.00", earmarked: "300.00", negotiatedLoan: "0.00" },
    { id: 31, mainDept: "transport", departmentName: "Road Transport", approvedOutlays: "788.03", earmarked: "388.03", negotiatedLoan: "400.00" },
    { id: 32, mainDept: "transport", departmentName: "Motor Vehicle", approvedOutlays: "499.86", earmarked: "499.86", negotiatedLoan: "0.00" },
    
    // Sc & Tech sub-departments
    { id: 33, mainDept: "sctech", departmentName: "Science and Technology", approvedOutlays: "271.40", earmarked: "271.40", negotiatedLoan: "0.00" },
    { id: 34, mainDept: "sctech", departmentName: "Information Technology & Com", approvedOutlays: "386.74", earmarked: "386.74", negotiatedLoan: "0.00" },
    
    // General Eco. Services sub-departments
    { id: 35, mainDept: "geneco", departmentName: "Planning Machinery", approvedOutlays: "700.00", earmarked: "700.00", negotiatedLoan: "0.00" },
    { id: 36, mainDept: "geneco", departmentName: "Tourism", approvedOutlays: "1400.00", earmarked: "1400.00", negotiatedLoan: "0.00" },
    { id: 37, mainDept: "geneco", departmentName: "Economics & Statistics", approvedOutlays: "410.00", earmarked: "410.00", negotiatedLoan: "0.00" },
    { id: 38, mainDept: "geneco", departmentName: "Civil Supplies", approvedOutlays: "460.00", earmarked: "460.00", negotiatedLoan: "0.00" },
    { id: 39, mainDept: "geneco", departmentName: "Legal Metrology & C P", approvedOutlays: "240.00", earmarked: "240.00", negotiatedLoan: "0.00" },
    { id: 40, mainDept: "geneco", departmentName: "Evaluation", approvedOutlays: "399.54", earmarked: "399.54", negotiatedLoan: "0.00" },
    
    // Social Services sub-departments
    { id: 41, mainDept: "social", departmentName: "School Education", approvedOutlays: "1405.00", earmarked: "1000.00", negotiatedLoan: "405.00" },
    { id: 42, mainDept: "social", departmentName: "Higher Education", approvedOutlays: "1063.00", earmarked: "963.00", negotiatedLoan: "100.00" },
    { id: 43, mainDept: "social", departmentName: "SCERT", approvedOutlays: "315.00", earmarked: "315.00", negotiatedLoan: "0.00" },
    { id: 44, mainDept: "social", departmentName: "Technical Education", approvedOutlays: "286.97", earmarked: "286.97", negotiatedLoan: "0.00" },
    { id: 45, mainDept: "social", departmentName: "Sports & Youth Services", approvedOutlays: "1355.00", earmarked: "1355.00", negotiatedLoan: "0.00" },
    { id: 46, mainDept: "social", departmentName: "Art & Culture", approvedOutlays: "440.00", earmarked: "440.00", negotiatedLoan: "0.00" },
    { id: 47, mainDept: "social", departmentName: "Health & Family Welfare", approvedOutlays: "946.60", earmarked: "326.43", negotiatedLoan: "620.17" },
    { id: 48, mainDept: "social", departmentName: "Public Health Engineering", approvedOutlays: "408.24", earmarked: "288.24", negotiatedLoan: "120.00" },
    { id: 49, mainDept: "social", departmentName: "PWD Housing", approvedOutlays: "2586.23", earmarked: "1896.43", negotiatedLoan: "689.80" },
    { id: 50, mainDept: "social", departmentName: "G.A. Housing", approvedOutlays: "1943.92", earmarked: "1843.92", negotiatedLoan: "100.00" },
    { id: 51, mainDept: "social", departmentName: "Police Housing", approvedOutlays: "1411.76", earmarked: "1411.76", negotiatedLoan: "0.00" },
    { id: 52, mainDept: "social", departmentName: "Law & Justice", approvedOutlays: "234.36", earmarked: "234.36", negotiatedLoan: "0.00" },
    { id: 53, mainDept: "social", departmentName: "Home Guards Housing", approvedOutlays: "360.00", earmarked: "360.00", negotiatedLoan: "0.00" },
    { id: 54, mainDept: "social", departmentName: "Jails(Prison) Housing", approvedOutlays: "485.00", earmarked: "485.00", negotiatedLoan: "0.00" },
    { id: 55, mainDept: "social", departmentName: "Excise Housing", approvedOutlays: "290.00", earmarked: "290.00", negotiatedLoan: "0.00" },
    { id: 56, mainDept: "social", departmentName: "Urban Development", approvedOutlays: "1740.79", earmarked: "1740.79", negotiatedLoan: "0.00" },
    { id: 57, mainDept: "social", departmentName: "Municipal Affairs", approvedOutlays: "396.00", earmarked: "196.00", negotiatedLoan: "200.00" },
    { id: 58, mainDept: "social", departmentName: "Information & Public Relations", approvedOutlays: "400.00", earmarked: "400.00", negotiatedLoan: "0.00" },
    { id: 59, mainDept: "social", departmentName: "Labour", approvedOutlays: "213.84", earmarked: "213.84", negotiatedLoan: "0.00" },
    { id: 60, mainDept: "social", departmentName: "Employment, Skill Dev & Entrepreneurship", approvedOutlays: "470.00", earmarked: "470.00", negotiatedLoan: "0.00" },
    { id: 61, mainDept: "social", departmentName: "Social Welfare", approvedOutlays: "530.40", earmarked: "530.40", negotiatedLoan: "0.00" },
    { id: 62, mainDept: "social", departmentName: "Women Resources", approvedOutlays: "480.00", earmarked: "480.00", negotiatedLoan: "0.00" },
    
    // General Services sub-departments
    { id: 63, mainDept: "general", departmentName: "Printing & Stationery", approvedOutlays: "330.00", earmarked: "330.00", negotiatedLoan: "0.00" },
    { id: 64, mainDept: "general", departmentName: "Administrative Training Institute", approvedOutlays: "130.00", earmarked: "130.00", negotiatedLoan: "0.00" },
    { id: 65, mainDept: "general", departmentName: "Assembly Complex Project", approvedOutlays: "782.79", earmarked: "782.79", negotiatedLoan: "0.00" },
    { id: 66, mainDept: "general", departmentName: "Fire Services", approvedOutlays: "1100.00", earmarked: "1100.00", negotiatedLoan: "0.00" },
    { id: 67, mainDept: "general", departmentName: "Treasury & Accounts", approvedOutlays: "225.00", earmarked: "225.00", negotiatedLoan: "0.00" },
    { id: 68, mainDept: "general", departmentName: "Border Affairs", approvedOutlays: "113.41", earmarked: "113.41", negotiatedLoan: "0.00" },
    { id: 69, mainDept: "general", departmentName: "Parliamentary Affairs", approvedOutlays: "200.00", earmarked: "200.00", negotiatedLoan: "0.00" },
    { id: 70, mainDept: "general", departmentName: "Taxes", approvedOutlays: "400.00", earmarked: "400.00", negotiatedLoan: "0.00" },
    { id: 71, mainDept: "general", departmentName: "Village Guards", approvedOutlays: "327.93", earmarked: "327.93", negotiatedLoan: "0.00" },
    { id: 72, mainDept: "general", departmentName: "Chief Electoral Officer", approvedOutlays: "400.00", earmarked: "400.00", negotiatedLoan: "0.00" },
    { id: 73, mainDept: "general", departmentName: "Home incl: Disaster management", approvedOutlays: "420.00", earmarked: "420.00", negotiatedLoan: "0.00" },
    { id: 74, mainDept: "general", departmentName: "Tribal Affairs", approvedOutlays: "290.00", earmarked: "290.00", negotiatedLoan: "0.00" },
    { id: 75, mainDept: "general", departmentName: "Minority Affairs", approvedOutlays: "450.00", earmarked: "450.00", negotiatedLoan: "0.00" },
    { id: 76, mainDept: "general", departmentName: "State Lotteries", approvedOutlays: "100.00", earmarked: "100.00", negotiatedLoan: "0.00" }
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
  const calculateNegotiatedLoan = (item) => {
    // If negotiatedLoan is provided directly
    if (item.negotiatedLoan !== undefined) {
      // Check if it's a number string (like "100.00")
      if (/^[0-9]+(\.[0-9]+)?$/.test(item.negotiatedLoan)) {
        return parseFloat(item.negotiatedLoan) || 0;
      }
      // If it's text or empty, return 0 for calculation purposes
      // but we'll display the original text value in the table
      return 0;
    }
    
    // Otherwise calculate it (fallback)
    const outlaysNum = parseFloat(item.approvedOutlays) || 0;
    const earmarkedNum = parseFloat(item.earmarked) || 0;
    const result = outlaysNum - earmarkedNum;
    return result > 0 ? result : 0;
  };

  // Get display value for negotiated loan (could be text or number)
  const getNegotiatedLoanDisplay = (item) => {
    if (!item.negotiatedLoan || item.negotiatedLoan === "0" || item.negotiatedLoan === "0.00") {
      return "";
    }
    
    // If it's a number string, format it with currency symbol
    if (/^[0-9]+(\.[0-9]+)?$/.test(item.negotiatedLoan)) {
      return `₹${formatNumber(item.negotiatedLoan)}`;
    }
    
    // Otherwise return the text as is
    return item.negotiatedLoan;
  };

  // Format amount for display with currency symbol only if amount exists
  const formatAmount = (amount) => {
    if (!amount || parseFloat(amount) === 0) return "";
    return `₹${formatNumber(amount)}`;
  };

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  // Calculate sector totals
  const calculateSectorTotals = () => {
    const sectorTotals = {
      "agri": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "rural": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "special": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "irrigation": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "energy": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "industries": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "transport": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "sctech": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "geneco": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "social": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 },
      "general": { approvedOutlays: 0, earmarked: 0, negotiatedLoan: 0 }
    };
    
    // Calculate totals by summing up values from budgetData
    budgetData.forEach(item => {
      const sector = item.mainDept;
      if (sectorTotals[sector]) {
        sectorTotals[sector].approvedOutlays += parseFloat(item.approvedOutlays) || 0;
        sectorTotals[sector].earmarked += parseFloat(item.earmarked) || 0;
        // Use the calculateNegotiatedLoan function to handle text values
        sectorTotals[sector].negotiatedLoan += calculateNegotiatedLoan(item);
      }
    });
    
    // Round totals to 2 decimal places for consistency
    Object.keys(sectorTotals).forEach(sector => {
      sectorTotals[sector].approvedOutlays = parseFloat(sectorTotals[sector].approvedOutlays.toFixed(2));
      sectorTotals[sector].earmarked = parseFloat(sectorTotals[sector].earmarked.toFixed(2));
      sectorTotals[sector].negotiatedLoan = parseFloat(sectorTotals[sector].negotiatedLoan.toFixed(2));
    });
    
    return sectorTotals;
  };

  // Calculate grand totals
  const calculateGrandTotals = () => {
    let totalApprovedOutlays = 0;
    let totalEarmarked = 0;
    let totalNegotiatedLoan = 0;
    
    // Sum up all values from budgetData
    budgetData.forEach(item => {
      totalApprovedOutlays += parseFloat(item.approvedOutlays) || 0;
      totalEarmarked += parseFloat(item.earmarked) || 0;
      // Use the calculateNegotiatedLoan function to handle text values
      totalNegotiatedLoan += calculateNegotiatedLoan(item);
    });
    
    // Round to 2 decimal places for consistency
    return {
      totalApprovedOutlays: parseFloat(totalApprovedOutlays.toFixed(2)),
      totalEarmarked: parseFloat(totalEarmarked.toFixed(2)),
      totalNegotiatedLoan: parseFloat(totalNegotiatedLoan.toFixed(2))
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
        const negotiatedLoan = calculateNegotiatedLoan(item);
        
        return (
          <tr key={item.id}>
            <td className="sl-no-column">{index + 1}</td>
            <td className="department-name-column">{item.departmentName}</td>
            <td className="approved-outlays-column">
              <div className="currency-display">
                <span className="currency-symbol"></span>
                <span className="amount-text">{formatAmount(item.approvedOutlays)}</span>
              </div>
            </td>
            <td className="earmarked-column">
              <div className="currency-display">
                <span className="currency-symbol"></span>
                <span className="amount-text">{formatAmount(item.earmarked)}</span>
              </div>
            </td>
            <td className="negotiated-loan-amount">
              {getNegotiatedLoanDisplay(item)}
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
          const negotiatedLoan = calculateNegotiatedLoan(item);
          
          rows.push(
            <tr key={item.id}>
              <td className="sl-no-column">{++currentRowIndex}</td>
              <td className="department-name-column">{item.departmentName}</td>
              <td className="approved-outlays-column">
                <div className="currency-display">
                  <span className="currency-symbol"></span>
                  <span className="amount-text">{formatAmount(item.approvedOutlays)}</span>
                </div>
              </td>
              <td className="earmarked-column">
                <div className="currency-display">
                  <span className="currency-symbol"></span>
                  <span className="amount-text">{formatAmount(item.earmarked)}</span>
                </div>
              </td>
              <td className="negotiated-loan-amount">
                {getNegotiatedLoanDisplay(item)}
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
                {formatAmount(sectorTotals[sector].approvedOutlays)}
              </td>
              <td className="sector-total-amount">
                {formatAmount(sectorTotals[sector].earmarked)}
              </td>
              <td className="sector-total-amount">
                {formatAmount(sectorTotals[sector].negotiatedLoan)}
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
            <span className="label-text">Sector:</span>
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
                <th>Department</th>
                <th className="amount-column">
                  Approved Outlays for<br />{selectedSession.value}
                </th>
                <th colSpan="2" className="of-which-column">
                  Of which specified
                </th>
              </tr>
              <tr className="subheader-row">
                <th className="empty-header"></th>
                <th className="empty-header"></th>
                <th className="empty-header"></th>
                <th className="earmarked-header">Earmarked/Core<br />activities</th>
                <th className="loan-header">Negotiated Loan</th>
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
                  {formatAmount(grandTotals.totalApprovedOutlays)}
                </td>
                <td className="earmarked-total">
                  {formatAmount(grandTotals.totalEarmarked)}
                </td>
                <td className="loan-total">
                  {formatAmount(grandTotals.totalNegotiatedLoan)}
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