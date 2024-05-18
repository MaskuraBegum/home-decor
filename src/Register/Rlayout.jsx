import React from 'react';

const Rlayout = () => {
    
    
    return (
        <div className=''>
            
            <div className="hero min-h-screen bg-base-200 flex justify-center items-center" >
            <div className='flex-1 ml-12 -mr-6'>
                <img className='w-[550px] h-[350px] rounded-xl ' src='https://i.ibb.co/GM5RbPb/illustration-of-human-resources-campaign-with-join-us-writing-open-job-vacancies-for-jobseekers-desi.jpg'></img>
            </div>
                <div className="hero-content flex-col ">
                    <div className="text-center flex justify-center items-center">
                        <div className=''>
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6 w-[600px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rlayout;