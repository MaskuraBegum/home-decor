import React from 'react';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';
import HallCard from './HallCard';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <HallCard></HallCard>
        </div>
    );
};

export default Home;