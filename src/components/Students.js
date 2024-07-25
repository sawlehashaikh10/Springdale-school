import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Students.css';

const Students = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const extracurricularActivities = [
    "Music",
    "Dance",
    "Drama",
    "Art",
    "Sports",
    "Robotics",
    "Debate Club",
    "Science Club"
  ];

  const clubsAndSocieties = [
    "Literary Society",
    "Environmental Club",
    "Astronomy Club",
    "Coding Club"
  ];

  const achievements = [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition"
  ];

  const studentCouncil = [
    { position: "President", name: "Amy Parker", grade: "Grade 12" },
    { position: "Vice President", name: "Rajiv Mehta", grade: "Grade 11" },
    { position: "Secretary", name: "Lisa Wong", grade: "Grade 10" }
  ];

  return (
    <div className="students-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Life at Springdale</h2>
        
        <div className="extracurricular-activities" data-aos="fade-up" data-aos-delay="100">
          <h3>Extracurricular Activities</h3>
          <ul>
            {extracurricularActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        <div className="clubs-societies" data-aos="fade-up" data-aos-delay="200">
          <h3>Clubs and Societies</h3>
          <ul>
            {clubsAndSocieties.map((club, index) => (
              <li key={index}>{club}</li>
            ))}
          </ul>
        </div>

        <div className="achievements" data-aos="fade-up" data-aos-delay="300">
          <h3>Achievements</h3>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="student-council" data-aos="fade-up" data-aos-delay="400">
          <h3>Student Council</h3>
          <ul>
            {studentCouncil.map((member, index) => (
              <li key={index}>
                {member.position}: {member.name}, {member.grade}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
