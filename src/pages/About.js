import React from 'react';
import './About.scss';
import Buissnesman from '../img/businessman.png';
import Office from '../img/office.png';


const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-left-right">
          <div className="about-left">
            <h2>ABOUT US</h2>
            <h1 className="main-heading">
              Our team consists of well-coordinated lawyers that are able to solve the most difficult tasks and cases. <a href="/about" className="about-link">
              About us <span>&rarr;</span>
            </a>
            </h1>
          </div>
          <div className='about-right2'>
          <div className="about-right">
            <h1 className="experience-number">15</h1>
            <p className="experience-text">Years of experience </p>
            <p className="about-description">
              Founded in 2008, LawKos is committed to the pursuit of justice in our country and more. Our team of dedicated
              professionals works tirelessly to serve our community. We offer legal services and consultancy in different areas.
            </p>
          </div>
          <div className="about-images">
        <img src={Buissnesman} alt="Lawyer" className="about-image1" />
        <img src={Office} alt="Office" className="about-image" />
      </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
