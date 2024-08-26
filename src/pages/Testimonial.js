import React from 'react';
import './Testimonial.scss';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Drilon Kraniqi",
      title: "Director, TravelKos",
      feedback: "LawKos is our trustworthy legal partner. Their team is professional, responsible, and very supportive. The legal advice and services provided are always successful. We want to thank LawKos for being an important factor in the success of our company.",
      image: "/path/to/image1.jpg"
    },
    {
      name: "Blinera Morina",
      title: "CEO, Jackal Agency",
      feedback: "Thank you LawKos for your amazing services. We want to express our gratitude for all the years we have been working together. Your team is very professional and talented. We would recommend LawKos to anyone who needs legal services and solutions.",
      image: "/path/to/image2.jpg"
    }
  ];

  return (
    <div className="testimonial-section">
        <div class="custom-shape-divider-top-1724683460">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <h2>What our clients say about us</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="background-shape"></div>
            <img src={testimonial.image} alt={testimonial.name} className="client-image" />
            <p className="feedback">{testimonial.feedback}</p>
            <p className="client-name">{testimonial.name}</p>
            <p className="client-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
