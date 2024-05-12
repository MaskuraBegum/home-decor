import React from 'react';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
        </div>
    );
};

export default Home;