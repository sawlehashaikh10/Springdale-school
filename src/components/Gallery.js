import React from 'react';
import '../assets/css/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="container">
        <div className="section-title">Gallery</div>
        <div className="gallery">
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/images/sports.png`} alt="Students participating in various sports events." />
            <p>Students participating in various sports events.</p>
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/images/science.png`} alt="Students presenting their science projects." />
            <p>Students presenting their science projects.</p>
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/images/culture.png`}alt="Students performing in the cultural fest." />
            <p>Students performing in the cultural fest.</p>
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/images/classroom.png`} alt="A glimpse of our interactive classrooms." />
            <p>A glimpse of our interactive classrooms.</p>
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/images/library.png`} alt="Students reading and studying in the school library." />
            <p>Students reading and studying in the school library.</p>
          </div>
          <div className="gallery-item">
            <video controls>
              <source src="path/to/school_tour.mp4" type="video/mp4" />
              Virtual tour of Springdale Public School.
            </video>
            <p>Virtual tour of Springdale Public School.</p>
          </div>
          <div className="gallery-item">
            <video controls>
              <source src="path/to/annual_function.mp4" type="video/mp4" />
              Highlights from the Annual Function 2023.
            </video>
            <p>Highlights from the Annual Function 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
