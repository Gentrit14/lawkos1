import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import clsx from "clsx";
import './Nav.scss';
import { FormattedMessage } from "react-intl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import Arrow2 from './img/arrow2.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import ProductsMegamenu from './ProductsMegamenu';
import ResourcesMegamenu from './ResourcesMegamenu';
import MobileNav from './components/MobileNav/MobileNav.js';

const Nav = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showProductsMenu, setShowProductsMenu] = useState(false);
    const [showResourcesMenu, setShowResourcesMenu] = useState(false);


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 25 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        
            <div className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")}>
                
                <Link to='/' className='nav-logo'>
                    <div className='logo-container'></div>
                </Link>

                

                <div className={isMobile ? 'links nav-mobile open' : 'links'}>
                    <div className='nav-link'>
                        <Link to='/' className='inner-link'>
                        <FormattedMessage id="about" defaultMessage='About'/> 
                        </Link>
                    </div>

                    {/* Services Megamenu */}
                    <div
                        className='nav-link'
                        onMouseEnter={() => handleMouseEnter('products')}
                        onMouseLeave={() => handleMouseLeave('products')}
                    >
                        <div className="inner-link" onClick={() => isMobile && toggleMegamenu('products')}>
                        <FormattedMessage id="services" defaultMessage='Services'/> 
                            <img src={Arrow2} className='arrow1' alt='arrow1' />
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
                        <FormattedMessage id="resurces" defaultMessage='Resurces'/> 
                            <img src={Arrow2} className='arrow1' alt='arrow1' />
                            <MdKeyboardArrowDown className='arrow2' />
                            <RiArrowDropDownLine className='arrow3' />
                        </div>
                        {!isMobile && showResourcesMenu && <ResourcesMegamenu />}
                        
                           
                    </div>

                    <div className='nav-link'>
                        <Link to='/' className='inner-link'>
                        <FormattedMessage id="news" defaultMessage='News'/> 
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='/' className='inner-link'>
                        <FormattedMessage id="careers" defaultMessage='Careers'/> 
                        </Link>
                    </div>
                    

                    {/* Contact Info */}
                    <div className='auth'>
                        <div className='number'>
                            <LuPhoneCall />
                            <div className='number-detail'>
                                <h6>+383 123 456 789</h6>
                                <p><FormattedMessage id="number-text" defaultMessage='Call our office'/></p>
                            </div>
                        </div>
                        <Link to='/' className='contact'><FormattedMessage id="nav-button" defaultMessage='Contact us'/></Link>
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
