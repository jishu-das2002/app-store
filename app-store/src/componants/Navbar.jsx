import React from "react";
import navimg from '../assets/logo.png';
import gitimg from '../assets/github.png'; 

const Navbar = () =>{

    const links = <>
        <li>Home</li>
        <li className="ml-8">Apps</li>
        <li className="ml-8">Installation</li>
    </>
    return(
        <>
            <div className="navbar bg-base-100 shadow-sm">
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                        {links}
                    </ul>
                    </div>
                    <img className="w-[40px] h-[40px] hidden sm:block" src={navimg} alt="" />
                    <a className="btn btn-ghost text-xl">HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end">
                <a className="btn rounded-[4px] bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] text-[rgba(255,255,255,1)]"><img src={gitimg} alt="" /> Contribute</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;