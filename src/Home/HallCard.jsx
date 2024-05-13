import React, { useEffect, useState } from 'react';
import Hcard from './Hcard';

const HallCard = () => {
    const [all, setAll] = useState([]);
    useEffect(()=>{
        fetch('alldata.json')
        .then(res => res.json())
        .then(data => setAll(data))
        console.log(all);
    },[])
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold w-[400px] mx-auto mb-8 mt-20'>Explore your test</h1>
                <p className='w-[700px] mx-auto text-center mb-10'>Welcome to our exquisite collection of home decor, where every piece tells a story and every corner finds its character. Discover a curated selection of handpicked items designed to elevate your living spaces with charm, elegance, and personality</p>
            </div>
            <div className='mx-8 grid grid-cols-3 gap-4'>
            {
                all.map((card,idx) => <Hcard key={idx} card ={card}></Hcard>)
            }
            
        </div>
        </div>
        
    );
};

export default HallCard;