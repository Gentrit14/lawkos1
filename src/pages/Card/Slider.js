import React, { useState } from 'react';
import Card from './Card';
import './Slider.scss';

const Slider = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + members.length) % members.length
    );
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        ←
      </button>
      <div className="slider-content">
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <Card member={member} />
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default Slider;
