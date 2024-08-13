import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiFileText, FiBook, FiPieChart, FiMic } from "react-icons/fi";
import Resurce1 from './img/resurce1.png';
import Resurce2 from './img/resurce2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Nav.scss';

const ResourcesMegamenu = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };

    return (
        <div className='nav-megamenu resources'>
            <div className='menu-content'>             
                <div className='menu-link'>
                    <Link to='/network'>
                        <div className='icon'><FiGlobe /></div>
                        <h6>Network</h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/legal-notices'>
                        <div className='icon'><FiFileText /></div>
                        <h6>Legal Notices</h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/laws-of-kosovo'>
                        <div className='icon'><FiBook /></div>
                        <h6>Laws of Kosovo</h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/insights'>
                        <div className='icon'><FiPieChart /></div>
                        <h6>Insights</h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/podcast'>
                        <div className='icon'><FiMic /></div>
                        <h6>Podcast</h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/podcast'>
                        <div className='icon'><FiMic /></div>
                        <h6>Podcast</h6>
                    </Link>
                </div>
            </div>

            <div className="menu-details">
                <Slider {...settings} className="image-slider">
                    <div className='slide'>
                        <img src={Resurce1} alt="Slide 1" />
                        <div className="overlay-text">Why LawKos is your ideal partner 
                        for legal solutions and services?</div>
                    </div>
                    <div className='slide'>
                        <img src={Resurce2} alt="Slide 2" />
                        <div className="overlay-text">LawKos - 15 years of legal e
                        xcellence</div>
                    </div>
                    <div className='slide'>
                        <img src={Resurce2} alt="Slide 3" />
                        <div className="overlay-text">Why LawKos is your ideal partner 
                        for legal solutions and services?</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ResourcesMegamenu;
    