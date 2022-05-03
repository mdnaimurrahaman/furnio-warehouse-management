import React from 'react';
import SecondBanner from '../2ndBanner/SecondBanner';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css'
import ThirdBanner from './ThirdBanner/ThirdBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <Items></Items>
            <ThirdBanner></ThirdBanner>
        </div>
    );
};

export default Home;