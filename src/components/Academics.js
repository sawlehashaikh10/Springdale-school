import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Academics.css';

const Academics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="academics-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Academics</h2>
        
        <div className="curriculum-section" data-aos="fade-right">
          <h3>Curriculum</h3>
          <h4>Primary (Grades 1-5)</h4>
          <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          <h4>Secondary (Grades 6-10)</h4>
          <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          <h4>Senior Secondary (Grades 11-12)</h4>
          <p><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
          <p><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</p>
        </div>
        
        <div className="methodologies-section" data-aos="fade-left">
          <h3>Teaching Methodologies</h3>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>
        
        <div className="resources-section" data-aos="fade-up">
          <h3>Educational Resources</h3>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
