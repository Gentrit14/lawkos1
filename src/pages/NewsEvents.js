import React from 'react';
import './NewsEvents.scss';
import { FormattedMessage } from 'react-intl'
import event1 from '../img/event1.png';
import event2 from '../img/event2.png';
import event3 from '../img/event3.png';
import { Link } from 'react-router-dom';

const NewsEvents = () => {


  return (
    <div className="news-events-section">
      <div className="header">
        <h2><FormattedMessage id='news-events-title' defaultMessage='News & Events' /></h2>
        <Link to='/' className='button'>
                    <div className='button1'></div>
        </Link>
      </div>

      <div className="news-items-container">
          <div className="news-item1">
            <img src={event1} alt='firstImage' className="news-image1" />
            <div className="news-content1">
              <p className="news-date1"><FormattedMessage id='news-date1' defaultMessage='November 3, 2023' /></p>
              <h3 className="news-title1"><FormattedMessage id='news-title1' defaultMessage='New law on Environmental Impact Assessment' /></h3>
            </div>
          </div>
          <div className="news-items-container2">
          <div className="news-item">
            <img src={event2} alt='firstImage' className="news-image" />
            <div className="news-content">
              <p className="news-date"><FormattedMessage id='news-date2' defaultMessage='October 22, 2023' /></p>
              <h3 className="news-title"><FormattedMessage id='news-title2' defaultMessage='Kosovo first auction for solar energy park' /></h3>
            </div>
          </div>
          <div className="news-item">
            <img src={event3} alt='firstImage' className="news-image" />
            <div className="news-content">
              <p className="news-date"><FormattedMessage id='news-date3' defaultMessage='August  15, 2023' /></p>
              <h3 className="news-title"><FormattedMessage id='news-title3' defaultMessage='Labor Law in Kosovo: Explained in details' /></h3>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default NewsEvents;
