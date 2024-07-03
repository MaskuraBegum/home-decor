import React from 'react';

const Hcard = ({card}) => {
    const {title,artist,category,id,image,price} = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 mt-4">
                <figure><img className='h-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        
                        {category}
                        <div className="badge badge-secondary">{id}</div>
                    </h2>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hcard;