import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

import { GoLaw } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import ProductsMegamenu from './ProductsMegamenu';

const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/' className='title'><GoLaw />LAWKOS</Link>

        <div className='links'>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>About</Link>
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>Services <MdKeyboardArrowDown /> </Link>  
              <ProductsMegamenu />      
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>Resurces <MdKeyboardArrowDown /> </Link>  
              <ProductsMegamenu />      
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>News </Link>    
           </div>
           <div className='nav-link'>
              <Link to='/' className='inner-link'>Careers </Link>    
           </div>
        </div>

        <div className='auth'>
            <div className='number'>
               <LuPhoneCall />
               <div className='number-detail'>
               <h6>+383 123 456 789</h6>
               <p>Call our office</p>
               </div>
            </div>
            <Link to='/' className='contact'>Contact us</Link>
        </div>
    </div>
  )
}

export default Nav