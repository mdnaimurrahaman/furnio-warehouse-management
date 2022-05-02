import React from 'react';
import './Banner.css'
import banner from '../../../images/Banner/banner 1.png'

const Banner = () => {
    return (
        <div className='container top-banner px-5'>
            <div className='banner-container row align-items-center'>
                <div className='banner-title col-sm-12 col-lg-6 p-5'>
                    <h1>Explore Minimal Design</h1>
                    <p className='mt-4'>Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Nulla facilisi morbi tempus iaculis.</p>
                    <button className='btn-hero'>Explore Now</button>
                </div>
                <div className='col-sm-12 col-lg-6 p-5'>
                    <img className='banner-img' src={banner} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;