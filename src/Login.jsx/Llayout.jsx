import React, { useContext, useRef } from 'react';
import { AuthContext } from '../provider/Auth_provider.jsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Llayout = () => {
    const {signIn, googleLog} = useContext(AuthContext);
    const formRef = useRef(null);
    const nevigate = useNavigate();
    const location = useLocation();

    const googleClick = () => {
            googleLog()
            .then((result) => {
                if(result.user){
                    nevigate(location?.state || '/');
                    alert('Successfully logged in');
                }
                
            })
            .catch((error) => {
                alert(error)
            })
    }
    
    const handlelogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {email,password}
        console.log(user);
        signIn(email,password)
        .then(result =>{
            if(result.user){
                nevigate(location?.state || '/');
                console.log(result.user)
                alert('User is successfully loged in')
                formRef.current.reset();
            }
            
        })
        .catch(error=>{
            console.log(error.message)
            alert(error.message)
        })

    }

    
        
        
        
    return (
        <div>
        <div className="hero min-h-screen bg-base-200 flex justify-center items-center" >
            <div className=' ml-20 -mr-20'>
                <img className='w-[550px] h-[350px] rounded-xl ' src='https://i.ibb.co/85DKmmj/undraw-personal-file-re-5joy-1.png'></img>
            </div>
                <div className="hero-content flex-col ">
                    <div className="text-center flex justify-center items-center">
                        <div className=''>
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6 w-[600px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form ref={formRef} onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">login</button>
                            </div>
                            <div className=' justify-center items-center'>
                            <h1 className='text-center text-green-800 text-sm'>If you don't have an account, please
                                <Link to='/register'><a className='text-blue-700 font-bold underline'> Register </a></Link>
                            </h1>
                            
                            </div>
                        </form>
                        <h1 className='text-center -mt-6 mb-2'>- - - - - - - - - - - - or - - - - - - - - - - - - </h1>
                        <div className='flex justify-center items-center'>
                        <div className="form-control w-80 mb-4">
                                <button onClick={googleClick} className="btn btn-primary">Log in with google</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Llayout;