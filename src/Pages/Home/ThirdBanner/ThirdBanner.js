import React from 'react';
import './ThirdBanner.css'
import banner from '../../../images/Banner/benner-3.png'
import icon1 from '../../../images/icon/4139635.png'
import icon2 from '../../../images/icon/minimal.png'
import icon3 from '../../../images/icon/best.png'

const ThirdBanner = () => {
    return (
        <div className='third-banner my-5'>
        <div className='container'>
            <div className='banner-container row align-items-center'>
                <div className='banner-title col-sm-12 col-lg-6 p-5'>
                    <h2 className='fw-bold'>We provide You The Best Experience</h2>
                    <p className='mt-4'>Urna molestie at elementum eu facilisis. Venenatis a the inner condimentum vitae sapien pellentesque.</p>
                    <div className='all-icon mt-4'>
                    <div className='d-flex mb-3'>
                        <img className='' src={icon1} alt="" srcset="" />
                        <h4>Minimalist Design</h4>
                    </div>
                    <div className='d-flex mb-3'>
                        <img src={icon2} alt="" srcset="" />
                        <h4>Natural Product</h4>
                    </div>
                    <div className='d-flex mb-3'>
                        <img src={icon3} alt="" srcset="" />
                        <h4>Best Quality Wood</h4>
                    </div>
                </div>
                </div>
                <div className='col-sm-12 col-lg-6 p-5'>
                    <img className='banner-img' src={banner} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default ThirdBanner;