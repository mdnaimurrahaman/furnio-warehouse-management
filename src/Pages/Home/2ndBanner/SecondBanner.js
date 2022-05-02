import React from 'react';
import './SecondBanner. css'
import secondBanner from '../../../images/Banner/banner-2.png'

const SecondBanner = () => {
    return (
        <div className='container mt-3'>
            <div className='banner-container row align-items-center'>
            <div className='col-sm-12 col-lg-6 p-5'>
                    <img className='banner-img' src={secondBanner} alt="" srcset="" />
                </div>
                <div className='banner-title col-sm-12 col-lg-6 p-5'>
                    <h1 className=''>We Provide Look And Accuracy</h1>
                    <p className='mt-4'>Alam in arcu cursus euismod quis viverra tincidunt nunc putvinar sapien et ugula ullamoorper malesuada. a scelerisque purus semper eget duis.</p>
                    <div className='d-flex my-4'>
                        <div className='me-5'>
                            <h4>35</h4>
                            <p>Awards <br /> Gained</p>
                        </div>
                        <div className='me-5'>
                            <h4>15k+</h4>
                            <p>Quality <br /> Products</p>
                        </div>
                        <div>
                            <h4>2k</h4>
                            <p>Happy <br /> Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;