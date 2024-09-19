import React from 'react';
import './Home.scss';
import { FormattedMessage } from 'react-intl'
import ladyJusticeImage1 from '../img/Lady1.png';
import ladyJusticeImage2 from '../img/Lady2.png';
import ladyJusticeImage3 from '../img/Lady3.png';
import sealImage from '../img/service1.png';
import { HiArrowRight } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          <FormattedMessage id='home-title' defaultMessage='Legal solutions to solve complex problems' />
          </h1>
        <div className='home-content2'>
        <p>
          <FormattedMessage id='home-text' defaultMessage='We offer legal and consultancy services tailored to our clients needs.
          Wherever business takes you, we are here to help.' />
        </p>
        <button className="consultation-button"><FormattedMessage id='home-button' defaultMessage='Get a free consultation' /> <HiArrowRight /></button>
        </div>
      </div>
      <div className="home-images">
        <div className="image-container left" style={{ backgroundImage: `url(${ladyJusticeImage1})` }}></div>
        <div className="image-container center" style={{ backgroundImage: `url(${ladyJusticeImage2})` }}></div>
        <div className="image-container right" style={{ backgroundImage: `url(${ladyJusticeImage3})` }}></div>
        <div className="seal">
        <img src={sealImage} alt="Seal" />
      </div>
      </div>
      
    </div>
  );
}

export default Home;
