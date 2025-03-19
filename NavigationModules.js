import React from 'https://esm.sh/react@18.2.0';

const NavigationModule = ({ location }) => (
  <div style={{ margin: '20px 0' }}>
    <h2>🗺 City Navigation</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
        <h3>Current Location</h3>
        <p><strong>City:</strong> {location.currentCity}</p>
        <p><strong>Nearby Places:</strong></p>
        <ul>
          {location.nearbyPlaces.map((place, index) => (
            <li key={index}>
              {place.name} ({place.type})
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
        <h3>Transportation Options</h3>
        <p><strong>Available Modes:</strong></p>
        <ul>
          <li>Bus Services</li>
          <li>Metro Lines</li>
          <li>Bike Sharing</li>
          <li>Ride-Sharing Services</li>
        </ul>
        <p><strong>Average Wait Time:</strong> 10 minutes</p>
        <p><strong>Coverage:</strong> 80% of the city</p>
      </div>
    </div>
  </div>
);

export default NavigationModule;