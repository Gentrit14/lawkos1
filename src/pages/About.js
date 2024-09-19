import React from 'react';
import './About.scss';
import Buissnesman from '../img/businessman.png';
import { FormattedMessage } from 'react-intl'
import Office from '../img/office.png';
import { HiArrowRight } from "react-icons/hi2";


const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-left-right">
          <div className="about-left">
            <h2><FormattedMessage id='about-title' defaultMessage='ABOUT US' /></h2>
            <h1 className="main-heading">
            <FormattedMessage id='about-title2' defaultMessage='Our team consists of well-coordinated lawyers that are able to solve the most difficult tasks and cases.' />
               <a href="/about" className="about-link">
              <FormattedMessage id='about-button' defaultMessage='About us' /><HiArrowRight />
            </a>
            </h1>
          </div>
          <div className='about-right2'>
          <div className="about-right">
            <div className="experience-circle"></div> {/* Add this div for the circle */}
            <h1 className="experience-number"><FormattedMessage id='experience-number' defaultMessage='15' /></h1>
            <p className="experience-text"><FormattedMessage id='experience-text' defaultMessage='Years of experience' /></p>
            <p className="about-description">
            <FormattedMessage id='about-description' defaultMessage='Founded in 2008, LawKos is committed to the pursuit of justice in our country and more. Our team of dedicated
              professionals works tirelessly to serve our community. We offer legal services and consultancy in different areas.' />
              
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
