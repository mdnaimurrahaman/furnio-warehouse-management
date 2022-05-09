import React from 'react';
import './ExtraBanner.css'
import banner from '../../images/Banner/Screenshot_5.jpg'

const ExtraBanner = () => {
    return (
        <div className='extra-banner'>
            <div className='container'>
                <div className='banner-container row align-items-center'>
                    <div className='banner-title col-sm-12 col-lg-6 p-5'>
                        <h2>Made With Love And Dedication</h2>
                        <p className='mt-4'>Pulvinar neque laoreet suspendiss interdum consectetur. Nec ullamcorper sit amet risus nullam eget. Eget arcu dictum varius duis . Adipiscing at in tellus integer feugiat scelerisque.</p>
                        <button className='btn-hero'>Discover Now</button>
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