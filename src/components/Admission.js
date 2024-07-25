import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Admission.css';

const Admission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="admissions-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Admissions</h2>
        
        <div className="process-section" data-aos="fade-right">
          <h3>Process</h3>
          <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </div>
        
        <div className="criteria-section" data-aos="fade-left">
          <h3>Criteria</h3>
          <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </div>
        
        <div className="important-dates-section" data-aos="fade-up">
          <h3>Important Dates</h3>
          <ul>
            <li><strong>Admission Form Availability:</strong> March 1st</li>
            <li><strong>Last Date for Submission:</strong> March 31st</li>
            <li><strong>Entrance Test:</strong> April 15th</li>
            <li><strong>Announcement of Results:</strong> April 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admission;
