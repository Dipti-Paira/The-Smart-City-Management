import React from 'https://esm.sh/react@18.2.0';
import ProgressBar from './ProgressBar';

const DashboardModule = ({ cityData }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
    <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <h2>🚦 Urban Mobility</h2>
      <p><strong>Congestion Level:</strong> {cityData.traffic.congestion}%</p>
      <ProgressBar value={cityData.traffic.congestion} color="#3498db" />
      <p><strong>Public Transit Efficiency:</strong> {cityData.traffic.publicTransit}%</p>
      <ProgressBar value={cityData.traffic.publicTransit} color="#2ecc71" />
      <p><strong>Emergency Response Time:</strong> {cityData.traffic.emergencyResponse}%</p>
      <ProgressBar value={cityData.traffic.emergencyResponse} color="#e74c3c" />
    </div>

    <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <h2>⚡ Energy Management</h2>
      <p><strong>Renewable Energy Usage:</strong> {cityData.energy.renewable}%</p>
      <ProgressBar value={cityData.energy.renewable} color="#f39c12" />
      <p><strong>Carbon Emissions:</strong> {cityData.energy.carbonEmissions} tons</p>
      <p><strong>Energy Storage Capacity:</strong> {cityData.energy.energyStorage}%</p>
      <ProgressBar value={cityData.energy.energyStorage} color="#8e44ad" />
    </div>

    <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <h2>🍃 Environmental Health</h2>
      <p><strong>Air Quality Index:</strong> {cityData.environment.airQuality}</p>
      <p><strong>Biodiversity Index:</strong> {cityData.environment.biodiversityIndex}</p>
      <ProgressBar value={cityData.environment.biodiversityIndex} color="#27ae60" />
      <p><strong>Green Spaces:</strong> {cityData.environment.greenSpaces}%</p>
      <ProgressBar value={cityData.environment.greenSpaces} color="#2ecc71" />
    </div>
  </div>
);

export default DashboardModule;