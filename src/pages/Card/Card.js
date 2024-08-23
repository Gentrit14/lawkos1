import React from 'react';
import './Card.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Team = () => {

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
                <Carousel controls transition="crossfade">
                    <div className='slide1'>
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Labinot Halimi <br></br> Managing Partner </div>
                    </div>
                    <div className='slide1'>
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Festina Murati <br></br> Attorney at law, Partner </div>
                    </div>
                    <div className='slide1'>
                        <div class="content">
                        <div class="h3">How's it goin Fam ?</div>
                        <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
                        </div>
                        <div className="overlay-text">Festina Murati <br></br> Attorney at law </div>
                    </div>
                </Carousel>
            </div>
            </div>
        </section>
    );
}

export default Team;
