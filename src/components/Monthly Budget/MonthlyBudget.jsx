"use client";

import { useState } from "react";
import Select from "react-select";
import "./MonthlyBudget.css";

const MonthlyBudget = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({ value: "all", label: "All" });
  const [selectedMonth, setSelectedMonth] = useState({ value: "january", label: "January" });

  const departmentOptions = [
    { value: "all", label: "All" },
    { value: "agri", label: "Agri & Allied" },
    { value: "rural", label: "Rural Development" },
    { value: "special", label: "Special Area Programme" },
    { value: "irrigation", label: "Irrigation" },
    { value: "energy", label: "Energy" },
    { value: "industries", label: "Industries & Minerals" },
    { value: "transport", label: "Transport" }
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



  // Initialize empty budget data structure for all departments
  const initializeBudgetData = () => [
    // Agri & Allied sub-departments (ALL 13 departments)
    { id: 1, mainDept: "agri", departmentName: "Agriculture", date: "", credit: "", debit: "" },
    { id: 2, mainDept: "agri", departmentName: "Horticulture", date: "", credit: "", debit: "" },
    { id: 3, mainDept: "agri", departmentName: "Soil & Water Conservation", date: "", credit: "", debit: "" },
    { id: 4, mainDept: "agri", departmentName: "A.H & Vety Service", date: "", credit: "", debit: "" },
    { id: 5, mainDept: "agri", departmentName: "Fisheries", date: "", credit: "", debit: "" },
    { id: 6, mainDept: "agri", departmentName: "Forestry & Wildlife", date: "", credit: "", debit: "" },
    { id: 7, mainDept: "agri", departmentName: "Cooperation", date: "", credit: "", debit: "" },
    { id: 8, mainDept: "agri", departmentName: "Land Resources Development", date: "", credit: "", debit: "" },
    { id: 9, mainDept: "agri", departmentName: "Nagaland Bamboo Dev. Agency", date: "", credit: "", debit: "" },
    { id: 10, mainDept: "agri", departmentName: "Bio-resource & Aromatic Plant", date: "", credit: "", debit: "" },
    { id: 11, mainDept: "agri", departmentName: "Bee & Honey Mission", date: "", credit: "", debit: "" },
    { id: 12, mainDept: "agri", departmentName: "NEPED", date: "", credit: "", debit: "" },
    { id: 13, mainDept: "agri", departmentName: "Hydroger", date: "", credit: "", debit: "" },
    
    // Rural Development sub-departments (ALL 3 departments)
    { id: 14, mainDept: "rural", departmentName: "Rural Development", date: "", credit: "", debit: "" },
    { id: 15, mainDept: "rural", departmentName: "SIRD", date: "", credit: "", debit: "" },
    { id: 16, mainDept: "rural", departmentName: "Land Revenue", date: "", credit: "", debit: "" },
    
    // Special Area Programme sub-departments (ALL 3 departments)
    { id: 17, mainDept: "special", departmentName: "Special Development Scheme", date: "", credit: "", debit: "" },
    { id: 18, mainDept: "special", departmentName: "Local Area Development Programme", date: "", credit: "", debit: "" },
    { id: 19, mainDept: "special", departmentName: "Development of Under Developed Areas", date: "", credit: "", debit: "" },
    
    // Irrigation sub-departments (1 department)
    { id: 20, mainDept: "irrigation", departmentName: "Water Resources", date: "", credit: "", debit: "" },
    
    // Energy sub-departments (ALL 4 departments)
    { id: 21, mainDept: "energy", departmentName: "Distribution & Revenue (D&R)", date: "", credit: "", debit: "" },
    { id: 22, mainDept: "energy", departmentName: "Transmission & Generation (T&G)", date: "", credit: "", debit: "" },
    { id: 23, mainDept: "energy", departmentName: "New& Renewable Energy", date: "", credit: "", debit: "" },
    { id: 24, mainDept: "energy", departmentName: "Electrical Inspectorate", date: "", credit: "", debit: "" },
    
    // Industries & Minerals sub-departments (ALL 4 departments)
    { id: 25, mainDept: "industries", departmentName: "Industries & Commerce", date: "", credit: "", debit: "" },
    { id: 26, mainDept: "industries", departmentName: "Sericulture", date: "", credit: "", debit: "" },
    { id: 27, mainDept: "industries", departmentName: "Geology & Mining", date: "", credit: "", debit: "" },
    { id: 28, mainDept: "industries", departmentName: "NSMDC", date: "", credit: "", debit: "" },
    
    // Transport sub-departments (ALL 4 departments)
    { id: 29, mainDept: "transport", departmentName: "Roads & Bridges", date: "", credit: "", debit: "" },
    { id: 30, mainDept: "transport", departmentName: "Mechanical Engineering", date: "", credit: "", debit: "" },
    { id: 31, mainDept: "transport", departmentName: "Road Transport", date: "", credit: "", debit: "" },
    { id: 32, mainDept: "transport", departmentName: "Motor Vehicle", date: "", credit: "", debit: "" }
  ];

  const [allBudgetData, setAllBudgetData] = useState(initializeBudgetData());

  // Filter data based on selected department
  const getFilteredData = () => {
    if (selectedDepartment.value === "all") {
      return allBudgetData;
    }
    return allBudgetData.filter(item => item.mainDept === selectedDepartment.value);
  };

  const budgetData = getFilteredData();

  // Get month range for date input
  const getMonthDateRange = () => {
    const currentYear = new Date().getFullYear();
    const monthIndex = monthOptions.findIndex(month => month.value === selectedMonth.value);
    const month = monthIndex + 1; // JavaScript months are 0-indexed
    
    const firstDay = `${currentYear}-${month.toString().padStart(2, '0')}-01`;
    const lastDay = `${currentYear}-${month.toString().padStart(2, '0')}-${new Date(currentYear, month, 0).getDate().toString().padStart(2, '0')}`;
    
    return { min: firstDay, max: lastDay };
  };

  // Handle input changes
  const handleInputChange = (id, field, value) => {
    let validatedValue = value;
    
    // Validate number inputs
    if (field === 'credit' || field === 'debit') {
      validatedValue = validateNumberInput(value, field, id);
    }
    
    setAllBudgetData(prevData => 
      prevData.map(item => 
        item.id === id ? { ...item, [field]: validatedValue } : item
      )
    );
  };

  // Handle number input to prevent 'e' character and negative values
  const handleNumberKeyDown = (e) => {
    if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
      e.preventDefault();
    }
  };

  // Prevent scroll wheel from changing number values
  const handleNumberWheel = (e) => {
    e.target.blur();
    e.preventDefault();
  };

  // Validate number input
  const validateNumberInput = (value, field, itemId) => {
    const numValue = parseFloat(value);
    if (numValue < 0 || isNaN(numValue)) {
      return "";
    }
    
    // If this is debit, check that it doesn't exceed credit
    if (field === 'debit') {
      const item = allBudgetData.find(item => item.id === itemId);
      const creditValue = parseFloat(item.credit) || 0;
      if (numValue > creditValue && creditValue > 0) {
        return creditValue.toString();
      }
    }
    
    return value;
  };

  // Calculate amount left
  const calculateAmountLeft = (credit, debit) => {
    const creditNum = parseFloat(credit) || 0;
    const debitNum = parseFloat(debit) || 0;
    const result = creditNum - debitNum;
    return result > 0 ? result : 0;
  };

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  // Calculate totals
  const calculateTotals = () => {
    const totalCredit = budgetData.reduce((sum, item) => {
      return sum + (parseFloat(item.credit) || 0);
    }, 0);

    const totalDebit = budgetData.reduce((sum, item) => {
      return sum + (parseFloat(item.debit) || 0);
    }, 0);

    const totalAmountLeft = totalCredit - totalDebit;

    return {
      totalCredit,
      totalDebit,
      totalAmountLeft: totalAmountLeft > 0 ? totalAmountLeft : 0
    };
  };

  const totals = calculateTotals();

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
    <div className="monthly-budget-container">
      <header>
        <div className="logo-text">Monthly Budget</div>
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
          <div className="month-selector">
            <span className="label-text">Month:</span>
            <Select
              value={selectedMonth}
              onChange={setSelectedMonth}
              options={monthOptions}
              styles={customSelectStyles}
              isSearchable
              placeholder="Select Month"
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
                <th className="credit-column">Credit</th>
                <th className="debit-column">Debit</th>
                <th>Amount Left</th>
              </tr>
            </thead>
            <tbody>
              {budgetData.map((item, index) => {
                const dateRange = getMonthDateRange();
                const amountLeft = calculateAmountLeft(item.credit, item.debit);
                
                return (
                  <tr key={item.id}>
                    <td className="sl-no-column">{index + 1}</td>
                    <td className="department-name-column">{item.departmentName}</td>
                    <td className="date-column">
                      <input
                        type="date"
                        className="date-input"
                        value={item.date}
                        min={dateRange.min}
                        max={dateRange.max}
                        onChange={(e) => handleInputChange(item.id, 'date', e.target.value)}
                      />
                    </td>
                    <td className="credit-column">
                      <div className="currency-input-container">
                        <span className="currency-symbol">₹</span>
                        <input
                          type="number"
                          className="number-input"
                          value={item.credit}
                          min="0"
                          step="0.01"
                          onKeyDown={handleNumberKeyDown}
                          onWheel={handleNumberWheel}
                          onChange={(e) => handleInputChange(item.id, 'credit', e.target.value)}
                        />
                      </div>
                    </td>
                    <td className="debit-column">
                      <div className="currency-input-container">
                        <span className="currency-symbol">₹</span>
                        <input
                          type="number"
                          className="number-input"
                          value={item.debit}
                          min="0"
                          step="0.01"
                          onKeyDown={handleNumberKeyDown}
                          onWheel={handleNumberWheel}
                          onChange={(e) => handleInputChange(item.id, 'debit', e.target.value)}
                        />
                      </div>
                    </td>
                    <td className="calculated-amount">
                      {amountLeft > 0 ? `₹${formatNumber(amountLeft)}` : ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="total-row">
                <td className="sl-no-column"></td>
                <td className="total-label">Total</td>
                <td className="date-column"></td>
                <td className="credit-column total-amount">
                  ₹{totals.totalCredit > 0 ? formatNumber(totals.totalCredit) : "0"}
                </td>
                <td className="debit-column total-amount">
                  ₹{totals.totalDebit > 0 ? formatNumber(totals.totalDebit) : "0"}
                </td>
                <td className="total-amount">
                  ₹{totals.totalAmountLeft > 0 ? formatNumber(totals.totalAmountLeft) : "0"}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBudget; 