import React from 'react';
import ExtraBanner from '../../ExtraBanner/ExtraBanner';
import Loding from '../../Loding/Loding';
import SecondBanner from '../2ndBanner/SecondBanner';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

import ThirdBanner from '../ThirdBanner/ThirdBanner';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <Items></Items>
            <ThirdBanner></ThirdBanner>
            <ExtraBanner></ExtraBanner>
        </div>
    );
};

export default Home;