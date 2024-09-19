import React from 'react';
import './Service.scss';
import { FormattedMessage } from 'react-intl'
import statueImage from '../img/thinker.png';


const Service = () => {
  return (
    <div className="services-section">
      <div className="services-content">
      <h2 className="services-title"><FormattedMessage id='service-title' defaultMessage='Services' /></h2>
        <div className="text-content">
          <div className="service personal">
            <h3><FormattedMessage id='service-personal-title' defaultMessage='Personal' /></h3>
            <p>
            <FormattedMessage id='service-personal-text' defaultMessage='From family law to personal injury, we treat your case with the care it deserves. Lets protect what matters most to you.' />
            </p>
          </div>
          <div className="service business">
            <h3>
            <FormattedMessage id='service-business-title' defaultMessage='Business' />
              </h3>
            <p>
            <FormattedMessage id='service-business-text' defaultMessage='Achieve your business goals with LawKos comprehensive legal solutions, designed to mitigate risks and fuel your growth.' />
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
