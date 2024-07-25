import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Faculty.css';

const Faculty = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const facultyProfiles = [
    { name: "John Doe", title: "Principal", qualification: "M.Ed", experience: "20 years of experience in educational administration" },
    { name: "Jane Smith", title: "Vice Principal", qualification: "M.Sc. in Physics", experience: "15 years of teaching experience" },
    { name: "Emily Johnson", title: "English Teacher", qualification: "M.A. in English", experience: "10 years of teaching experience" },
    { name: "Michael Brown", title: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", experience: "8 years of teaching experience" },
    { name: "Sophia Davis", title: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years of teaching experience" },
    { name: "David Wilson", title: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years of teaching experience" }
  ];

  return (
    <div className="faculty-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Faculty</h2>
        <div className="profiles-section">
          {facultyProfiles.map((profile, index) => (
            <div className="profile-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <h3>{profile.name}</h3>
              <h4>{profile.title}</h4>
              <p>{profile.qualification}</p>
              <p>{profile.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
