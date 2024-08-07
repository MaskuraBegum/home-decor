import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from './provider/Auth_provider';

const Root = () => {
    const {logout,user} = useContext(AuthContext);

    const logOut = ()=>{
        console.log("logout is clicked")
        logout()
        .then(()=>{
            console.log('done')
            alert('sined out sussecfully')
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    const link = <>
        <li><NavLink to="/" className={location.pathname === '/home' ? 'active' : ''}><a>Home</a></NavLink></li>
        <li><NavLink to="/cart" className={location.pathname === '/cart' ? 'active' : ''}><a>Your Cart</a></NavLink></li>
        <li><NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}><a>About Us</a></NavLink></li>
        <li><NavLink to="/register" className={location.pathname === '/register' ? 'active' : ''}><a>Register</a></NavLink></li>
        
    </>
        
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DesignDazzle</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                {user?<div className="navbar-end">
                    <div className='p-2'><div className='text-sm p-2 border-2 rounded-2xl'>{user.email}</div></div>
                    <button onClick={logOut} className="btn bg-orange-100 px-8">LogOut</button>
                </div>:<div className="navbar-end">
                    <Link to='/login' className="btn btn-primary px-8 text-md font-extrabold">LogIn</Link>
                </div>}
                
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;