import React from 'react';
import './Home.scss';
import ladyJusticeImage1 from '../img/JusticeLady3.jpeg'; // replace with the correct path to your image
import ladyJusticeImage2 from '../img/JusticeLady4.jpeg'; // replace with the correct path to your image
import ladyJusticeImage3 from '../img/JusticeLady5.jpeg'; // replace with the correct path to your image
import sealImage from '../img/service1.png'; // replace with the correct path to your image
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Legal solutions to solve complex problems</h1>
        <div className='home-content2'>
        <p>
          We offer legal and consultancy services tailored to our clients' needs.
          Wherever business takes you, we are here to help.
        </p>
        <button className="consultation-button">Get a free consultation <FaArrowRightLong /></button>
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
