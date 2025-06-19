"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import "./OthersStatement.css";

const OthersStatement = () => {
  // Department mapping
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
  
  // Create a flat list of all departments for the dropdown (without "All" option)
  const createDepartmentOptions = () => {
    const allDepartments = [];
    
    // Flatten the department structure from departmentMap
    Object.keys(departmentMap).forEach(sector => {
      departmentMap[sector].forEach(dept => {
        allDepartments.push(dept);
      });
    });
    
    return allDepartments;
  };

  // Find the Agriculture department option for default selection
  const getAgricultureDepartment = () => {
    const agriDepts = departmentMap.agri;
    if (agriDepts && agriDepts.length > 0) {
      return agriDepts.find(dept => dept.value === "agriculture") || agriDepts[0];
    }
    return { value: "agriculture", label: "Agriculture" };
  };
  
  const departmentOptions = createDepartmentOptions();
  
  const [selectedDepartment, setSelectedDepartment] = useState(getAgricultureDepartment);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  
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
  }, []);

  // Project mapping from ApprovedProject.jsx
  const projectMap = {
    // AGRICULTURE
    agriculture: [
      { value: "agri_farm_roads", label: "Construction of 65 nos of community agri farm roads" },
      { value: "wokha_extension", label: "Extension of main Building Second Floor with DYNA Roofing (for Conference Hall), DAO Office Wokha" },
      { value: "tseminyu_office", label: "Construction of DAO Office, Tseminyu" },
      { value: "chumoukedima_office", label: "Construction of DAO Office, Chumoukedima" },
      { value: "link_road", label: "Construction of Agri Link Road in Nagaland" },
      { value: "kisama_park", label: "Construction of Agri park at Kisama Heritage Village" }
    ],
    // ... rest of project map ...
  };

  // Generate data for the table based on selected department
  const generateOthersStatementData = () => {
    let id = 1;
    const data = [];
    
    // Get projects for the selected department
      const deptProjects = projectMap[selectedDepartment.value];
      
      if (deptProjects && deptProjects.length > 0) {
        deptProjects.forEach(project => {
          // Generate random values for demonstration
          const debit = Math.floor(Math.random() * 300000) + 50000;
          const credit = Math.floor(Math.random() * debit);
          const amountLeft = debit - credit;
        
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
            department: selectedDepartment.label,
            projectName: project.label,
          date: `${day}/${month}/${year}`,
            debit: debit.toString(),
            credit: credit.toString(),
            amountLeft: amountLeft.toString()
          });
        });
    }
    
    return data;
  };

  const othersStatementData = generateOthersStatementData();

  // Filter data based on date range
  const getFilteredData = () => {
    let filtered = othersStatementData;
    
    // Filter by date range if dates are provided
    if (fromDate || toDate) {
      filtered = filtered.filter(item => {
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
    }
    
    return filtered;
  };

  const filteredOthersStatementData = getFilteredData();

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  // Calculate grand totals
  const calculateGrandTotals = () => {
    const totalDebit = filteredOthersStatementData.reduce((sum, item) => {
      return sum + (parseFloat(item.debit) || 0);
    }, 0);

    const totalCredit = filteredOthersStatementData.reduce((sum, item) => {
      return sum + (parseFloat(item.credit) || 0);
    }, 0);

    const totalAmountLeft = filteredOthersStatementData.reduce((sum, item) => {
      return sum + (parseFloat(item.amountLeft) || 0);
    }, 0);

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

  // Prepare table rows
  const prepareTableRows = () => {
    let currentRowIndex = 0;
    
    if (filteredOthersStatementData.length === 0) {
      return (
        <tr>
          <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
            No Projects Available
          </td>
        </tr>
      );
    }
    
    return filteredOthersStatementData.map((item) => {
      return (
        <tr key={item.id}>
          <td className="sl-no-column">{++currentRowIndex}</td>
          <td className="project-name-column">{item.projectName}</td>
          <td className="date-column">{item.date}</td>
          <td className="debit-column">
            <div className="currency-display">
              <span className="currency-symbol">₹</span>
              <span className="amount-text">{formatNumber(item.debit)}</span>
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
    });
  };

  return (
    <div className="others-statement-container">
      <header>
        <div className="logo-text">Others Statement</div>
      </header>

      <div className="data-container">
        <div className="filter-wrapper">
          <div className="filter-row">
            <div className="filter-item">
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
                <th>Project Name</th>
                <th className="date-column">Date</th>
                <th className="debit-column">Debit</th>
                <th className="credit-column">Credit</th>
                <th className="amount-left-column">Amount Left</th>
              </tr>
            </thead>
            <tbody>
              {prepareTableRows()}
            </tbody>
            {filteredOthersStatementData.length > 0 && (
              <tfoot>
                <tr className="grand-total-row">
                  <td className="sl-no-column"></td>
                  <td className="grand-total-label">Grand Total</td>
                  <td className="date-column"></td>
                  <td className="debit-column grand-total-amount">
                    ₹{grandTotals.totalDebit > 0 ? formatNumber(grandTotals.totalDebit) : "0"}
                  </td>
                  <td className="credit-column grand-total-amount">
                    ₹{grandTotals.totalCredit > 0 ? formatNumber(grandTotals.totalCredit) : "0"}
                  </td>
                  <td className="amount-left-column grand-total-amount">
                    ₹{grandTotals.totalAmountLeft > 0 ? formatNumber(grandTotals.totalAmountLeft) : "0"}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OthersStatement;
