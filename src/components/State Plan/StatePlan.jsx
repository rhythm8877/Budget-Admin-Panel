"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import "./StatePlan.css";

const StatePlan = () => {
  const [selectedSector, setSelectedSector] = useState({ value: "all", label: "All" });
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [stateShareAmount, setStateShareAmount] = useState(500000); // Default amount for demonstration
  
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
  
  // Get current financial year's first day (April 1st)
  const getCurrentFinancialYearFirstDay = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11
    const currentYear = currentDate.getFullYear();
    const financialYearStart = currentMonth < 3 ? currentYear - 1 : currentYear;
    return `01/04/${financialYearStart.toString().slice(-2)}`;
  };
  
  const [selectedSession, setSelectedSession] = useState(() => {
    const currentFY = getCurrentFinancialYear();
    return { value: currentFY, label: currentFY };
  });

  // Format date for input field (YYYY-MM-DD)
  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Format date for display (DD/MM/YY)
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year.slice(-2)}`;
  };

  // Set default dates (current month) using useEffect to avoid render issues
  useEffect(() => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    setFromDate(formatDateForInput(firstDay));
    setToDate(formatDateForInput(lastDay));
    
    // Try to fetch state share amount from BudgetryInitiative
    // In a real app, this would use context, Redux, or an API call
    // For now, we'll use a mock value
    try {
      // This would be replaced with actual data fetching logic
      const budgetryInitiativeData = localStorage.getItem('budgetryInitiativeData');
      if (budgetryInitiativeData) {
        const parsedData = JSON.parse(budgetryInitiativeData);
        const stateShareItem = parsedData.find(item => item.name === "State share to CSS/NEC/NLCPR");
        if (stateShareItem && stateShareItem.approvedOutlays) {
          setStateShareAmount(parseFloat(stateShareItem.approvedOutlays) * 100000); // Convert from lakh to actual amount
        }
      }
    } catch (error) {
      console.error("Error fetching state share amount:", error);
    }
  }, []);

  const sectorOptions = [
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

  // Department mapping from OthersForm.jsx
  const departmentMap = {
    agri: [
      { value: "agriculture", label: "Agriculture" },
      { value: "horticulture", label: "Horticulture" },
      { value: "soil", label: "Soil & Water Conservation" },
      { value: "ahvety", label: "A.H & Vety Service" },
      { value: "fisheries", label: "Fisheries" },
      { value: "forestry", label: "Forestry & Wildlife" },
      { value: "cooperation", label: "Cooperation" },
      { value: "landresources", label: "Land Resources Development" },
      { value: "bamboo", label: "Nagaland Bamboo Dev. Agency" },
      { value: "bioresource", label: "Bio-resource & Aromatic Plant" },
      { value: "beehoney", label: "Bee & Honey Mission" },
      { value: "neped", label: "NEPED" },
      { value: "hydroger", label: "Hydroger" }
    ],
    rural: [
      { value: "ruraldevelopment", label: "Rural Development" },
      { value: "sird", label: "SIRD" },
      { value: "landrevenue", label: "Land Revenue" }
    ],
    special: [
      { value: "specialdev", label: "Special Development Scheme" },
      { value: "localarea", label: "Local Area Development Programme" },
      { value: "underdeveloped", label: "Development of Under Developed Areas" }
    ],
    irrigation: [
      { value: "waterresources", label: "Water Resources" }
    ],
    energy: [
      { value: "dnr", label: "Distribution & Revenue (D&R)" },
      { value: "tng", label: "Transmission & Generation (T&G)" },
      { value: "renewable", label: "New& Renewable Energy" },
      { value: "electrical", label: "Electrical Inspectorate" }
    ],
    industries: [
      { value: "industriescommerce", label: "Industries & Commerce" },
      { value: "sericulture", label: "Sericulture" },
      { value: "geologymining", label: "Geology & Mining" },
      { value: "nsmdc", label: "NSMDC" }
    ],
    transport: [
      { value: "roadsbridges", label: "Roads & Bridges" },
      { value: "mechanical", label: "Mechanical Engineering" },
      { value: "roadtransport", label: "Road Transport" },
      { value: "motorvehicle", label: "Motor Vehicle" }
    ],
    sctech: [
      { value: "sciencetech", label: "Science and Technology" },
      { value: "infotech", label: "Information Technology & Com" }
    ],
    geneco: [
      { value: "planning", label: "Planning Machinery" },
      { value: "tourism", label: "Tourism" },
      { value: "economics", label: "Economics & Statistics" },
      { value: "civilsupplies", label: "Civil Supplies" },
      { value: "legalmetrology", label: "Legal Metrology & CP" },
      { value: "evaluation", label: "Evaluation" }
    ],
    social: [
      { value: "schooledu", label: "School Education" },
      { value: "higheredu", label: "Higher Education" },
      { value: "scert", label: "SCERT" },
      { value: "techedu", label: "Technical Education" },
      { value: "sports", label: "Sports & Youth Services" },
      { value: "artculture", label: "Art & Culture" },
      { value: "health", label: "Health & Family Welfare" },
      { value: "phe", label: "Public Health Engineering" },
      { value: "pwdhousing", label: "PWD Housing" },
      { value: "gahousing", label: "G.A. Housing" },
      { value: "policehousing", label: "Police Housing" },
      { value: "lawjustice", label: "Law & Justice" },
      { value: "homeguardshousing", label: "Home Guards Housing" },
      { value: "jailshousing", label: "Jails (Prison) Housing" },
      { value: "excisehousing", label: "Excise Housing" },
      { value: "urbandev", label: "Urban Development" },
      { value: "municipal", label: "Municipal Affairs" },
      { value: "infopr", label: "Information & Public Relations" },
      { value: "labour", label: "Labour" },
      { value: "employment", label: "Employment, Skill Dev & Entrepreneurship" },
      { value: "socialwelfare", label: "Social Welfare" },
      { value: "womenresources", label: "Women Resources" }
    ],
    general: [
      { value: "printing", label: "Printing & Stationery" },
      { value: "admtraining", label: "Administrative Training Institute" },
      { value: "assembly", label: "Assembly Complex Project" },
      { value: "fire", label: "Fire Services" },
      { value: "treasury", label: "Treasury & Accounts" },
      { value: "border", label: "Border Affairs" },
      { value: "parliamentary", label: "Parliamentary Affairs" },
      { value: "taxes", label: "Taxes" },
      { value: "villageguards", label: "Village Guards" },
      { value: "electoralofficer", label: "Chief Electoral Officer" },
      { value: "home", label: "Home incl. Disaster management" },
      { value: "tribal", label: "Tribal Affairs" },
      { value: "minority", label: "Minority Affairs" },
      { value: "lotteries", label: "State Lotteries" }
    ]
  };

  // Generate complete state plan data using departmentMap
  const generateStatePlanData = () => {
    let id = 2; // Start from 2 since ID 1 is reserved for State share
    let remainingAmount = stateShareAmount; // Track remaining amount
    const data = [];
    
    // First add the State share to CSS/NEC/NLCPR as a special row
    data.push({
      id: 1,
      mainDept: "special",
      departmentName: "State share to CSS/NEC/NLCPR",
      date: getCurrentFinancialYearFirstDay(),
      debit: "-", // Set debit to "-" for the first row
      credit: stateShareAmount.toString(), // Set credit to the amount for the first row
      amountLeft: stateShareAmount.toString(),
      isSpecialRow: true
    });
    
    Object.keys(departmentMap).forEach(sector => {
      departmentMap[sector].forEach(dept => {
        // Generate random values for demonstration
        const debit = Math.floor(Math.random() * 300000) + 50000;
        const credit = "-"; // Set credit to "-" as requested
        remainingAmount -= debit; // Deduct from remaining amount
        const amountLeft = remainingAmount > 0 ? remainingAmount : 0; // Ensure we don't go negative
        
        // Generate random date between fromDate and toDate or use default date range
        let randomDate;
        try {
          const fromDateObj = fromDate ? new Date(fromDate) : new Date(2025, 0, 1);
          const toDateObj = toDate ? new Date(toDate) : new Date(2025, 0, 31);
          randomDate = new Date(fromDateObj.getTime() + Math.random() * (toDateObj.getTime() - fromDateObj.getTime()));
        } catch (error) {
          // Fallback to current date if there's an error
          randomDate = new Date();
        }
        
        const day = randomDate.getDate().toString().padStart(2, '0');
        const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
        const year = randomDate.getFullYear().toString().slice(-2);
        
        data.push({
          id: id++,
          mainDept: sector,
          departmentName: dept.label,
          date: `${day}/${month}/${year}`,
          debit: debit.toString(),
          credit: credit,
          amountLeft: amountLeft.toString()
        });
      });
    });
    
    return data;
  };

  const statePlanData = generateStatePlanData();

  // Filter data based on selected sector and date range
  const getFilteredData = () => {
    let filtered = statePlanData;
    
    // Always include the special row (State share to CSS/NEC/NLCPR)
    const specialRow = filtered.find(item => item.isSpecialRow);
    
    // Filter by sector if not "all"
    if (selectedSector.value !== "all") {
      filtered = filtered.filter(item => item.mainDept === selectedSector.value || item.isSpecialRow);
    }
    
    // Filter by date range if dates are provided
    if (fromDate || toDate) {
      filtered = filtered.filter(item => {
        // Always include the special row
        if (item.isSpecialRow) return true;
        
        try {
          const [day, month, year] = item.date.split('/');
          const itemDate = new Date(`20${year}`, parseInt(month) - 1, parseInt(day));
          
          let isInRange = true;
          if (fromDate) {
            const fromDateObj = new Date(fromDate);
            isInRange = isInRange && itemDate >= fromDateObj;
          }
          if (toDate) {
            const toDateObj = new Date(toDate);
            isInRange = isInRange && itemDate <= toDateObj;
          }
          
          return isInRange;
        } catch (error) {
          // If there's an error parsing the date, include the item by default
          return true;
        }
      });
      
      // If the special row was filtered out, add it back
      if (!filtered.find(item => item.isSpecialRow) && specialRow) {
        filtered = [specialRow, ...filtered];
      }
    }
    
    return filtered;
  };

  const filteredStatePlanData = getFilteredData();

  // Format number for display
  const formatNumber = (num) => {
    if (!num || num === "-") return num;
    return parseFloat(num).toLocaleString();
  };

  // Calculate grand totals
  const calculateGrandTotals = () => {
    const totalDebit = filteredStatePlanData.reduce((sum, item) => {
      // Skip the special row's debit since it's "-"
      if (item.isSpecialRow) return sum;
      return sum + (item.debit !== "-" ? parseFloat(item.debit) || 0 : 0);
    }, 0);

    const totalCredit = filteredStatePlanData.reduce((sum, item) => {
      // Include the special row's credit amount
      if (item.isSpecialRow) {
        return sum + (parseFloat(item.credit) || 0);
      }
      return sum + (item.credit !== "-" ? parseFloat(item.credit) || 0 : 0);
    }, 0);

    // Amount left is the last row's amount left
    const totalAmountLeft = filteredStatePlanData.length > 0 
      ? parseFloat(filteredStatePlanData[filteredStatePlanData.length - 1].amountLeft) || 0
      : 0;

    return {
      totalDebit,
      totalCredit,
      totalAmountLeft
    };
  };

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

  // Prepare table rows without sector totals
  const prepareTableRows = () => {
    let currentRowIndex = 0;
    
    if (filteredStatePlanData.length === 0) {
      return (
        <tr>
          <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
            No Data Available
          </td>
        </tr>
      );
    }
    
    return filteredStatePlanData.map((item) => {
      // Special handling for the State share row
      if (item.isSpecialRow) {
        return (
          <tr key={item.id} className="state-share-row">
            <td className="sl-no-column"></td>
            <td className="department-name-column state-share-name">{item.departmentName}</td>
            <td className="date-column">{item.date}</td>
            <td className="debit-column">
              <div className="currency-display">
                <span className="amount-text">{item.debit}</span>
              </div>
            </td>
            <td className="credit-column">
              <div className="currency-display">
                <span className="currency-symbol">₹</span>
                <span className="amount-text">{formatNumber(item.credit)}</span>
              </div>
            </td>
            <td className="amount-left-column">
              <div className="currency-display">
                <span className="currency-symbol">₹</span>
                <span className="amount-text">{formatNumber(item.amountLeft)}</span>
              </div>
            </td>
          </tr>
        );
      }
      
      // Regular rows with serial numbers
      return (
        <tr key={item.id}>
          <td className="sl-no-column">{++currentRowIndex}</td>
          <td className="department-name-column">{item.departmentName}</td>
          <td className="date-column">{item.date}</td>
          <td className="debit-column">
            <div className="currency-display">
              <span className="currency-symbol">₹</span>
              <span className="amount-text">{formatNumber(item.debit)}</span>
            </div>
          </td>
          <td className="credit-column">
            <div className="currency-display">
              <span className="amount-text">{item.credit}</span>
            </div>
          </td>
          <td className="amount-left-column">
            <div className="currency-display">
              <span className="currency-symbol">₹</span>
              <span className="amount-text">{formatNumber(item.amountLeft)}</span>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="state-plan-container">
      <header>
        <div className="logo-text">State Plan Statement</div>
      </header>

      <div className="data-container">
        <div className="filter-wrapper">
          <div className="filter-row">
            <div className="filter-item">
              <span className="label-text">Sector:</span>
              <Select
                value={selectedSector}
                onChange={setSelectedSector}
                options={sectorOptions}
                styles={customSelectStyles}
                isSearchable
                placeholder="Select Sector"
              />
            </div>
            <div className="filter-item">
              <span className="label-text">From:</span>
              <input
                type="date"
                className="date-input"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="filter-item">
              <span className="label-text">To:</span>
              <input
                type="date"
                className="date-input"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-item">
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
        </div>
        
        <div className="rs-in-lakh-wrapper">
          <span className="rs-in-lakh">Rs. in lakh</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="sl-no-column">Sl No.</th>
                <th>Department Name</th>
                <th className="date-column">Date</th>
                <th className="debit-column">Debit</th>
                <th className="credit-column">Credit</th>
                <th className="amount-left-column">Amount Left</th>
              </tr>
            </thead>
            <tbody>
              {prepareTableRows()}
            </tbody>
            <tfoot>
              <tr className="grand-total-row">
                <td className="sl-no-column"></td>
                <td className="grand-total-label">Grand Total</td>
                <td className="date-column"></td>
                <td className="debit-column grand-total-amount">
                  ₹{grandTotals.totalDebit > 0 ? formatNumber(grandTotals.totalDebit) : "0"}
                </td>
                <td className="credit-column grand-total-amount">
                  {grandTotals.totalCredit > 0 ? `₹${formatNumber(grandTotals.totalCredit)}` : "-"}
                </td>
                <td className="amount-left-column grand-total-amount">
                  ₹{grandTotals.totalAmountLeft > 0 ? formatNumber(grandTotals.totalAmountLeft) : "0"}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatePlan;
