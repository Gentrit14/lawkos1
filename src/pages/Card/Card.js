import React from 'react';
import Slider from "react-slick";
import Card1 from '../../img/card1.png';
import Card2 from '../../img/card2.png';
import Card3 from '../../img/card3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.scss';

// const teamMembers = [
//     {
//         imgUrl: Card1,
//         name: 'Labinot Halimi',
//         position: 'Managing Partner'
//     },
//     {
//         imgUrl: Card2,
//         name: 'Managing Partner',
//         position: 'Attorney at law, Partner'
//     },
//     {
//         imgUrl: Card3,
//         name: 'Festina Murati',
//         position: 'Attorney at law'
//     },
// ];

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>
                        Join With <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className="menu-details">
                <Slider {...settings} className="image-slider">
                    <div className='slide'>
                        <img src={Card1} alt="Slide 1" />
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Labinot Halimi <br></br> Managing Partner </div>
                    </div>
                    <div className='slide'>
                        <img src={Card2} alt="Slide 2" />
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Festina Murati <br></br> Attorney at law, Partner </div>
                    </div>
                    <div className='slide'>
                        <img src={Card3} alt="Slide 3" />
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Festina Murati <br></br> Attorney at law </div>
                    </div>
                </Slider>
            </div>
            </div>
        </section>
    );
}

export default Team;
