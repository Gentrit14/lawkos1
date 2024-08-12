import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { GoLaw } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuRectangleVertical } from "react-icons/lu";
import ProductsMegamenu from './ProductsMegamenu';
import ResourcesMegamenu from './ResourcesMegamenu';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => setIsMobile(!isMobile);

    return (
        <div className='nav'>
            <Link to='/' className='title'><GoLaw />LAWKOS</Link>

            <div className={isMobile ? 'links nav-mobile open' : 'links'}>
                <div className='nav-link'>
                    <Link to='/' className='inner-link'>About</Link>
                </div>
                <div className='nav-link'>
                    <div className="inner-link">
                        Services
                        <LuRectangleVertical className='arrow1' />
                        <MdKeyboardArrowDown className='arrow2'/>
                    </div>
                    <ProductsMegamenu />
                </div>
                <div className='nav-link'>
                    <div className="inner-link">
                        Resources 
                        <LuRectangleVertical className='arrow1' />
                        <MdKeyboardArrowDown className='arrow2'/>
                    </div>
                    <ResourcesMegamenu />
                </div>
                <div className='nav-link'>
                    <Link to='/' className='inner-link'>News</Link>
                </div>
                <div className='nav-link'>
                    <Link to='/' className='inner-link'>Careers</Link>
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

            <div className='hamburger' onClick={toggleMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    );
};

export default Nav;
