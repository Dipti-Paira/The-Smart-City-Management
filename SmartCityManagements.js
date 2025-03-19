/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import './App.css'; // Import the CSS file

// Import Module Components
import DashboardModule from './DashboardModule';
import ServicesModule from './ServicesModule';
import NavigationModule from './NavigationModule';
import EmploymentModule from './EmploymentModule';
import EducationModule from './EducationModule';

// Main Smart City Management Component
function SmartCityManagement() {
  // State Management
  const [activeModule, setActiveModule] = useState('dashboard');
  const [cityData] = useState({
    traffic: {
      congestion: 45,
      publicTransit: 72,
      emergencyResponse: 92
    },
    energy: {
      renewable: 65,
      carbonEmissions: 250,
      energyStorage: 45
    },
    environment: {
      airQuality: 'Good',
      biodiversityIndex: 68,
      greenSpaces: 35
    }
  });

  const [services] = useState({
    hotels: [
      { name: "City Central Hotel", rating: 4.5, price: "$120/night" },
      { name: "Urban Comfort Inn", rating: 4.2, price: "$95/night" }
    ],
    transportation: [
      { type: "Bus", routes: 25, avgWaitTime: "10 mins" },
      { type: "Metro", lines: 5, coverage: "80%" }
    ],
    jobs: [
      { title: "Software Engineer", company: "Tech Innovations", salary: "$85,000", location: "New Urban Center", jobType: "Full-time", requirements: "Bachelor's in Computer Science", benefits: "Health Insurance, 401k" },
      { title: "Data Analyst", company: "City Analytics", salary: "$65,000", location: "New Urban Center", jobType: "Full-time", requirements: "Bachelor's in Data Science", benefits: "Health Insurance, Remote Work" },
      { title: "Project Manager", company: "Urban Development Corp", salary: "$75,000", location: "New Urban Center", jobType: "Contract", requirements: "5+ years of experience", benefits: "Health Insurance, Paid Time Off" },
      { title: "Graphic Designer", company: "Creative Solutions", salary: "$55,000", location: "Remote", jobType: "Part-time", requirements: "Portfolio required", benefits: "Flexible Hours" }
    ],
    education: [
      { name: "City University", programs: 50, scholarships: 15, internships: 10, notableFeatures: "Research Grants Available" },
      { name: "Urban Tech Institute", onlineCourses: 30, internships: 20, notableFeatures: "Industry Partnerships" },
      { name: "Community College", programs: 25, scholarships: 5, internships: 15, notableFeatures: "Affordable Tuition" },
      { name: "Tech Academy", onlineCourses: 40, internships: 30, notableFeatures: "Hands-on Training" }
    ]
  });

  const [location] = useState({
    currentCity: "New Urban Center",
    nearbyPlaces: [
      { name: "City Museum", type: "Cultural" },
      { name: "Central Park", type: "Recreation" },
      { name: "Main Hospital", type: "Healthcare" },
      { name: "City Library", type: "Educational" },
      { name: "Downtown Shopping Mall", type: "Commercial" }
    ]
  });

  // Render Different Modules
  const renderModule = () => {
    switch(activeModule) {
      case 'dashboard':
        return <DashboardModule cityData={cityData} />;
      case 'services':
        return <ServicesModule services={services} />;
      case 'navigation':
        return <NavigationModule location={location} />;
      case 'employment':
        return <EmploymentModule jobs={services.jobs} />;
      case 'education':
        return <EducationModule education={services.education} />;
      default:
        return <DashboardModule cityData={cityData} />;
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
      <header>
        <h1>🌆 Smart City Management System</h1>
        <nav>
          {['dashboard', 'services', 'navigation', 'employment', 'education'].map(module => (
            <button 
              key={module}
              onClick={() => setActiveModule(module)}
              style={{
                backgroundColor: activeModule === module ? '#3498db' : '#ecf0f1',
                color: activeModule === module ? 'white' : '#2c3e50',
              }}
            >
              {module.charAt(0).toUpperCase() + module.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {renderModule()}

      <footer>
        <a 
          href={import.meta.url.replace("esm.town", "val.town")} 
          target="_top"
        >
          View Smart City Management Source 🔍
        </a>
      </footer>
    </div>
  );
}

// Client-side Rendering
function client() {
  createRoot(document.getElementById("root")).render(<SmartCityManagement />);
}

if (typeof document !== "undefined") { client(); }

// Server-side Rendering
export default async function server(request) {
  return new Response(`
    <html>
      <head>
        <title>Smart City Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="App.css">
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `, {
    headers: { "content-type": "text/html" }
  });
}