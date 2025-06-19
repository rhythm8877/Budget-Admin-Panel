"use client";

import { useState } from "react";
import Select from "react-select";
import "./OthersForm.css";

const OthersForm = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [financialRequirement, setFinancialRequirement] = useState("");
  const [negotiatedLoan, setNegotiatedLoan] = useState("");
  const [brief, setBrief] = useState("");

  const sectorOptions = [
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

  // Department options based on selected sector
  const getDepartmentOptions = () => {
    if (!selectedSector) return [];

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

    return departmentMap[selectedSector.value] || [];
  };

  // Handle number input to prevent non-numeric characters
  const handleNumberKeyDown = (e) => {
    // Allow only numbers, backspace, delete, tab, arrows, home, end, and decimal point
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 
      'Home', 'End', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'
    ];
    
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
    
    // Prevent multiple decimal points
    if (e.key === '.' && e.target.value.includes('.')) {
      e.preventDefault();
    }
  };

  // Prevent scroll wheel from changing number values
  const handleNumberWheel = (e) => {
    e.target.blur();
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!selectedSector || !selectedDepartment || !projectName || !financialRequirement || !brief) {
      alert("Please fill in all required fields");
      return;
    }

    // Format financial requirement to add "00" if it ends with a decimal point
    let formattedFinancialRequirement = financialRequirement;
    if (financialRequirement.endsWith('.')) {
      formattedFinancialRequirement = financialRequirement + "00";
      setFinancialRequirement(formattedFinancialRequirement);
    }
    
    // Form submission logic would go here
    console.log({
      sector: selectedSector,
      department: selectedDepartment,
      projectName,
      financialRequirement: formattedFinancialRequirement,
      negotiatedLoan,
      brief
    });
    
    // Reset form after submission
    setSelectedSector(null);
    setSelectedDepartment(null);
    setProjectName("");
    setFinancialRequirement("");
    setNegotiatedLoan("");
    setBrief("");
    
    alert("Form submitted successfully!");
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

  return (
    <div className="others-form-container">
      <header>
        <div className="logo-text">Others Form</div>
      </header>

      <div className="data-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <span className="label-text">Sector:</span>
              <Select
                value={selectedSector}
                onChange={(option) => {
                  setSelectedSector(option);
                  setSelectedDepartment(null);
                }}
                options={sectorOptions}
                styles={customSelectStyles}
                isSearchable
                placeholder="Select Sector"
                className="select-input"
              />
            </div>
            
            <div className="form-group">
              <span className="label-text">Name of Department:</span>
              <Select
                value={selectedDepartment}
                onChange={(option) => {
                  setSelectedDepartment(option);
                }}
                options={getDepartmentOptions()}
                styles={customSelectStyles}
                isSearchable
                placeholder="Select Department"
                isDisabled={!selectedSector}
                className="select-input"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <span className="label-text">Name of Project:</span>
              <input
                type="text"
                className="text-input"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
              />
            </div>
            
            <div className="form-group">
              <span className="label-text">Negotiated Loan (Optional):</span>
              <input
                type="text"
                className="text-input"
                value={negotiatedLoan}
                onChange={(e) => setNegotiatedLoan(e.target.value)}
                pattern="[A-Za-z0-9 ]+"
                title="Only letters, numbers and spaces allowed"
                placeholder="Enter negotiated loan"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <span className="label-text">Financial Requirement:</span>
              <div className="currency-input-container">
                <span className="currency-symbol">₹</span>
                <input
                  type="text"
                  className="number-input"
                  value={financialRequirement}
                  onChange={(e) => {
                    // Allow only numbers and a single decimal point
                    const value = e.target.value;
                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                      setFinancialRequirement(value);
                    }
                  }}
                  onKeyDown={handleNumberKeyDown}
                  onWheel={handleNumberWheel}
                  placeholder="Enter amount (counted in lakh)"
                />
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width">
              <span className="label-text">Brief:</span>
              <textarea
                className="text-area-input"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Enter brief description"
                rows={5}
              />
            </div>
          </div>
          
          <div className="form-row submit-row">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OthersForm;
