"use client";

import { useState } from "react";
import Select from "react-select";
import "./OthersStatement.css";

const OthersStatement = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({ value: "all", label: "All" });
  const [selectedMonth, setSelectedMonth] = useState({ value: "january", label: "January" });
  const [selectedSession, setSelectedSession] = useState({ value: "2025-26", label: "2025-26" });

  // Create a flat list of all departments for the dropdown
  const createDepartmentOptions = () => {
    const allDepartments = [{ value: "all", label: "All" }];
    
    // Flatten the department structure from departmentMap
    Object.keys(departmentMap).forEach(sector => {
      departmentMap[sector].forEach(dept => {
        allDepartments.push(dept);
      });
    });
    
    return allDepartments;
  };

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
    
    // HORTICULTURE
    horticulture: [
      { value: "core_activities", label: "Core Activities" },
      { value: "new_district_offices", label: "Construction of office buildings in newly created districts" },
      { value: "horti_link_roads", label: "20 Nos of Horti‑link Roads under Negotiated Loan" },
      { value: "strawberry_project", label: "Strawberry Model farming project at Zubza" }
    ],
    
    // SOIL & WATER CONSERVATION
    soil: [
      { value: "marepkong_quarter", label: "Construction of apartment type staff quarter at Marepkong, Mokokchung" },
      { value: "kohima_guesthouse", label: "Construction of Soil and Water Conservation Guest House, Kohima" },
      { value: "peren_quarter", label: "Construction of DSCO quarter, Peren" },
      { value: "core_activities", label: "Core Activities" },
      { value: "land_dev_project", label: "Comprehensive Sustainable Land Development Project" }
    ],
    
    // A.H. & VETY SERVICE
    ahvety: [
      { value: "jalukie_hospital", label: "Completion of Veterinary hospital, Jalukie, Peren" },
      { value: "meat_production", label: "Meat Production Unit – 12 Units" },
      { value: "health_centers", label: "Strengthening & Construction of existing Dispensaries, Vety. Health Centres & Resource Centre – 15 Nos" }
    ],
    
    // FISHERIES
    fisheries: [
      { value: "cluster_development", label: "Cluster based fisheries development and institutionalization of FFPOs" },
      { value: "core_activities", label: "Core Activities" },
      { value: "new_district_offices", label: "Construction of office buildings in newly created districts – 2 nos" }
    ],
    
    // FORESTRY & WILDLIFE
    forestry: [
      { value: "check_gates", label: "Construction of Check gate at Tizit, Lanye, Singphan wildlife sanctuary – 3 nos" },
      { value: "range_offices", label: "Construction of Range Offices at Tuli, Noksen, Rangapahar, Phungkhuri and Aboi (@ ₹ 35.00 lakh per Unit × 5 Units)" },
      { value: "colony_road", label: "Upgradation of forest colony road at Mon, Mokokchung and Wokha" },
      { value: "kiphire_office", label: "Construction of Wildlife warden office cum residence and staff quarter at Kiphire" },
      { value: "environment_day", label: "World Environment Day and Wildlife Week" }
    ],
    
    // COOPERATION
    cooperation: [
      { value: "marcofed", label: "MARCOFED activities" },
      { value: "core_activities", label: "Core Activities" },
      { value: "niuland_office", label: "Construction of office building of ARCS Niuland" },
      { value: "peren_office", label: "Construction of office building of ARCS Peren" }
    ],
    
    // LAND RESOURCES DEVELOPMENT
    landresources: [
      { value: "coffee_plantation", label: "Promoting Sustainable Livelihood through Coffee Plantation in Nagaland" },
      { value: "rubber_sheet", label: "Economic upliftment through Rubber Sheet Roller" },
      { value: "resource_centre", label: "Resource centre" },
      { value: "rubber_maintenance", label: "Rubber maintenance" },
      { value: "coffee_station", label: "Coffee adaptation station" },
      { value: "coffee_cafe", label: "Promotion of Coffee Café" },
      { value: "springshed", label: "Springshed Development" },
      { value: "arecanut", label: "Arecanut Plantation" }
    ],
    
    // BIO RESOURCE & AROMATIC PLANT
    bioresource: [
      { value: "bio_resources", label: "Promotion & Development of Bio‑resources in Nagaland" }
    ],
    
    // BEE & HONEY MISSION
    beehoney: [
      { value: "beekeeping", label: "Beekeeping and Honey Development in Nagaland" }
    ],
    
    // NEPED
    neped: [
      { value: "climate_change", label: "Building community resilience and adaptation to climate change for the Community Conservation Areas (CCAs)" }
    ],
    
    // HYDROGER
    hydroger: [
      { value: "pico_hydro", label: "Development of Pico (Hydroger) and small hydro, ram pump, solar dryer and zero energy cold storage technologies in Nagaland to address rural Livelihoods" }
    ],
    
    // RURAL DEVELOPMENT
    ruraldevelopment: [
      { value: "rd_canteen", label: "Construction of RD canteen cum Driver Rest house at RD Directorate Compound" },
      { value: "lerie_quarter", label: "Construction of Staff Quarter at Lerie" },
      { value: "zunheboto_office", label: "Construction of BDO office, Zunheboto" },
      { value: "farmers_market", label: "Construction of Farmers market" },
      { value: "road_improvement", label: "Improvement of roads" }
    ],
    
    // SIRD
    sird: [
      { value: "academic_block", label: "Construction of Administrative‑Cum‑Academic Block at SIRD office Complex, Kohima" },
      { value: "core_activities", label: "Core activities" }
    ],
    
    // LAND REVENUE
    landrevenue: [
      { value: "directorate_office", label: "Construction of Directorate Office, Kohima" },
      { value: "longleng_office", label: "Construction of DLRSO office at Longleng" },
      { value: "core_activities", label: "Core Activities" }
    ],
    
    // TOURISM
    tourism: [
      { value: "hornbill_festival", label: "Hornbill festival 2025" },
      { value: "mini_hornbill", label: "Mini Hornbill Tribal Festival" },
      { value: "office_building", label: "Construction of office building at Peren/ Dimapur/ Mokokchung/ Phek" },
      { value: "core_activities", label: "Core Activities" },
      { value: "tsuza_resort", label: "Construction of additional amenities at Tourist Resort at Tsuza Eryu, Pangti Wokha" }
    ],
    
    // ECONOMICS & STATISTICS
    economics: [
      { value: "parapet_wall", label: "Construction of parapet wall and repair & renovation of Directorate of Economics & Statistics" },
      { value: "kohima_quarters", label: "Construction of Staff Quarters of Economics & Statistics Department at Directorate, Kohima" },
      { value: "peren_quarters", label: "Construction of Flat Type Staff Quarter (G+2) for District Economics & Statistics Office, Peren" },
      { value: "directorate_beautification", label: "Construction of flower bed, lighting and beautification of the Directorate premises" },
      { value: "tuensang_quarters", label: "Construction of Flat Type Staff Quarter (G+2) for District Economics & Statistics Office, Tuensang" },
      { value: "zunheboto_office", label: "Construction of DESO Office, Zunheboto" },
      { value: "core_activities", label: "Core Activities" }
    ],
    
    // CIVIL SUPPLIES
    civilsupplies: [
      { value: "wooden_dunnages", label: "Construction of wooden dunnages for foodgrain storage at various locations" },
      { value: "tuensang_office", label: "Construction of DCSO office building at Tuensang" },
      { value: "tobu_godown", label: "Construction of Godown at Tobu ADC Hq." },
      { value: "zunheboto_office", label: "Construction of DCSO Office cum Quarter at Zunheboto Hq." },
      { value: "tamlu_godown", label: "Construction of Godown at Tamlu, Longleng" },
      { value: "peren_office", label: "Construction of ADS office, Peren" }
    ],
    
    // LEGAL METROLOGY & CP
    legalmetrology: [
      { value: "state_commission_wall", label: "State Commission Site retaining wall & ring well" },
      { value: "state_commission_works", label: "Construction of additional works at State Commission Site" },
      { value: "directorate_quarter", label: "Under construction type‑IV quarter near Directorate 2nd floor, boundary fencing & retaining wall" },
      { value: "kohima_lab", label: "Repair & Renovation of Secondary Standard Laboratory, Kohima" },
      { value: "district_labs", label: "Repair & Renovation of Working Standard Laboratory at 6 Districts" },
      { value: "tseminyu_fencing", label: "Boundary fencing and road cutting in Tseminyu WSL & District Commission site" },
      { value: "mokokchung_toilet", label: "Construction of 2 Toilet (Male & Female) at Assistant Controller Office, Mokokchung" },
      { value: "kiphire_wall", label: "Retaining wall at WSL & District Commission building, Kiphire" },
      { value: "phek_rewiring", label: "Re‑wiring of Electricity, Renovation and Painting at Assistant Controller Office, Phek" },
      { value: "hod_quarter", label: "Drainage & railing at (HoD quarter) Forest colony" },
      { value: "lerie_wall", label: "Retaining wall at Lerie (Type‑IV) Quarter site" },
      { value: "consumer_awareness", label: "Consumer Awareness Campaign in 8 Districts (2nd Phase) Rural programme, Seminars, Hoardings etc. Target‑8 District H.Q, 16 Villages" },
      { value: "consumer_education", label: "Legal Metrology & Consumer Protection Education in High schools & Colleges (2nd Phase). Creating Consumer clubs, essay competitions, seminars etc. Target‑10 Colleges & 20 High schools" },
      { value: "officer_training", label: "Seminar/Workshop/Training for Legal Metrology officers in collaboration with Ministry of Consumer Affairs, GoI and Indian Institute of Legal Metrology, Ranchi" },
      { value: "consumer_booklets", label: "Booklets, brochures & pamphlets on Consumer Protection Acts & Rules" },
      { value: "metrology_booklets", label: "Booklets, brochures & pamphlets on Legal Metrology Acts & Rules" }
    ],
    
    // EVALUATION
    evaluation: [
      { value: "quarter_extension", label: "Extension of staff quarter at Officers' Hill Kohima" },
      { value: "lerie_quarter", label: "Construction of flat type staff quarter at Lerie, Kohima" },
      { value: "directorate_gallery", label: "Construction of Gallery with Garage at Directorate Complex, Kohima" },
      { value: "evaluation_studies", label: "Evaluation Studies" },
      { value: "wokha_office", label: "Construction of District Evaluation Office at Wokha" },
      { value: "kiphire_office", label: "Construction of District Evaluation Office at Kiphire" },
      { value: "tuensang_quarter", label: "Construction of DEO's Quarter at Tuensang" },
      { value: "retaining_wall", label: "Re‑Construction of collapsed CRSM retaining wall with RCC retaining wall at Directorate complex, Kohima" }
    ],
    
    // SCHOOL EDUCATION
    schooledu: [
      { value: "jotsoma_classrooms", label: "Extension of class rooms at GHSS Jotsoma" },
      { value: "darogapathar_school", label: "Construction of GHS Darogapathar" },
      { value: "jalukie_school", label: "Construction of GHSS at Jalukie" },
      { value: "chumoukedima_office", label: "Construction of DEO & SDEO office Chumoukedima" },
      { value: "tseminyu_office", label: "Construction of DEO & SDEO office Tseminyu" },
      { value: "noklak_office", label: "Construction of DEO & SDEO office Noklak" },
      { value: "shamator_office", label: "Construction of DEO & SDEO office Shamator" },
      { value: "meluri_office", label: "Construction of DEO Office at Meluri" },
      { value: "peren_auditorium", label: "Construction of Auditorium GHSS, Peren" },
      { value: "nuiland_office", label: "Construction of DEO Office at Nuiland" }
    ],
    
    // HIGHER EDUCATION
    higheredu: [
      { value: "tuensang_library", label: "Construction of Library building at Sao Chang college, Tuensang" },
      { value: "mokokchung_admin", label: "Construction of Administrative building at Fazl Ali college Mokokchung" },
      { value: "mangkolemba_quarter", label: "Construction of staff quarter flate type at Mangkolemba" },
      { value: "kohima_quarters", label: "Construction of Quarters (flat type) for Director and Additional Director at Khruzhie, Kohima" },
      { value: "vocational_center", label: "Construction of Vocational Interpretation Centre at Directorate of Higher Education, Kohima" },
      { value: "longleng_fencing", label: "Construction of Security Iron Fencing at Yingli College, Longleng" },
      { value: "scte_transformer", label: "Construction and Installation of Sub‑station 11/0.4 KVA Transformer along with LT Lines at State College of Teacher Education (SCTE), Kohima" },
      { value: "mon_classroom", label: "Construction of Additional Classroom at Wangkhao Government College, Mon" },
      { value: "naac_activities", label: "NAAC Activities" },
      { value: "it_equipment", label: "Purchase of IT Equipments for Yingli College, Longleng; Pfutsero Government College, Pfutsero; Peren Government College, Peren; Zunheboto Government College, Zunheboto; and Mount Tiyi College, Wokha" }
    ],
    
    // SCERT
    scert: [
      { value: "tuensang_diet", label: "Construction of New DIET Complex, Tuensang" },
      { value: "wokha_fencing", label: "Fencing at DIET Wokha" },
      { value: "directorate_renovation", label: "Painting and Minor Renovation of SCERT Directorate Building and SIEMAT building" },
      { value: "longleng_fencing", label: "Fencing at DIET Longleng" }
    ],
    
    // DEVELOPMENT OF UNDER DEVELOPED AREAS
    underdeveloped: [
      { value: "iconic_projects", label: "UDAP – Iconic projects" },
      { value: "grant_in_aid", label: "UDAP – Grant in Aid" },
      { value: "core_activities", label: "Core activities" },
      { value: "duda_quarter", label: "Construction of DUDA staff Quarter at Kohima, Ph‑I" },
      { value: "skill_development", label: "Human Resource Development in multi disciplinary skill trades for rural unemployed youth" }
    ],
    
    // WATER RESOURCES
    waterresources: [
      { value: "mon_quarter", label: "Repair & renovation of EEs quarter at Mon" },
      { value: "mokokchung_wall", label: "Construction of boundary wall at SDO (WRD) quarter, Mokokchung" },
      { value: "wokha_wall", label: "Construction of retaining wall at EE office compound, Wokha" },
      { value: "core_activities", label: "Core Activities" },
      { value: "irrigation_project", label: "Irrigation project for integrated model settled farming at Mongsenyimti" },
      { value: "water_bodies", label: "Creation of water bodies" },
      { value: "peren_office", label: "Construction of E.E office, Peren" }
    ],
    
    // DISTRIBUTION & REVENUE (D&R)
    dnr: [
      { value: "tobu_line", label: "Construction of New 33kV line from Sangsangnyu to Tobu HQs with 33/11 kV, 2.5 MVA Sub-Station" },
      { value: "losami_substation", label: "Construction of 33/11 kV, 1.6 MVA Sub-Station along with associated 33kV, 11kV and LT Line including 2×100 kVA and 63 kVA, 11/0.43 kV Distribution Transformer near Losami junction between Chizami and Lanye under Phek District" },
      { value: "chizami_line", label: "Construction of new 33 kV line from 132/33 kV main power substation at Rukuzu, Pfutsero to 33/11 kV Chizami Sub-station" },
      { value: "substation_upgrade", label: "Upgradation of 33/11 kV existing Sub-stations" },
      { value: "equipment_purchase", label: "Purchase of Distribution Transformers, conductors, poles and other accessories" }
    ],
    
    // TRANSMISSION & GENERATION (T&G)
    tng: [
      { value: "kmtl_tower", label: "Construction of one 220kV D/C dead end tower at KMTL 400/220 kV Sub-Station and Installation of line differential relays at 220 kV sub-station Zhadima for 220kV KMTL downstream feeder" },
      { value: "aboi_office", label: "Construction of JE (E) office Aboi, Mon" },
      { value: "longchem_wall", label: "Construction of Retaining Wall at 1.6 MVA, 33/11kV at Longchem, Mokokchung" },
      { value: "longkhim_office", label: "Construction of JE (E) office at Longkhim, Tuensang" },
      { value: "zuketsa_room", label: "Construction of Duty Room at Zuketsa, Pfutsero Sub-division, Phek" },
      { value: "kohima_transformers", label: "Commissioning of 2 nos. of 8 MVA, 132/33 kV 1-phase transformers at 132kV Kohima RESS" },
      { value: "afforestation", label: "Compensatory afforestation for 220kV D/C Dimapur-Zhadima transmission line" },
      { value: "zhadima_transformers", label: "Associated works for testing & Commissioning of new 4 nos. of 33.33MVA, 220/132kV Zhadima SS transformers" },
      { value: "chiephobozou_fencing", label: "Construction of Security Fencing with Gate at 132/33 kV Chiephobozou Sub-Station, Kohima" },
      { value: "zhadima_fencing", label: "Construction of Security fencing, Guard room, gate etc at 100 MVA 220/132/33 kV sub station at Zhadima, Kohima district" },
      { value: "chumoukedima_tubewell", label: "Construction of 1 tubewell at Central Store Chumoukedima" },
      { value: "peren_fencing", label: "Construction of security fencing for Department allotted land (1.44 acres) at DC complex, New Peren" },
      { value: "tseminyu_office", label: "Construction of JE(E) office, Tseminyu" },
      { value: "pughoboto_office", label: "Construction of JE Office building at Pughoboto" },
      { value: "chizami_office", label: "Construction of JE (E) office at Chizami" },
      { value: "tuensang_tower", label: "Construction of one 132kV D/C Dead-end tower at Tuensang sub-station" },
      { value: "nito_transformer", label: "Commissioning of 1no. of 7.5MVA, 66/33kV Transformer at 66kV Nito Farm sub-station" },
      { value: "mon_transformer", label: "Commissioning of 2.5MVA, 66/33kV transformer at 66/33kV Mon sub-station" },
      { value: "stadium_transformers", label: "Commissioning of 2 nos. of 5MVA, 33/11kV transformers, one each at 33/11kV I.G. Stadium sub-station and 66/33/11kV Nito Farm sub-station" },
      { value: "duilumroi_line", label: "Strengthening of 33kV line for evacuation of power from 2.4MW Duilumroi SHP" },
      { value: "zhadima_treatment", label: "Anti-weed Treatment at 220/132/33kV sub-station Zhadima" },
      { value: "stadium_fencing", label: "Construction of security fencing wall at 33/11kV IG stadium sub-station, Kohima" },
      { value: "lerie_fencing", label: "Construction of fuse call Duty Room, Retaining wall and brick fencing at 33/11 kV Lerie Sub-station, Kohima" },
      { value: "kiyake_fencing", label: "Construction of retaining wall and brick fencing at 33/11kV Kiyake sub-station, Kohima" },
      { value: "dimapur_counters", label: "Construction of sheds with fan for SDO Revenue Counters at SDO I, SDO II & SDO III, Dimapur and SDO Chumoukedima with toilet" },
      { value: "noklak_counter", label: "Construction of Duty Room cum Revenue Counter at Noklak" },
      { value: "electrical_store", label: "Construction of Electrical store at TPS Chumoukedima and Department Canteen Nagarjan" },
      { value: "meluri_counter", label: "Construction of Duty room cum Revenue Counter at Meluri, Phek" },
      { value: "chozuba_counter", label: "Construction of JE(E) Office cum Revenue Counter Chozuba" },
      { value: "changtongya_office", label: "Construction of SDO(E) Office at Changtongya, Mokokchung" },
      { value: "kuhuboto_fencing", label: "Construction of Security fencing at Kuhuboto, Niuland" },
      { value: "niuland_counter", label: "Construction of JE office cum Revenue Counter, Niuland" },
      { value: "diezephe_fencing", label: "Construction of Boundary wall and security fencing with gates at 220/132/33 kv sub-station at Diezephe, Dimapur" }
    ],
    
    // NEW & RENEWABLE ENERGY
    renewable: [
      { value: "solar_pump", label: "Solar Water Pump" },
      { value: "solar_street", label: "Solar Street Lighting System" },
      { value: "solar_home", label: "Solar Home Lighting System" }
    ],
    
    // ELECTRICAL INSPECTORATE
    electrical: [
      { value: "green_village", label: "Green Village" }
    ],
    
    // INDUSTRIES & COMMERCE
    industriescommerce: [
      { value: "eodb", label: "Ease of Doing Business (EODB), Phase 4 Consultancy charges and implementation" },
      { value: "it_equipment", label: "Procurement of IT equipments" },
      { value: "startup_policy", label: "Budgetary provision for incentives under revised Nagaland Startup Policy 2019" },
      { value: "handloom", label: "For implementation of State Level Handloom Development programme" },
      { value: "training_capacity", label: "Training and Capacity building and implementation of India Industrial Land Bank (IILB) exercise" },
      { value: "sdic_office", label: "Construction of SDIC Office at Noklak SDIC, Atoizu SDIC and Tizit SDIC" },
      { value: "training_awareness", label: "Training and Awareness programme for various activities for the department under various Ministries (Textiles, Food Processing, Commerce & Industries, MSME)" },
      { value: "export_promotion", label: "Export promotion Activities" },
      { value: "nttc_core", label: "NTTC Core Activities" },
      { value: "nhhdc_core", label: "NHHDC Core Activities" },
      { value: "nkvib_core", label: "NKVIB Core Activities" },
      { value: "nagaland_hotels", label: "Nagaland Hotels Ltd Core activities" },
      { value: "mokokchung_fencing", label: "Fencing at Mokokchung DIC Office & Viswema beekeeping farm" },
      { value: "dimapur_wall", label: "Boundary wall at DIC Office, Dimapur" }
    ],
    
    // SERICULTURE
    sericulture: [
      { value: "silk_processing", label: "Silk Processing Unit" },
      { value: "eri_muga", label: "Augmentation of Eri & Muga" },
      { value: "eri_rural", label: "Development of Eri Silk in Rural Areas" },
      { value: "nuiland_office", label: "Construction of District Office building at Nuiland" },
      { value: "shamator_office", label: "Construction of Districts Office building at Shamator" },
      { value: "core_activities", label: "Core activities" },
      { value: "peren_office", label: "Construction of DSO office and staff quarter, Peren" }
    ],
    
    // GEOLOGY & MINING
    geologymining: [
      { value: "chemical_lab", label: "Construction of Chemical Lab Building at DGM Office Compound, Dimapur" },
      { value: "mineral_connectivity", label: "Construction of Mineral Connectivity from Lal Pathor to Dikhu Bridge (1.8 km)" },
      { value: "core_activities", label: "Core activities" },
      { value: "mineral_exploration", label: "Mineral Exploration" },
      { value: "groundwater_exploration", label: "Ground water Exploration & Development" }
    ],
    
    // NSMDC
    nsmdc: [
      { value: "dumper_trucks", label: "Purchase of two (2) Dumper Trucks" },
      { value: "water_reservoir", label: "Construction of Water Reservoir Tank for MCP & DDSP at Wazeho" },
      { value: "approach_road", label: "Construction of approach road and development of Quarry for extraction of white marble at Moke Village" },
      { value: "repair_maintenance", label: "Repair and Maintenance of Existing Machineries & Equipment at DDSP, Wazeho and MIGC, Kiruphema" }
    ],
    
    // ROADS & BRIDGES
    roadsbridges: [
      { value: "srdp", label: "Special Road Development programme (SRDP)" },
      { value: "road_improvement", label: "Improvement of other Roads" },
      { value: "bridge_rehab", label: "Rehabilitation of Bridges" }
    ],
    
    // MECHANICAL ENGINEERING
    mechanical: [
      { value: "heavy_machinery", label: "Procurement of heavy machineries" },
      { value: "boundary_wall", label: "Construction of Boundary wall at Modern Mechanical Workshop cum Training Centre at Shokhuvi" }
    ],
    
    // ROAD TRANSPORT
    roadtransport: [
      { value: "mangkolemba_station", label: "Construction of Sub‑Station & garage at Mangkolemba" },
      { value: "zunheboto_station", label: "Construction of Sub‑Station & garage at Zunheboto" },
      { value: "tseminyu_station", label: "Construction of Sub‑Station & garage at Tseminyu" },
      { value: "pfutsero_station", label: "Construction of Sub‑Station & garage at Pfutsero" },
      { value: "meluri_station", label: "Construction of Sub‑Station & garage at Meluri" },
      { value: "lerie_workshop", label: "Upgradation of NST Divisional Workshop at Lerie, Kohima" },
      { value: "tamlu_office", label: "Construction of Booking office at Tamlu" },
      { value: "tenning_office", label: "Construction of Booking office and Bus shed at Tenning" },
      { value: "fleet_acquisition", label: "Acquisition of Fleet" },
      { value: "air_cell", label: "Establishment of AIR (Aviation, Inland Waterways & Railways) Cell Office" }
    ],
    
    // MOTOR VEHICLE
    motorvehicle: [
      { value: "dimapur_office", label: "Construction of DTO office at Dimapur" },
      { value: "staff_quarter", label: "Construction of Staff quarter 4(four) unit flat at Inspection and Certification Centre at Chumoukedima" },
      { value: "zunheboto_office", label: "District Transport Office, Zunheboto" },
      { value: "core_activities", label: "Core activities" }
    ],
    
    // SCIENCE & TECHNOLOGY
    sciencetech: [
      { value: "staff_quarter", label: "Construction of Staff Quarter cum Conference Hall at Science & Technology Complex (phase 2)" },
      { value: "science_mission", label: "Nagaland Science Mission" },
      { value: "core_activities", label: "Core activities" }
    ],
    
    // INFORMATION TECHNOLOGY & COM
    infotech: [
      { value: "drainage_system", label: "Construction & strengthening of drainage system below the building of Directorate of IT&C Kohima (for 24‑25)" },
      { value: "software_dev", label: "Software Development related activities" },
      { value: "ai_center", label: "Setting up of Artificial Intelligence & Research Centre" },
      { value: "innovation_hub", label: "Site Development at Nagaland Innovation Hub" },
      { value: "director_quarter", label: "Construction of Director's Quarter" }
    ],
    
    // PLANNING MACHINERY
    planning: [
      { value: "zunheboto_quarter", label: "Construction of DPO Quarter Cum Guest House at Zunheboto" },
      { value: "pughoboto_hall", label: "Construction of SDPDB Conference Hall at Pughoboto" },
      { value: "shamator_office", label: "Construction of DPO Office Shamator" },
      { value: "bhandari_hall", label: "Construction of SDPDB Conference Hall‑Cum‑Chairman's Office/Chamber at Bhandari" },
      { value: "infrastructure", label: "Other infrastructure works" },
      { value: "boundary_fencing", label: "Boundary fencing at Planning quarter dept, Phezoucha & Lerie" }
    ],
    
    // TECHNICAL EDUCATION
    techedu: [
      { value: "tsunazho_hostel", label: "Construction of boys hostel at Govt Polytechnic Tsunazho Chetcheba, Phek" },
      { value: "aboi_hostel", label: "Construction of Girls Hostel at Aboi (20 Bedded)" },
      { value: "sedem_hostel", label: "Construction of Girls Hostel at Sedem Tuensang (20 Bedded)" },
      { value: "doyang_quarters", label: "Construction of Type‑II quarters at Govt. Polytechnic at Doyang, Wokha" },
      { value: "seithekima_quarters", label: "Construction of Type‑II quarters at Govt. Polytechnic Seithekima" },
      { value: "smart_classroom", label: "Smart classroom in Various Polytechnics" },
      { value: "seithekima_extension", label: "Extension of Academic Building under Polytechnic Seithekima C, Chumoukedima" }
    ],
    
    // YOUTH RESOURCES & SERVICES
    sports: [
      { value: "shamator_office", label: "Construction of DSO & YRO Office and Staff Quarter at Shamator" },
      { value: "peren_office", label: "Construction of DSO & YRO Office and Staff Quarter at Peren" },
      { value: "directorate_office", label: "Construction of Directorate Office Building at IG Stadium" },
      { value: "youth_empowerment", label: "Capacity building for youth empowerment" },
      { value: "tournament_activities", label: "Tournament and related activities" },
      { value: "sports_capacity", label: "Capacity building for sports personnel" },
      { value: "tafma_activities", label: "TaFMA (core activities)" },
      { value: "multipurpose_hall", label: "Completion of Pre‑fab Multipurpose Hall at Kezo Town and Pungro Town" },
      { value: "hornbill_activities", label: "YRS Hornbill related activities" }
    ],
    
    // ART & CULTURE
    artculture: [
      { value: "hornbill_festival", label: "Hornbill Festival" },
      { value: "core_activities", label: "Core activities" },
      { value: "tangchu_footsteps", label: "Construction of footsteps at Tangchu Bung Tekwa & Ikiaheile Tekwa" },
      { value: "longwa_morung", label: "Construction of Angh Morung at Longwa Village" },
      { value: "mon_hall", label: "Construction of Cultural Hall at Tammong, Mon Town" },
      { value: "longzang_morung", label: "Construction of Pusa Morung at Longzang village, Mon District" },
      { value: "longleng_office", label: "Construction of District Cultural office, Longleng" }
    ],
    
    // HEALTH & FAMILY WELFARE
    health: [
      { value: "satakha_upgrade", label: "Upgradation of PHC to CHC at Satakha" },
      { value: "dimapur_hospital", label: "Dimapur District Hospital a. Deep well boring with overhead tank, Construction of boundary wall. b. Intercom & CCTV. c. 250 KVA transformer (2 Nos), ceiling & wall‑mounted fans (100 Nos). d. Labour tables (6 Nos). e. Fogging machines (10 Nos)" },
      { value: "zutovi_subcentre", label: "Construction of Sub‑Centre at Zutovi village, Chumoukedima" },
      { value: "samson_subcentre", label: "Construction of Sub‑Centre at Samson village, Chumoukedima" },
      { value: "tizit_phc", label: "Construction of PHC Tizit village, Mon" },
      { value: "mon_hostel", label: "Construction of Hostel at Mon Nursing College" },
      { value: "nokyan_wellness", label: "Construction of Health & Wellness-SC at Nokyan, Mon" },
      { value: "dimapur_approach", label: "Dimapur District Hospital approach road, retaining wall, drainage, footpath and Barrack-Type Quarter, Dimapur" },
      { value: "oting_phc", label: "Construction of PHC building at Oting, Mon" },
      { value: "longwa_phc", label: "Construction of PHC building at Longwa, Mon" },
      { value: "noksen_phc", label: "Construction of PHC building at Noksen, Tuensang" },
      { value: "wakching_chc", label: "Construction of CHC at Wakching, Mon" },
      { value: "tuensang_cmo", label: "Construction of CMO Office, Tuensang" },
      { value: "dimapur_lodge", label: "Construction of Patient Lodge at District Hospital, Dimapur" },
      { value: "wokha_ms", label: "Construction of MS Quarter at District Hospital, Wokha" }
    ],
    
    // PUBLIC HEALTH ENGINEERING
    phe: [
      { value: "mon_water", label: "Improvement of Water supply to Mon town through gravity from Leangha Source" },
      { value: "kohima_water", label: "Improvement of water supply to Kohima Town through repair of existing distribution reservoirs (3 Nos), and development of water-filling point for PHED tankers at Dzuza river for Kohima town" },
      { value: "alempang_water", label: "Providing water supply to Alempang ward, Mokokchung Town through Groundwater" },
      { value: "zunheboto_fencing", label: "Construction of Security Fencing at Zunheboto, Executive Engineer Office cum Store" },
      { value: "kohima_imis", label: "Construction and Development of IMIS block at Chief Engineer office, PHED, Kohima" },
      { value: "longleng_fencing", label: "Construction of security fencing at Longleng town PHED Store" },
      { value: "kiphire_fencing", label: "Construction of security fencing and store renovation at Kiphire town PHED Store" },
      { value: "medziphema_upgrade", label: "Upgradation of PHED Sub‑Divisional Office Building at Medziphema, Chumoukedima" },
      { value: "peren_office", label: "Construction of EE PHED Office, Peren" }
    ],
    
    // PWD HOUSING
    pwdhousing: [
      { value: "ag_colony", label: "Construction of flat-type 6-unit AG Colony Kohima (2 blocks) at AG‑PWD colony Kohima" },
      { value: "jalukie_resthouse", label: "Construction of PWD Rest House at Jalukie" },
      { value: "tobu_office", label: "Construction of SDO PWD(H) Office at Tobu" },
      { value: "tuensang_quarter", label: "Construction of PWD staff quarter flat type‑B, 4‑unit at Tuensang HQ" },
      { value: "shamator_quarter", label: "Construction of PWD staff quarter at Shamator" },
      { value: "longkhim_office", label: "Construction of PWD Office at Longkhim, Tuensang" },
      { value: "tizit_quarter", label: "Construction of PWD staff quarter at Tizit under Mon District" },
      { value: "akuluto_quarter", label: "Construction of Staff quarter at Akuluto" },
      { value: "peren_complex", label: "Construction of PWD Complex at Peren (New Site HQ)" },
      { value: "marepkong_retaining", label: "Construction of Retaining wall, side drainage and CC Pavement at Rental Housing Marepkong ward, Mokokchung" },
      { value: "dimapur_quarter", label: "Construction of RCC G+4 staff quarter near PWD office complex, Dimapur (type‑B)" },
      { value: "sanis_office", label: "Construction of Sub‑Divisional Office Complex at Sanis under Wokha District" },
      { value: "guesthouse_pavement", label: "Fibre Reinforced Concrete pavement at State Guest House, Kohima" },
      { value: "kohima_extension", label: "Extension of PWD Mechanical Office at Kohima (first floor)" },
      { value: "satakha_office", label: "Construction of SDO PWD(R&B) Office Satakha" },
      { value: "commission_complex", label: "Construction of state commission complex (CIC Women Commission, Election Commission, Disability Commission, Electricity Regulatory Commission, Women Rights Commission, Backward Tribe Commission & Child Right Protection Commission)" },
      { value: "pfutsero_complex", label: "Construction of Sub‑Divisional Office Complex at Pfutsero Ph‑II" },
      { value: "mokokchung_complex", label: "Construction of district office Complex at Mokokchung Ph‑I" },
      { value: "tuensang_complex", label: "Construction of PWD complex at Tuensang Ph‑I" },
      { value: "dimapur_housing", label: "Construction of Rental Housing at Dimapur Ph‑IV" },
      { value: "menyitsuda_housing", label: "Construction of Rental Housing at Menyitsuda Phek District" },
      { value: "lokayukta_building", label: "Construction of Nagaland Lokayukta Annex building, Kohima" },
      { value: "dibrugarh_transformer", label: "Installation of Transformer & Lift at Patient Guest house at Dibrugarh" },
      { value: "meluri_resthouse", label: "Construction of PWD Rest House at Meluri District HQ, Meluri" },
      { value: "thonoknyu_quarter", label: "Construction of SDO R&B Quarter at Thonoknyu" },
      { value: "nssb_wall", label: "Construction of retaining wall & fencing around boundary of NSSB Office at Touliezou, Thizama" },
      { value: "cmrc_renovation", label: "Construction of gazebo, gate, footpath, drain, concertina fencing, lawn and renovation of staff housing at CMRC, Kohima" },
      { value: "tuensang_completion", label: "Completion of PWD (H) Staff quarter flat type‑B, 4‑unit, Tuensang HQ" },
      { value: "mangkolemba_office", label: "Construction of EE PWD R&B office at Mangkolemba" }
    ],
    
    // G.A. HOUSING (CAWD)
    gahousing: [
      { value: "zunheboto_dc", label: "Construction of DC's Office building at Zunheboto" },
      { value: "tamlu_adc", label: "Construction of ADC Office at Tamlu, Longleng" },
      { value: "niuland_quarter", label: "Construction of flat-type quarter (type‑C) for Administrative Officers at Niuland" },
      { value: "wokha_dc", label: "Construction of DC's Office Complex at Wokha" },
      { value: "dimapur_dc", label: "Construction of DC Office Complex at Dimapur" },
      { value: "chumoukedima_circuit", label: "Construction of Circuit House at Chumoukedima" },
      { value: "sungro_eac", label: "Construction of EAC Quarter including security fencing at Sungro Town, Wokha" },
      { value: "chozuba_resthouse", label: "Construction of G.A Rest House at Chozuba, Phek" },
      { value: "chetheba_office", label: "Construction of EAC Office at Chetheba, Phek (additional work)" },
      { value: "mangkolemba_hall", label: "Construction of Conference Hall on rooftop of ADC Office at Mangkolemba, Mokokchung" },
      { value: "wakching_sdo", label: "Construction of SDO (C) Office at Wakching (including site & services)" },
      { value: "sechu_sdo", label: "Construction of SDO (C) Office at Sechu–Zubza (including site & services)" },
      { value: "chizami_sdo", label: "Construction of SDO (C) Quarter at Chizami (including site & services)" },
      { value: "medziphema_adc", label: "Construction of ADC Quarter at Medziphema (including site & services)" },
      { value: "zunheboto_guesthouse", label: "Construction of Guest House for Administrative Officers at Zunheboto Town" },
      { value: "medziphema_quarter", label: "Construction of flat-type quarter at Medziphema" },
      { value: "mon_adc", label: "Construction of ADC Residence Mon" },
      { value: "sanis_adc", label: "Construction of New ADC Office at Sanis HQ (including Site & services), Wokha" },
      { value: "phek_resthouse", label: "Construction of G.A. Rest House at Phek (including Site & services)" },
      { value: "chetheba_quarter", label: "Construction of Flat-type Staff Quarter (Type‑C) at Chetheba, Phek (including Site & services)" },
      { value: "pughoboto_resthouse", label: "Construction of G.A. Rest House at Pughoboto, Zunheboto (including Site & services)" },
      { value: "tamlu_residence", label: "Construction of ADC residence, Tamlu" },
      { value: "meluri_dc", label: "Construction of DC residence, Meluri" },
      { value: "longkhim_adc", label: "Construction of ADC complex, Longkhim" },
      { value: "mokokchung_sdo", label: "Construction of SDO(C) quarter, Mokokchung" },
      { value: "atoizu_adc", label: "Construction of ADC Complex at Atoizu HQ, Zunheboto (including site & services)" }
    ],
    
    // POLICE HOUSING
    policehousing: [
      { value: "alichen_office", label: "Construction of EE (PEP) Office at Alichen" },
      { value: "lumithsami_road", label: "Improvement of road for shifting of NAP coy post from Akuluto to Lumithsami (New Site)" },
      { value: "tuli_office", label: "Construction of Office–cum–Residence for SDPO Tuli" },
      { value: "wokha_road", label: "Improvement of road from MT garage to Officers Mess for DEF Wokha" },
      { value: "yonglok_barrack", label: "Construction of Jawans Barrack at Yonglok" },
      { value: "chumoukedima_wall", label: "Construction of brick boundary wall between private and police land at Police Complex Chumoukedima (Phase II)" },
      { value: "naptc_office", label: "Construction of Commandant Office for NAPTC Chumoukedima" },
      { value: "wokha_road_improvement", label: "Improvement of road within the Police Reserve Camp area at Wokha" },
      { value: "chukitong_boundary", label: "Construction of Security/Boundary at Police Outpost Chukitong" },
      { value: "akuluto_residence", label: "Construction of SDPO residence at Akuluto" },
      { value: "bhandari_road", label: "Improvement of road at 7th NAP Bn HQ, Bhandari" },
      { value: "meluri_residence", label: "Construction of SP Residence at Meluri" },
      { value: "sungro_barrack", label: "Construction of Barrack at Sungro PS" },
      { value: "chumoukedima_residence", label: "Construction of SP Residence Chumoukedima" },
      { value: "shamator_residence", label: "Construction of SP Residence at Shamator" },
      { value: "noklak_residence", label: "Construction of SP Residence at Noklak" },
      { value: "tseminyu_residence", label: "Construction of SP Residence at Tseminyu" },
      { value: "niuland_residence", label: "Construction of SP Residence at Niuland" },
      { value: "dimapur_station", label: "Construction of East Police Station at CP Dimapur" },
      { value: "rhododenron_hall", label: "Upgradation of Rhododenron Hall at Chumoukedima" },
      { value: "naptc_well", label: "Construction of deep well at NAPTC" },
      { value: "zhadima_wall", label: "Re‑construction of collapsed security wall at Zhadima" },
      { value: "nap_store", label: "Construction of 1st NAP Bn Store at Police Complex Chumoukedima" },
      { value: "naptc_transformer", label: "Installation and connection of 100 kVA transformer at NAPTC Chumoukedima including LT Line" },
      { value: "zunheboto_wall", label: "Construction of retaining wall at SP office Zunheboto" },
      { value: "kiphire_well", label: "Construction of deep tube well at DEF Kiphire/SP Office & Pungro PS" },
      { value: "bhandari_well", label: "Construction of deep tube well at 7th NAP Bn Bhandari" },
      { value: "kiphire_fencing", label: "Construction of Security fencing at DEF Kiphire" },
      { value: "tizit_barrack", label: "Construction of Barrack at 6th NAP Tizit Mon" },
      { value: "mon_barrack", label: "Construction of Barrack at Mon DEF" },
      { value: "longleng_quarter", label: "Construction of Staff quarter at Longleng DEF" },
      { value: "wokha_fencing", label: "Construction of Security fencing behind SP Office Wokha" },
      { value: "sungka_barrack", label: "Construction of Barrack at 7th NAP Bn at Sungka" },
      { value: "akuluto_office", label: "Construction of SDPO Office Akuluto" },
      { value: "yamomo_station", label: "Construction of Police Station at Yamomo Bhandari" }
    ],
    
    // LAW & JUSTICE
    lawjustice: [
      { value: "kohima_quarter", label: "Construction of Flat Type Quarter at Agri/Forest in Kohima" },
      { value: "mokokchung_store", label: "Construction of store room for solar battery at District court building, Mokokchung" },
      { value: "mokokchung_renovation", label: "Major Repair and Renovation of Old District Court Building at Mokokchung" },
      { value: "highcourt_wall", label: "Construction of Boundary Wall at North Side near Chief Justice Residence, New High Court Complex, Kohima, Nagaland" },
      { value: "ministers_hill_repair1", label: "Repair & Renovation of Govt. Qtr. No. AH/HIGH.82 Type‑IV located at New Ministers Hill, Kohima" },
      { value: "agri_farm_repair", label: "Repair & Renovation of Quarter No. AF/HC‑1 located at Agri Farm Colony, Kohima" },
      { value: "ministers_hill_repair2", label: "Repair & Renovation of Govt. Qtr. No. AH/HIGH/89 located at New Ministers Hill, Kohima" },
      { value: "ministers_hill_repair3", label: "Repair & Renovation of Govt. Qtr. No. AH/HIGH/81 located at New Ministers Hill, Kohima" },
      { value: "ict_extension", label: "Extension of 2 rooms in respect of departmental quarter No. HC/KB/11 Type‑1 attached to the ICT building at Gauhati High Court Kohima Bench" },
      { value: "chief_justice_repair", label: "Repair and renovation of Hon'ble Chief Justice Bungalow, Old Minister's Hill, Kohima" },
      { value: "judges_bungalow_repair", label: "Repair and Renovation work in the judges Bungalow AH/42 New Minister's Hill, Kohima" },
      { value: "highcourt_retaining", label: "Construction of Retaining wall with drainage and septic Tank at High Court Quarter No. MH/HC/53, Old Minister Hill, Kohima" },
      { value: "judges_boundary", label: "Construction of Retaining Wall and increasing the height of the boundary wall using DYNA roofing material at Judges Bungalow AH/41, New Minister Hill, Kohima" },
      { value: "chandmari_extension", label: "Extension of 3 (Three) Rooms on the terrace at Law Department Officers QTR at Chandmari, Kohima" },
      { value: "chandmari_reservoir", label: "Construction of Water reservoir with filtration at Law Department Officers QTR at Chandmari, Kohima" }
    ],
    
    // HOME GUARDS HOUSING
    homeguardshousing: [
      { value: "retaining_wall_hq", label: "Construction of retaining wall & drainage below Staff Quarters at HQ, Kohima" },
      { value: "chief_instructor_quarter", label: "Construction of Cheif Instructors Quarter at Central Training Institute, Toluvi, Dimapur. (Multi storied building, ground floor" },
      { value: "kiphire_admin_block", label: "Construction of 2 storey building for District Commandants' Administrative Block, Kiphire" },
      { value: "mon_admin_block", label: "Construction of 2 storey building for District Commandants' Administrative Block, Mon" }
    ],
    
    // JAILS (PRISON) HOUSING
    jailshousing: [
      { value: "pfutsero_subjail", label: "Construction of Sub‑Jail, Pfutsero" },
      { value: "noklak_jail", label: "Construction of District Jail at Noklak" },
      { value: "kohima_staff_quarter", label: "Construction of Staff Quarter at District Jail, Kohima" },
      { value: "kohima_female_guard", label: "Construction of Female Guard room and Kitchen at District Jail, Kohima" },
      { value: "kohima_borewell", label: "Provision of deep bore well at District Jail, Kohima" },
      { value: "lerie_staff_quarter", label: "Construction of staff quarter flat type at Lerie, Kohima" }
    ],
    
    // EXCISE HOUSING
    excisehousing: [
      { value: "phek_office_building", label: "Construction of Excise Office Building, Officers & Staff Quarter, Parking Lot, Malkhana & Security Guard Room at Phek, Nagaland" },
      { value: "dimapur_warehouse", label: "Construction of Excise Bonded Warehouse/ Godown, Office, Boundary Wall & Washroom at Duncan Basti, Dimapur, Nagaland" },
      { value: "peren_office", label: "Construction of Excise office, Peren" }
    ],
    
    // URBAN DEVELOPMENT
    urbandev: [
      { value: "mokokchung_culvert", label: "Re‑construction of RCC Slab Culvert and lined drain at IMDH road (hospital road) Mokokchung town" },
      { value: "dimapur_shops", label: "Construction of Type‑B Shops at Super market, Dimapur" },
      { value: "uids", label: "Urban Infrastructure Development Scheme (UIDS)" },
      { value: "urban_roads", label: "Urban roads" },
      { value: "nagaki_master_plan", label: "Preparation of Master Plan for Nagaki, Chumoukedima" }
    ],
    
    // MUNICIPAL AFFAIRS
    municipal: [
      { value: "sanitation_sewerage", label: "Urban Sanitation & Sewerage Scheme" },
      { value: "ulb_office_buildings", label: "Construction of Office Building for the Urban Local Bodies without Office Buildings" },
      { value: "chiephobozou_extension", label: "Extension of marketing complex, Chiephobozou" },
      { value: "municipal_conference_hall", label: "Construction of Conference Hall at the rooftop of Directorate of Municipal Affairs Office Building" }
    ],
    
    // INFORMATION & PUBLIC RELATIONS
    infopr: [
      { value: "phek_dpro", label: "Construction of District Public Relation Office (DPRO), Phek" },
      { value: "tseminyu_dpro", label: "Construction of District Public Relation Office (DPRO), Tseminyu" },
      { value: "shamator_dpro", label: "Construction of DPRO office & residential building at Shamator" },
      { value: "tuensang_dpro", label: "Construction of DPRO office, Tuensang" },
      { value: "eng_mojo", label: "Electronic News Gathering (ENG) & Mobile Journalism (MOJO)" },
      { value: "connect_sphere", label: "Connect Sphere: Social Media Management" }
    ],
    
    // LABOUR
    labour: [
      { value: "lerie_hod_quarter", label: "HoD quarter at Lerie Colony, Kohima" },
      { value: "wokha_office", label: "Construction of Assistant Labour Commissioner Office at Wokha" },
      { value: "core_activities", label: "Core Activities" }
    ],
    
    // EMPLOYMENT, SKILL DEV & ENTREPRENEURSHIP
    employment: [
      { value: "ministers_hill_quarter", label: "Construction of flat type staff qtr, New Minister Hill, Kohima" },
      { value: "school_excellence", label: "School of Excellence in Skill Development (SoESD)" },
      { value: "management_program", label: "Higher Level Skill Development Program: Management Orientation Programme in Collaboration with Indian Institute of Management, Kozhikode" },
      { value: "media_entertainment", label: "Center of Excellence for Media & Entertainment" },
      { value: "entrepreneurship_center", label: "Entrepreneurship Development Center" },
      { value: "paces", label: "Providing Access to Core Employability Skills (PACES)" },
      { value: "dream_nagaland", label: "Accelerated Access in Registration for People with Disabilities in Employment Exchanges: Disability Research, Empowerment, and Accessibility Mission in Nagaland (DREAM Nagaland)" },
      { value: "peren_employment_office", label: "Upgradation and construction of rural employment bureau to District Employment Exchange Office, Peren" }
    ],
    
    // SOCIAL WELFARE
    socialwelfare: [
      { value: "kikruma_cdpo", label: "Construction of CDPO Office Kikruma, Phek" },
      { value: "bayavu_quarter", label: "Construction of G + 2 Officers quarter at Bayavu Hill, Kohima" },
      { value: "tizit_cdpo", label: "Construction of CDPO Office at Tizit, Mon" },
      { value: "shamator_cdpo", label: "Construction of CDPO Office at Shamator" },
      { value: "peren_cdpo", label: "Construction of CDPO Office at Peren" },
      { value: "tamlu_cdpo", label: "Construction of CDPO Office at Tamlu" },
      { value: "model_aw_centers", label: "Construction of 32 Model AW Centres (2 Per district)" },
      { value: "highland_park", label: "Upgradation/upkeep of Outdoor Amphitheater Shed, Iron Removal Plant and Repairing of Skating Rink at Highland Park, Kohima" }
    ],
    
    // WOMEN RESOURCES
    womenresources: [
      { value: "core_activities", label: "Core activities" },
      { value: "peren_center", label: "Construction of women resource centre at Peren (For completion)" },
      { value: "wokha_center", label: "Construction of women resource centre at Wokha (For completion)" },
      { value: "zunheboto_center", label: "Construction of women resource centre at Zunheboto (For completion)" },
      { value: "livelihood_intervention", label: "Transformative Livelihood Intervention project" },
      { value: "myki_activities", label: "Myki activities" }
    ],
    
    // PRINTING & STATIONERY
    printing: [
      { value: "chandmari_quarter", label: "Construction of Director Quarter at Chandmari, Kohima" },
      { value: "directorate_renovation", label: "Repair & Renovation of Directorate Building – Phase I & II at Chandmari, Kohima" },
      { value: "core_activities", label: "Core Activities" }
    ],
    
    // ADMINISTRATIVE TRAINING INSTITUTE
    admtraining: [
      { value: "security_fencing", label: "Construction of security fencing towards southern at ATI, Kohima" },
      { value: "core_activities", label: "Core Activities" }
    ],
    
    // ASSEMBLY COMPLEX PROJECT
    assembly: [
      { value: "approach_road", label: "Staff qtr approach road Ph‑I (Block‑A)" },
      { value: "legislators_furnishings", label: "Legislators Home Furnishings Phase‑II for completion" },
      { value: "secretary_quarter", label: "Additional work at Secretary quarter, Additional‑I & quarter for completion" },
      { value: "deputy_speaker", label: "Quarters for support staff & additional works at Deputy Speaker residence" },
      { value: "conference_room", label: "Upgradation & furnishing of Conference room, Committee room & training room" },
      { value: "assembly_hall", label: "Assembly hall amenity upgradation and furnishing, Ph‑I" }
    ],
    
    // FIRE SERVICES
    fire: [
      { value: "core_activities", label: "Core Activities for development of approach roads and protection works for Directorate & existing fire stations" },
      { value: "new_stations", label: "Development of Fire Stations at newly created Districts and Divisions" },
      { value: "equipment_purchase", label: "Purchase of Fire Fighting Equipment & Appliances for fire stations in various districts" },
      { value: "peren_quarter", label: "Construction of Staff quarter, Peren" }
    ],
    
    // TREASURY & ACCOUNTS
    treasury: [
      { value: "tseminyu_office", label: "Construction of sub‑Treasury office building with SBI at Tseminyu" },
      { value: "mon_office", label: "Construction of Sr. Treasury office cum staff quarter at Mon" },
      { value: "pfutsero_quarter", label: "Construction of staff qtr at Sub‑Treasury office, Pfutsero" },
      { value: "aboi_office", label: "Construction of Sub‑Treasury office cum staff quarter, Aboi" }
    ],
    
    // BORDER AFFAIRS
    border: [
      { value: "merinema_quarter", label: "Construction of flat type officer & staff qtr at Merinema" },
      { value: "bm_office", label: "Construction of BM Office/Rest House (1 No.)" }
    ],
    
    // PARLIAMENTARY AFFAIRS
    parliamentary: [
      { value: "furniture_procurement", label: "Procurement of Furnitures/Computers for Hon'ble Minister, Parliamentary Affairs at Secretariat" },
      { value: "study_tour", label: "Parliamentary Study Tour for MLAs of the State" },
      { value: "legislators_profile", label: "Research, Compilation and Printing of Current Legislators Profile" }
    ],
    
    // TAXES
    taxes: [
      { value: "dimapur_commissionerate", label: "Construction of New State Taxes Commissionerate at Dimapur" },
      { value: "phek_office", label: "Construction of State Taxes Office at Phek (Ph‑1)" },
      { value: "kohima_quarters", label: "Construction of Flat Type Staff Quarters at Kohima" },
      { value: "noklak_office", label: "Construction of State Taxes Office at Noklak" }
    ],
    
    // VILLAGE GUARDS
    villageguards: [
      { value: "khudei_barrak", label: "Construction of VG barrak at Khudei" },
      { value: "shandsa_barrak", label: "Construction of barrak for VG at Shandsa village Tizit" },
      { value: "sheanghah_barrak", label: "Construction of VG barrak at Sheanghah Wamsa" },
      { value: "yaongyimchen_barrak", label: "Construction of barrak for VG at Yaongyimchen" },
      { value: "thonoknyu_barrak", label: "Construction of VG barrak at Thonoknyu Town" },
      { value: "nokhu_barrak", label: "Construction of VG Barrak at Nokhu Town" },
      { value: "kiphire_office", label: "Construction of Deputy Commandant VG Office at Kiphire Hq." },
      { value: "loakkun_barrak", label: "Construction of VG barrak at Loakkun Village" },
      { value: "longching_barrak", label: "Construction of VG barrak at Longching Village" },
      { value: "meluri_barrak", label: "Construction of VG barrak at Meluri Hq" },
      { value: "longleng_barrak", label: "Construction of VG Barrak at Longleng Town" },
      { value: "shiponger_barrak", label: "Construction of VG Barrak with kitchen & Toilet at Shiponger Village, Tuensang" },
      { value: "mimi_barrak", label: "Construction of VG Barrak with Kitchen & Toilet at Mimi, Kiphire" },
      { value: "shamator_barrak", label: "Construction of VG barrak with Kitchen and toilet at Shamator Town" },
      { value: "yimrup_barrak", label: "Construction of VG Barrak with Kitchen & Toilet at Yimrup" },
      { value: "longleng_quarter", label: "Improvement of quarter cum guest house of VG at Longleng Hq" },
      { value: "chenwetnyu_barrak", label: "Construction of VG barrak at Chenwetnyu Village, Mon" },
      { value: "phokpur_fencing", label: "Construction of Security fencing at Phokpur village" },
      { value: "kohima_wall", label: "Construction of composite retaining wall‑4 for newly constructed VG Rest House at Kohima" },
      { value: "dimapur_godown", label: "Improvement of VG godown at Dimapur" },
      { value: "noklak_fencing", label: "Construction of Security fencing at VG Barrak Noklak Village" },
      { value: "kingniu_barrak", label: "Construction of VG barrak with kitchen and toilet at Kingniu" },
      { value: "tuensang_office", label: "Construction of Commandant VG office Tuensang Hq" },
      { value: "sangphur_training", label: "Construction of VG basic Training ground/centre at Sangphur, Shamator" },
      { value: "tuensang_fencing", label: "Construction of security fencing with steel gate at VG Commandant Residential Quarter, Tuensang" },
      { value: "tamlu_barrak", label: "Construction of VG Barrak at Tamlu Village" },
      { value: "chingkao_chingnyu_barrak", label: "Construction of VG Barrak at Chingkao Chingnyu Village" },
      { value: "chenloishu_barrak", label: "Construction of VG Barrak at Chenloishu Village" },
      { value: "chingkao_chingha_barrak", label: "Construction of VG Barrack at Chingkao Chingha Village, Mon" },
      { value: "chenmoho_barrak", label: "Construction of VG Barrack at Chenmoho Village, Mon" }
    ],
    
    // CHIEF ELECTORAL OFFICER
    electoralofficer: [
      { value: "kohima_office", label: "Construction of Chief Electoral Office Building at D.Block, Kohima" }
    ],
    
    // HOME incl. DISASTER MANAGEMENT
    home: [
      { value: "disaster_machineries", label: "Procurement of Machineries for Disaster Response Force" },
      { value: "disaster_plans", label: "Preparation of District Disaster Management Plans, Vulnerable assessment through 3D mapping and aerial survey of Nagaland, Hazard Risk Vulnerability Assessment" },
      { value: "emergency_center", label: "Strengthening of State Emergency Operation Centre" },
      { value: "ddma_infrastructure", label: "Construction of infrastructure for setting up of District Disaster Management Authority cell for the six new districts namely Shamator, Chumoukedima, Niuland, Noklak, Tseminyu, Kiphire and Meluri." }
    ],
    
    // TRIBAL AFFAIRS
    tribal: [
      { value: "directorate_building", label: "Construction of Directorate building" },
      { value: "staff_quarter", label: "Construction of staff quarter (Phase‑1 & Phase‑2)" },
      { value: "tribal_arena", label: "Construction of Tribal Arena at Kisama Heritage Village Phase‑1" }
    ],
    
    // MINORITY AFFAIRS
    minority: [
      { value: "directorate_office", label: "Construction of New Directorate Office Building (Ph‑I)" },
      { value: "women_market", label: "Minority Women Market Shed (12 units in various districts)" },
      { value: "holy_land_tour", label: "Holy Land Tour" }
    ],
    
    // STATE LOTTERIES
    lotteries: [
      { value: "directorate_office", label: "Construction of new Directorate of State Lotteries Office Building at New Capital Complex, Thizama" }
    ]
  };

  const departmentOptions = createDepartmentOptions();

  // Generate data for the table based on selected department
  const generateOthersStatementData = () => {
    let id = 1;
    const data = [];
    
    if (selectedDepartment.value === "all") {
      // If "All" is selected, show projects from all departments
      Object.keys(projectMap).forEach(dept => {
        if (projectMap[dept]) {
          projectMap[dept].forEach(project => {
            // Generate random values for demonstration
            const debit = Math.floor(Math.random() * 300000) + 50000;
            const credit = Math.floor(Math.random() * debit);
            const amountLeft = debit - credit;
            const day = Math.floor(Math.random() * 28) + 1;
            
            // Find the department label
            let departmentLabel = "";
            Object.keys(departmentMap).forEach(sector => {
              const foundDept = departmentMap[sector].find(d => d.value === dept);
              if (foundDept) {
                departmentLabel = foundDept.label;
              }
            });
            
            data.push({
              id: id++,
              department: departmentLabel,
              projectName: project.label,
              date: `${day.toString().padStart(2, '0')}/01/25`,
              debit: debit.toString(),
              credit: credit.toString(),
              amountLeft: amountLeft.toString()
            });
          });
        }
      });
    } else {
      // If a specific department is selected, show only its projects
      const deptProjects = projectMap[selectedDepartment.value];
      
      if (deptProjects && deptProjects.length > 0) {
        deptProjects.forEach(project => {
          // Generate random values for demonstration
          const debit = Math.floor(Math.random() * 300000) + 50000;
          const credit = Math.floor(Math.random() * debit);
          const amountLeft = debit - credit;
          const day = Math.floor(Math.random() * 28) + 1;
          
          data.push({
            id: id++,
            department: selectedDepartment.label,
            projectName: project.label,
            date: `${day.toString().padStart(2, '0')}/01/25`,
            debit: debit.toString(),
            credit: credit.toString(),
            amountLeft: amountLeft.toString()
          });
        });
      }
      // If no projects found for the selected department, data will remain an empty array
    }
    
    return data;
  };

  const othersStatementData = generateOthersStatementData();

  // Format number for display
  const formatNumber = (num) => {
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  // Calculate grand totals
  const calculateGrandTotals = () => {
    const totalDebit = othersStatementData.reduce((sum, item) => {
      return sum + (parseFloat(item.debit) || 0);
    }, 0);

    const totalCredit = othersStatementData.reduce((sum, item) => {
      return sum + (parseFloat(item.credit) || 0);
    }, 0);

    const totalAmountLeft = othersStatementData.reduce((sum, item) => {
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
    
    if (othersStatementData.length === 0) {
      return (
        <tr>
          <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
            No Projects Available
          </td>
        </tr>
      );
    }
    
    return othersStatementData.map((item) => {
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
            {othersStatementData.length > 0 && (
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
