import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { GoLaw } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuRectangleVertical } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import ProductsMegamenu from './ProductsMegamenu';
import ResourcesMegamenu from './ResourcesMegamenu';
import MobileNav from './components/MobileNav/MobileNav.js';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showProductsMenu, setShowProductsMenu] = useState(false);
    const [showResourcesMenu, setShowResourcesMenu] = useState(false);
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    
    const toggleMenu = () => setIsMobile(!isMobile);

    const toggleMegamenu = (menu) => {
        if (menu === 'products') {
            setShowProductsMenu(!showProductsMenu);
        } else if (menu === 'resources') {
            setShowResourcesMenu(!showResourcesMenu);
        }
    };

    const handleMouseEnter = (menu) => {
        if (!isMobile) {
            if (menu === 'products') {
                setShowProductsMenu(true);
            } else if (menu === 'resources') {
                setShowResourcesMenu(true);
            }
        }
    };

    const handleMouseLeave = (menu) => {
        if (!isMobile) {
            if (menu === 'products') {
                setShowProductsMenu(false);
            } else if (menu === 'resources') {
                setShowResourcesMenu(false);
            }
        }
    };

    

    return (
        
            <div className={color ? 'nav nav__sticky' : 'nav'}>
                
                <Link to='/' className='title'><GoLaw />LAWKOS</Link>

                <div className={isMobile ? 'links nav-mobile open' : 'links'}>
                    <div className='nav-link'>
                        <Link to='/' className='inner-link'>About</Link>
                    </div>

                    {/* Services Megamenu */}
                    <div
                        className='nav-link'
                        onMouseEnter={() => handleMouseEnter('products')}
                        onMouseLeave={() => handleMouseLeave('products')}
                    >
                        <div className="inner-link" onClick={() => isMobile && toggleMegamenu('products')}>
                            Services
                            <LuRectangleVertical className='arrow1' />
                            <MdKeyboardArrowDown className='arrow2' />
                            <RiArrowDropDownLine className='arrow3' />
                        </div>
                        {!isMobile && showProductsMenu && <ProductsMegamenu />}
                        {isMobile && showProductsMenu && (
                            <div className='mobile-megamenu'>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Corporate Law</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Real Estate</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Tax & Customs Laws</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Public Procurement</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Banking & Finance</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Insurance</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Energy & Infrastructure</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Family Law</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>ICT Sector</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Labor & Employment</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Intellectual Property Law</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Criminal Law</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Resources Megamenu */}
                    <div
                        className='nav-link'
                        onMouseEnter={() => handleMouseEnter('resources')}
                        onMouseLeave={() => handleMouseLeave('resources')}
                    >
                        <div className="inner-link" onClick={() => isMobile && toggleMegamenu('resources')}>
                            Resources
                            <LuRectangleVertical className='arrow1' />
                            <MdKeyboardArrowDown className='arrow2' />
                            <RiArrowDropDownLine className='arrow3' />
                        </div>
                        {!isMobile && showResourcesMenu && <ResourcesMegamenu />}
                        {isMobile && showResourcesMenu && (
                            <div className='mobile-megamenu'>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Network</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Legal Notice</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Laws of Kosovo</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Insights</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Podcast</Link>
                                </div>
                                <div className='nav-link'>
                                    <Link to='/' className='inner-link'>Contact</Link>
                                </div>
                                
                            </div>
                        )}
                    </div>

                    <div className='nav-link'>
                        <Link to='/' className='inner-link'>News</Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='/' className='inner-link'>Careers</Link>
                    </div>
                    

                    {/* Contact Info */}
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

                {/* Mobile Hamburger Menu */}
                <div className='hamburger' onClick={(e) =>{e.preventDefault(); toggleMenu();}}>
                    {isMobile ? <FaTimes /> : <FaBars className='close' />}
                </div>
                <MobileNav />
            </div>
        
    );
};

export default Nav;
