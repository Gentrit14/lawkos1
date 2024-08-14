import React from 'react';
import { Link } from 'react-router-dom';
import { NavData } from './components/NavData';

const ProductsMegamenu = () => {
  return (
    <div className='nav-megamenu'>
      <div className='menu-content3'>
        <h6 className='menu-h6'>Our practice area</h6>
      <div className='menu-content2'>
      {NavData.map((item) => (
        <div className='menu-link' key={item.title}>
          <Link to={item.to}>
            <div className='icon'>{item.icon}</div>
            <h6>{item.title}</h6>
          </Link>
        </div>
      ))}
      </div>
      </div>
      <div className="menu-details">
        <div className="personal">
          <h6>Personal</h6>
          <p>From family law to personal injury, we treat your case with the care it deserves. Let's protect what matters most to you.</p>
        </div>
        <div className="business">
          <h6>Business</h6>
          <p>Achieve your business goals with LawKos comprehensive legal solutions, designed to mitigate risks and fuel your growth.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsMegamenu;
