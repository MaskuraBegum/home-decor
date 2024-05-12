import React from 'react';

const Banner = () => {

    return (
        <div className='my-8 px-12'>
            <div className="hero max-h-screen rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/2hRD0s5/0016-venturafadd1603192499.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-28">
                        <h1 className="mb-5 text-5xl font-bold text-orange-300">Design<span className='text-blue-400'>  Dazzle</span></h1>
                        <h1 className="mb-5 text-xl font-bold">Your home, Your style</h1>
                        <p className="mb-5 text-blue-100">Transform your space into a sanctuary of style and comfort with our curated collection of home furnishings. Discover timeless pieces that speak to your unique taste and elevate every corner of your home.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;