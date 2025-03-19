import React from 'https://esm.sh/react@18.2.0';

const EmploymentModule = ({ jobs }) => (
  <div style={{ margin: '20px 0' }}>
    <h2>💼 Employment Opportunities</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {jobs.map((job, index) => (
        <div 
          key={index} 
          style={{ 
            flex: '1 1 30%', // Flex-grow, flex-shrink, flex-basis
            margin: '10px', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '10px', 
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location || 'N/A'}</p>
          <p><strong>Job Type:</strong> {job.jobType || 'N/A'}</p>
          <p><strong>Requirements:</strong> {job.requirements || 'N/A'}</p>
          <p><strong>Benefits:</strong> {job.benefits || 'N/A'}</p>
        </div>
      ))}
    </div>
  </div>
);

export default EmploymentModule;