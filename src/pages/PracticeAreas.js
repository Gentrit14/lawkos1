import React from 'react';
import './PracticeAreas.scss';
import { practiceAreasData } from './practiceAreasData';
import Button1 from '../img/button1.png';


const PracticeAreas = () => {
    return (
        <section className="practice-areas">
            <div className="container">
                <div className="container2">
                <h2>Our practice area</h2>
                 
                <img src={Button1} alt="Statue" />
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
