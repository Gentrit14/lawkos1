import React from 'react';
import './PracticeAreas.scss';
import { practiceAreasData } from './practiceAreasData';
import { Link } from 'react-router-dom';



const PracticeAreas = () => {
    return (
        <section className="practice-areas">
            <div className="container">
                <div className="container2">
                <h2>Our practice area</h2>
                 
                <Link to='/' className='button'>
                    <div className='button1'></div>
                </Link>
                </div>
                <div className="practice-area-grid">
                    {practiceAreasData.map((area, index) => (
                        <div className="practice-area" key={index}>
                            <div className="icon">{area.icon}</div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default PracticeAreas;
