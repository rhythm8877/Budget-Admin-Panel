"use client";

import { useState } from "react";
import Select from "react-select";
import "./StatePlan.css";

const StatePlan = () => {
  const [selectedSector, setSelectedSector] = useState({ value: "all", label: "All" });
  const [selectedMonth, setSelectedMonth] = useState({ value: "january", label: "January" });
  const [selectedSession, setSelectedSession] = useState({ value: "2025-26", label: "2025-26" });

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

  const monthOptions = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: "May" },
    { value: "june", label: "June" },
    { value: "july", label: "July" },
    { value: "august", label: "August" },
    { value: "september", label: "September" },
    { value: "october", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: "December" }
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
  // const sectorNames = {
  //   "agri": "Agri & Allied",
  //   "rural": "Rural Development",
  //   "special": "Special Area Programme",
  //   "irrigation": "Irrigation",
  //   "energy": "Energy",
  //   "industries": "Industries & Minerals",
  //   "transport": "Transport",
  //   "sctech": "Sc & Tech",
  //   "geneco": "General Eco. Services",
  //   "social": "Social Services",
  //   "general": "General Services"
  // };

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
    let id = 1;
    const data = [];
    
    Object.keys(departmentMap).forEach(sector => {
      departmentMap[sector].forEach(dept => {
        // Generate random values for demonstration
        const debit = Math.floor(Math.random() * 300000) + 50000;
        const credit = Math.floor(Math.random() * debit);
        const amountLeft = debit - credit;
        const day = Math.floor(Math.random() * 28) + 1;
        
        data.push({
          id: id++,
          mainDept: sector,
          departmentName: dept.label,
          date: `${day.toString().padStart(2, '0')}/01/25`,
          debit: debit.toString(),
          credit: credit.toString(),
          amountLeft: amountLeft.toString()
        });
      });
    });
    
    return data;
  };

  const statePlanData = generateStatePlanData();

  // Filter data based on selected sector
  const getFilteredData = () => {
    if (selectedSector.value === "all") {
      return statePlanData;
    }
    return statePlanData.filter(item => item.mainDept === selectedSector.value);
  };

  const filteredStatePlanData = getFilteredData();

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  // Calculate sector totals
  // const calculateSectorTotals = () => {
  //   const sectorTotals = {};
    
  //   // Initialize sector totals
  //   Object.keys(sectorNames).forEach(sector => {
  //     sectorTotals[sector] = {
  //       debit: 0,
  //       credit: 0,
  //       amountLeft: 0
  //     };
  //   });
    
  //   // Calculate totals for each sector
  //   filteredStatePlanData.forEach(item => {
  //     const sector = item.mainDept;
  //     const debit = parseFloat(item.debit) || 0;
  //     const credit = parseFloat(item.credit) || 0;
  //     const amountLeft = parseFloat(item.amountLeft) || 0;
      
  //     sectorTotals[sector].debit += debit;
  //     sectorTotals[sector].credit += credit;
  //     sectorTotals[sector].amountLeft += amountLeft;
  //   });
    
  //   return sectorTotals;
  // };

  // Calculate grand totals
  const calculateGrandTotals = () => {
    const totalDebit = filteredStatePlanData.reduce((sum, item) => {
      return sum + (parseFloat(item.debit) || 0);
    }, 0);

    const totalCredit = filteredStatePlanData.reduce((sum, item) => {
      return sum + (parseFloat(item.credit) || 0);
    }, 0);

    const totalAmountLeft = filteredStatePlanData.reduce((sum, item) => {
      return sum + (parseFloat(item.amountLeft) || 0);
    }, 0);

    return {
      totalDebit,
      totalCredit,
      totalAmountLeft
    };
  };

  // const sectorTotals = calculateSectorTotals();
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
    
    return filteredStatePlanData.map((item) => {
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
    <div className="state-plan-container">
      <header>
        <div className="logo-text">State Plan Statement</div>
      </header>

      <div className="data-container">
        <div className="control-panel-filters">
          <div className="sector-selector">
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
          <div className="month-selector">
            <span className="label-text">Month:</span>
            <Select
              value={selectedMonth}
              onChange={setSelectedMonth}
              options={monthOptions}
              styles={customSelectStyles}
              isSearchable = {false}
              placeholder="Select Month"
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
                  ₹{grandTotals.totalCredit > 0 ? formatNumber(grandTotals.totalCredit) : "0"}
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
