import React, { useState, useEffect } from 'react';
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

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showProductsMenu, setShowProductsMenu] = useState(false);
    const [showResourcesMenu, setShowResourcesMenu] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        
        handleResize();
        
        
        window.addEventListener('resize', handleResize);
        
       
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
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
        <div className='nav2'>
        <div className='nav'>
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
                        <MdKeyboardArrowDown className='arrow2'/>
                        <RiArrowDropDownLine className='arrow3'/>
                    </div>
                    {showProductsMenu && <ProductsMegamenu />}
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
                        <MdKeyboardArrowDown className='arrow2'/>
                        <RiArrowDropDownLine className='arrow3'/>
                    </div>
                    {showResourcesMenu && <ResourcesMegamenu />}
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
            <div className='hamburger' onClick={toggleMenu}>
                {isMobile ? <FaTimes /> : <FaBars className='close' />}
            </div>
        </div>
        </div>
    );
};

export default Nav;
