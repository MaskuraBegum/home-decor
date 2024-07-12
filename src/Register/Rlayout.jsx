import React, { useContext, useRef } from 'react';
import { AuthContext } from '../provider/Auth_provider.jsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';




// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

const Rlayout = () => {

    const {CreateUser} = useContext(AuthContext);
    const formRef = useRef(null);
    const nevigate = useNavigate();
    const location = useLocation();
    
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (pattern.test(email)) {
            const user = {name,email,password}
            console.log(user);
            CreateUser(email,password)
                .then (result =>{
                    if(result.user){
                        nevigate(location?.state || '/');
                        console.log(result)
                        alert('Registerd susscesfull')
                        formRef.current.reset();    
                    }
                    
        })
        } else {
            alert('Invalid email');
    }   
  
        
        
       

        // fetch('http://localhost:5000/users',{
        //     method:'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
    }
    return (
        <div className=''>
            
            <div className="hero min-h-screen bg-base-200 lg:flex justify-center items-center" >
            <div className='flex-1 ml-12 -mr-12 pt-40'>
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
                        <form ref={formRef} onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <h1 className='text-center text-green-800'>or already have an account</h1>
                            <div className='flex justify-center items-center'>
                            <div className="form-control ">
                                <Link to='/login'><button className="btn btn-primary w-80">Login</button></Link>
                            </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rlayout;