import React from 'react';
import './Testimonial.scss';
import Profile1 from '../img/profile1.png';
import Profile2 from '../img/profile2.png';
import { ImQuotesLeft } from 'react-icons/im';
import { FormattedMessage } from 'react-intl'

const Testimonial = () => {
  const testimonials = [
    {
      name: <FormattedMessage id='testimonials-person1' defaultMessage="Drilon Kraniqi" />,
      title: <FormattedMessage id='testimonials-person1-position' defaultMessage="Director, TravelKos" />,
      feedback: <FormattedMessage id='testimonials-person1-text' defaultMessage="LawKos is our trustworthy legal partner. Their team is professional, responsible, and very supportive. The legal advice and services provided are always successful. We want to thank LawKos for being an important factor in the success of our company." />,
      image: Profile1,
    },
    {
      name: <FormattedMessage id='testimonials-person2' defaultMessage="Blinera Morina" />,
      title: <FormattedMessage id='testimonials-person2-position' defaultMessage="CEO, Jackal Agency" />,
      feedback: <FormattedMessage id='testimonials-person2-text' defaultMessage="Thank you LawKos for your amazing services. We want to express our gratitude for all the years we have been working together. Your team is very professional and talented. We would recommend LawKos to anyone who needs legal services and solutions." />,
      image: Profile2,
    }
  ];

  return (
    <div className="testimonial-section2">
      <h2><FormattedMessage id='testimonial-title' defaultMessage='What our clients say about us' /></h2>
    <div className="testimonial-section">
      
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="background-shape"></div>
            <img src={testimonial.image} alt={testimonial.name} className="client-image" />
            <div className="quote">
               <ImQuotesLeft />
            </div>
            <p className="feedback">{testimonial.feedback}</p>
            <p className="client-name">{testimonial.name}</p>
            <p className="client-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
