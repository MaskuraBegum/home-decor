import React, { useEffect, useState } from 'react';
import Hcard from './Hcard';
import { Link } from 'react-router-dom';

const HallCard = () => {
    const [all, setAll] = useState([]);
    const [data, datalength] = useState(6);
    useEffect(() => {
        fetch('alldata.json')
            .then(res => res.json())
            .then(data => setAll(data))
        console.log(all);
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold w-[500px] mx-auto mb-8 mt-20'>Explore your taste</h1>
                <p className='w-[700px] mx-auto text-center mb-10'>Welcome to our exquisite collection of home decor, where every piece tells a story and every corner finds its character. Discover a curated selection of handpicked items designed to elevate your living spaces with charm, elegance, and personality</p>
            </div>
            <div className='mx-8 grid grid-cols-3 gap-4'>
                {
                    all.slice(0, data).map((card, idx) => <Link to={`/home/${idx}`}><Hcard key={idx} card={card}></Hcard></Link>)
                }


            </div>
            <div className={data === all.length && 'hidden'}>
                <div className='flex justify-center items-center my-8'>
                    <button onClick={() => datalength(all.length)} className='btn btn-primary px-6'>Show all</button>
                </div>
            </div>

        </div>

    );
};

export default HallCard;