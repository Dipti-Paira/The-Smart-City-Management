import React from 'https://esm.sh/react@18.2.0';

const EducationModule = ({ education }) => (
  <div style={{ margin: '20px 0' }}>
    <h2>🎓 Educational Institutions</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {education.map((inst, index) => (
        <div 
          key={index} 
          style={{ 
            flex: 1, 
            margin: '10px', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '10px' 
          }}
        >
          <h3>{inst.name}</h3>
          <p><strong>Total Programs:</strong> {inst.programs || inst.onlineCourses}</p>
          <p><strong>Scholarships Available:</strong> {inst.scholarships || 'N/A'}</p>
          <p><strong>Internships Offered:</strong> {inst.internships || 'N/A'}</p>
          <p><strong>Notable Features:</strong> {inst.notableFeatures || 'N/A'}</p>
        </div>
      ))}
    </div>
  </div>
);

export default EducationModule;