import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { GoLaw } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
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

                
                <MobileNav />
            </div>
        
    );
};

export default Nav;
