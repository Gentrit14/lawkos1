import React from 'react';
import './Service.scss';
import statueImage from '../img/thinker.png'; // Replace with the correct image path

const Service = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-content">
        <div className="text-content">
          <div className="service personal">
            <h3>Personal</h3>
            <p>
              From family law to personal injury, we treat your case with the care it deserves. Let's protect what matters most to you.
            </p>
          </div>
          <div className="service business">
            <h3>Business</h3>
            <p>
              Achieve your business goals with LawKos comprehensive legal solutions, designed to mitigate risks and fuel your growth.
            </p>
          </div>
        </div>
        <div className="service-image">
          <img src={statueImage} alt="Statue" />
        </div>
      </div>
    </div>
  );
};

export default Service;
