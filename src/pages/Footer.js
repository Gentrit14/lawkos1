import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import footerLinks from './footerLinks';
import { LuPhoneCall } from "react-icons/lu";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"; // Importing icons
import DarkMode from '../components/DarkMode';
import SelectLanguage from '../components/shared/SelectLanguage/SelectLanguage';
import { FormattedMessage } from 'react-intl'

const Footer = (props) => {
  return (
    <div className="footer1">
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__top2">
            <div className="footer__logo">
            <Link to='/' className='nav-logo'>
                    <div className='logo-container'></div>
                </Link>
              <h4>
              <FormattedMessage id='footer-logo-title' defaultMessage='LEGAL EXCELLENCE' />
                </h4>
            </div>
            <div className="footer__newsletter">
              <p><FormattedMessage id='footer-news-title' defaultMessage='Subscribe to our newsletter' /></p>
              <div className="footer__newsletter-input">
                <input type="text" placeholder="Enter your email" />
                <button><FormattedMessage id='footer-button-title' defaultMessage='Subscribe' /></button>
              </div>
            </div>
            <div className='footer-content'>
            <div className='number'>
                <LuPhoneCall />
                <div className='number-detail'>
                    <h6>+383 123 456 789</h6>
                    <p><FormattedMessage id="number-text" defaultMessage='Call our office'/></p>
                </div>
            </div>
            <div className="footer__social">
              <p><FormattedMessage id="footer-social-text" defaultMessage='CONNECT WITH US:'/></p>
              <div className="footer__social-icons">
                <FaLinkedin />
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
            </div>
          </div>
          <div className="footer__links">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer__links-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer__bottom">
          <p><FormattedMessage id="footer-bootom-text1" defaultMessage='© 2024 LAWKOS. All rights reserved.'/></p>
          <div className="footer__bottom-links">
            <Link href="#"><FormattedMessage id="footer-bootom-text2" defaultMessage='Privacy'/></Link>
            <span>|</span>
            <Link href="#"><FormattedMessage id="footer-bootom-text3" defaultMessage='Cookies'/></Link>
          </div>
          <DarkMode />
          <div className="footer__language">
            
          <SelectLanguage
                    setLanguage={props.setLanguage}
                    language={props.language}
                />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
