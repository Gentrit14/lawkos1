import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import footerLinks from './footerLinks';
import { GoLaw } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa"; // Importing icons
import DarkMode from '../components/DarkMode';

const Footer = () => {
  return (
    <div className="footer1">
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__top2">
            <div className="footer__logo">
              <Link to='/' className='title'><GoLaw />LAWKOS</Link>
              <h4>LEGAL EXCELLENCE</h4>
            </div>
            <div className="footer__newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="footer__newsletter-input">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className='footer-content'>
            <div className='number'>
                <LuPhoneCall />
                <div className='number-detail'>
                    <h6>+383 123 456 789</h6>
                    <p>Call our office</p>
                </div>
            </div>
            <div className="footer__social">
              <p>CONNECT WITH US:</p>
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
          <p>© 2023 LAWKOS. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link href="#">Privacy</Link>
            <span>|</span>
            <Link href="#">Cookies</Link>
          </div>
          <DarkMode />
          <div className="footer__language">
            
            <div className="footer__language-options">
              <FaGlobe />
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
