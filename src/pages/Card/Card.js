import React from 'react';
import Slider from "react-slick";
import './Card.scss';


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
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Labinot Halimi <br></br> Managing Partner </div>
                    </div>
                    <div className='slide slide2'>
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Festina Murati <br></br> Attorney at law, Partner </div>
                    </div>
                    <div className='slide slide3'>
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
