import React from 'react';
import './HighlightedSection.scss';
import Highlited2 from '../img/highlited2.png';
import { FormattedMessage } from 'react-intl'

const HighlightedSection = () => {
    return (
        <section className="highlighted-section">
            <div className="highlighted-content">
                
                <div className="text-container">
                    <h2>
                    <FormattedMessage id='highlighted-title' defaultMessage='From family law to personal injury, we treat your case with the care it deserves. 
                        Lets protect what matters most to you.' />
                    </h2>
                </div>
                <div className="image-container">
                    {/* Add your image path */}
                    <div className="logo-container">
                    {/* Add your logo image path */}
                    <img src={Highlited2} alt="Logo" className="logo" />
                </div>
                </div>
                
            </div>
        </section>
    );
};

export default HighlightedSection;
