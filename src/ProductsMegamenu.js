import React from 'react';
import { Link } from 'react-router-dom';
import { NavData } from './components/NavData.js';

const ProductsMegamenu = () => {
  return (
    <div className='nav-megamenu'>
      {NavData.map((props) => (
        <div className='menu-link' key={props.title}>
          <Link to={props.to}>
            <div className='icon'>{props.icon}</div>
            <div className='block'>
              <h6>{props.title}</h6>
              <p>{props.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsMegamenu;
