import React from 'react';
import './About.css'
import banner from '../../images/Banner/About-us-banner.png'
import banner2 from '../../images/Banner/about 2nd benner.jpg'

const About = () => {
    return (
        <div>
            <img className='about-banner' src={banner} alt="" srcset="" />
            <div className='container my-5 about-container'>
                <div className='w-100'>
                    <h2 className='fw-bold'>About us</h2>
                    <div>
                        <p>Furnicom is a furniture-producing company which items can be characterized as unique, non-conformist and authentic – never boring and always full of imagination and inspiration.</p>
                    </div>
                    <div>
                        <p> Furnicom succeeds for years in tracking down style icons, developing trends and innovations in furniture design, and using them to fulfil the dreams of furnishing enthusiasts.</p>
                    </div>
                    <div>
                        <p> With the courage to innovate, Furnicom creates trends and unique furnishing collections being affordable and desirable for all people. As an international supplier and generator of change Furnicom continues creating new furnishing designs and art objects.</p>
                    </div>
                </div>
                <div className='w-100 more-info'>
                    <div>
                        <p className='fw-bold'>Exclusive design</p>
                        <p>Mixture of imagination, experience and professionalism is the secret of our design!</p>
                    </div>
                    <div>
                        <p className='fw-bold'>Professional Team</p>
                        <p>We are proud of our amicable, professional and always developing team!</p>
                    </div>
                    <div>
                        <p className='fw-bold'>Reasonable Prices</p>
                        <p>We produce furniture to fulfill needs of all people and offer it at affordable and fair prices</p>
                    </div>
                </div>
                <div className='w-100'>
                    <img className='about-banner2' src={banner2} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default About;