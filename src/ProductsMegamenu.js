import React from 'react';
import { Link } from 'react-router-dom';
import { NavData } from './components/NavData';
import { FormattedMessage } from 'react-intl'
import { GoArrowRight } from "react-icons/go";

const ProductsMegamenu = () => {
  return (
    <div className='nav-megamenu'>
      <div className='menu-content3'>
        <h6 className='menu-h6'><FormattedMessage id='our-practice-area' defaultMessage='Our practice area' /></h6>
      <div className='menu-content2'>
      {NavData.map((item) => (
        <div className='menu-link' key={item.title}>
          <Link to={item.to}>
          <div className='arroww'>
            <GoArrowRight />
            </div>
            <div className='link1'>
            <div className='icon'>{item.icon}</div>
            <h6>{item.title}</h6>
            </div>
          </Link>
        </div>
      ))}
      </div>
      </div>
      <div className="menu-details">
        <div className="personal">
          <h6><FormattedMessage id='personal-title' defaultMessage='Personal' /></h6>
          <p>
          <FormattedMessage id='personal-text' defaultMessage='From family law to personal injury, we treat your case with the care it deserves. Lets protect what matters most to you.' />
            </p>
        </div>
        <div className="business">
          <h6><FormattedMessage id='business-title' defaultMessage='Business' /></h6>
          <p>
          <FormattedMessage id='personal-text' defaultMessage='Achieve your business goals with LawKos comprehensive legal solutions, designed to mitigate risks and fuel your growth.' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsMegamenu;
