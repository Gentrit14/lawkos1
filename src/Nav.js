import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { GoLaw } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa"; // Add these icons for hamburger menu
import ProductsMegamenu from './ProductsMegamenu';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const toggleMenu = () => setIsMobile(!isMobile);
    const toggleSubMenu = (link) => {
        if (activeLink === link) {
            setActiveLink(null);
        } else {
            setActiveLink(link);
        }
    };

    return (
        <div className='nav'>
            <Link to='/' className='title'><GoLaw />LAWKOS</Link>

            <div className={isMobile ? 'links mobile open' : 'links'}>
                <div className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => toggleSubMenu('about')}>
                    <Link to='/' className='inner-link'>About</Link>
                </div>
                <div className={`nav-link ${activeLink === 'services' ? 'active' : ''}`} onClick={() => toggleSubMenu('services')}>
                    <div className="inner-link">
                        Services <MdKeyboardArrowDown />
                    </div>
                    {activeLink === 'services' && <ProductsMegamenu />}
                </div>
                <div className={`nav-link ${activeLink === 'resources' ? 'active' : ''}`} onClick={() => toggleSubMenu('resources')}>
                    <div className="inner-link">
                        Resources <MdKeyboardArrowDown />
                    </div>
                    {activeLink === 'resources' && <ProductsMegamenu />}
                </div>
                <div className={`nav-link ${activeLink === 'news' ? 'active' : ''}`} onClick={() => toggleSubMenu('news')}>
                    <Link to='/' className='inner-link'>News</Link>
                </div>
                <div className={`nav-link ${activeLink === 'careers' ? 'active' : ''}`} onClick={() => toggleSubMenu('careers')}>
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
