import React from 'react';
import './ExtraBanner.css'
import banner from '../../images/Banner/Screenshot_5.jpg'

const ExtraBanner = () => {
    return (
        <div>
            <div className='container'>
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
        </div>
    );
};

export default ExtraBanner;