import React from 'https://esm.sh/react@18.2.0';

const ServicesModule = ({ services }) => (
  <div style={{ margin: '20px 0' }}>
    <h2>🏨 City Services</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {/* Hotels Section */}
      <div style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h3>Hotels</h3>
        {services.hotels.length > 0 ? (
          services.hotels.map((hotel, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><strong>{hotel.name}</strong> - Rating: {hotel.rating} ⭐</p>
              <p>Price: {hotel.price}</p>
            </div>
          ))
        ) : (
          <p>No hotels available.</p>
        )}
      </div>

      {/* Transportation Section */}
      <div style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h3>Transportation</h3>
        {services.transportation.length > 0 ? (
          services.transportation.map((transport, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><strong>{transport.type}</strong> Services</p>
              <p>Routes/Lines: {transport.routes || transport.lines}</p>
              <p>Average Wait Time: {transport.avgWaitTime || 'N/A'}</p>
              <p>Coverage: {transport.coverage || 'N/A'}</p>
            </div>
          ))
        ) : (
          <p>No transportation options available.</p>
        )}
      </div>

      {/* Additional Services Section */}
      <div style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h3>Additional Services</h3>
        <ul>
          <li>Public Libraries</li>
          <li>Community Centers</li>
          <li>Health Clinics</li>
          <li>Recreational Facilities</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ServicesModule;