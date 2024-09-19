import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiFileText, FiBook, FiPieChart, FiMic } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { FormattedMessage } from 'react-intl'
import Resurce1 from './img/resurce1.png';
import Resurce2 from './img/resurce2.png';
import Carousel from 'react-elastic-carousel'
import './Nav.scss';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:600, itemsToShow: 2 },
    { width:850, itemsToShow: 3 }
];

const ResourcesMegamenu = () => {
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };

    return (
        <div className='nav-megamenu resources'> 
        <div className='menu-content3'>
         <h6 className='menu-h6'>Resources</h6>
            <div className='menu-content'>
                           
                <div className='menu-link'>
                    <Link to='/network'>
                        <div className='icon'><FiGlobe /></div>
                        <h6><FormattedMessage id='network' defaultMessage='Network' /></h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/legal-notices'>
                        <div className='icon'><FiFileText /></div>
                        <h6><FormattedMessage id='legal-notices' defaultMessage='Legal Notices' /></h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/laws-of-kosovo'>
                        <div className='icon'><FiBook /></div>
                        <h6><FormattedMessage id='Laws-of-kosovo' defaultMessage='Laws of Kosovo' /></h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/insights'>
                        <div className='icon'><FiPieChart /></div>
                        <h6><FormattedMessage id='oinstights' defaultMessage='Insights' /></h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/podcast'>
                        <div className='icon'><FiMic /></div>
                        <h6><FormattedMessage id='podcast' defaultMessage='Podcast' /></h6>
                    </Link>
                </div>
                <div className='menu-link'>
                    <Link to='/podcast'>
                        <div className='icon'><GrContact /></div>
                        <h6><FormattedMessage id='contact1' defaultMessage='Contact' /></h6>
                    </Link>
                </div>
            </div>
            </div>

            <div className="menu-details">
            <Carousel className="image-slider styled-arrows " 
                    breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
            >
                    <div className='slide'>
                        <img src={Resurce1} alt="Slide 1" />
                        <div className="overlay-text"><FormattedMessage id='resurces-img-text1' defaultMessage=' Why LawKos is your ideal partner 
                        for legal solutions and services?' /></div>
                    </div>
                    <div className='slide'>
                        <img src={Resurce2} alt="Slide 2" />
                        <div className="overlay-text"><FormattedMessage id='resurces-img-text2' defaultMessage='LawKos - 15 years of legal e
                        xcellence' /></div>
                    </div>
                    <div className='slide'>
                        <img src={Resurce2} alt="Slide 3" />
                        <div className="overlay-text"><FormattedMessage id='resurces-img-text3' defaultMessage='Why LawKos is your ideal partner 
                        for legal solutions and services?' /></div>
                    </div>
                </Carousel>
            </div>
            
        </div>
    );
};

export default ResourcesMegamenu;
    