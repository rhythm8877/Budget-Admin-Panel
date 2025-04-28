"use client"

import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../../styles/RegistrationForm.css"
import SuccessAnimation from "./SuccessAnimation"

function SchoolRegistrationForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    district: "",
    category: "",
    udise: "",
    ebrc: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const districts = [
    "Dimapur",
    "Kohima",
    "Kiphire",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Phek",
    "Peren",
    "Tuensang",
    "Wokha",
    "Zunheboto"
  ]

  const ebrcOptions = {
    "Dimapur": ["Dhansaripar", "Kushiabill", "Medziphema", "Niuland", "UBRC Kuda"],
    "Kohima": ["L. Khel", "Viswema", "Tseminyu", "Chiephobozou", "Sechü Zubza"],
    "Kiphire": ["Kiphire", "Pungro", "Seyochung"],
    "Longleng": ["Longleng", "Tamlu"],
    "Mokokchung": ["Mokochung Vill.", "Khensa", "Kubolong", "Changtongya", "Mangkolemba", "Watiyim"],
    "Mon": ["Mon", "Wakching", "Tizit", "Aboi", "Tobu"],
    "Phek": ["Phek", "Chozuba", "Pfutsero", "Meluri"],
    "Peren": ["Peren", "Ahthibung", "Tening"],
    "Tuensang": ["Longkhim", "Shamator", "Noksen", "Hakushang", "Noklak"],
    "Wokha": ["Wokha", "Sanis", "Bhandari"],
    "Zunheboto": ["Aghunato", "Akuluto", "Pughoboto", "Satakha", "Zunheboto"]
  }

  const categories = ["Elementary", "Secondary", "Higher-Secondary", "PM Shri", "NSCBAV", "DA JGUA", "KGBV-IVEBRC"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
      // Clear EBRC when district changes
      ...(name === 'district' && { ebrc: '' })
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate School Name
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "Please enter school name"
    }

    // Validate District
    if (!formData.district) {
      newErrors.district = "Please select a district"
    }

    // Validate Category
    if (!formData.category) {
      newErrors.category = "Please select a category"
    }

    // Validate UDISE
    if (!formData.udise) {
      newErrors.udise = "Please enter UDISE number"
    } else if (formData.udise.length !== 11) {
      newErrors.udise = "UDISE must be exactly 11 digits"
    }

    // Validate eBRC
    if (!formData.ebrc) {
      newErrors.ebrc = "Please select an EBRC"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)

      // Show toast for each error
      Object.values(formErrors).forEach((error) => {
        toast.error(error)
      })

      return
    }

    // Form is valid, show success
    setIsSubmitted(true)
    toast.success("Form submitted successfully!")
  }

  if (isSubmitted) {
    return <SuccessAnimation />
  }

  return (
    <div className="app-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <header>
        <div className="logo">School Registration Form</div>
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">
              School Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className={errors.schoolName ? "error" : ""}
              placeholder="Enter school name"
            />
            {errors.schoolName && <div className="error-message">{errors.schoolName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="district">
              District <span className="required">*</span>
            </label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className={errors.district ? "error" : ""}
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <div className="error-message">{errors.district}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Category of School <span className="required">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? "error" : ""}
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <div className="error-message">{errors.category}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="udise">
              UDISE (11 digits) <span className="required">*</span>
            </label>
            <input
              type="number"
              id="udise"
              name="udise"
              value={formData.udise}
              onChange={handleChange}
              className={errors.udise ? "error" : ""}
              placeholder="Enter 11-digit UDISE number"
            />
            {errors.udise && <div className="error-message">{errors.udise}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="ebrc">
              eBRC <span className="required">*</span>
            </label>
            <select
              id="ebrc"
              name="ebrc"
              value={formData.ebrc}
              onChange={handleChange}
              className={errors.ebrc ? "error" : ""}
              disabled={!formData.district}
            >
              <option value="">Select EBRC</option>
              {formData.district && ebrcOptions[formData.district].map((ebrc, index) => (
                <option key={index} value={ebrc}>
                  {ebrc}
                </option>
              ))}
            </select>
            {errors.ebrc && <div className="error-message">{errors.ebrc}</div>}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default SchoolRegistrationForm;