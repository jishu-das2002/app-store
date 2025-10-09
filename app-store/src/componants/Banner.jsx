import React from "react";
import heroimg from '../assets/hero.png';
import playstoreimg from '../assets/playstore.png';
import appimg from '../assets/app.png';

const Banner = () =>{
    return(
        <>
            <h1 className="text-center mt-20 text-7xl w-[597px] mx-auto">We Build <span className="text-fuchsia-500">Productive</span> Apps</h1>
            <p className="text-center text-[20px] w-[1040px] mx-auto mt-3 mb-10">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            
            
            <div className="flex justify-center mb-10">
                <button className="border-1 border-[rgba(210,210,210,1)] mr-4 flex justify-center items-center pt-4 pb-4 pl-5 pr-5 w-48 h-14"><img className="w-8 h-8" src={playstoreimg} alt="" /> Google Play</button>
                <button className="border-1 border-[rgba(210,210,210,1)] flex justify-center items-center pt-4 pb-4 pl-5 pr-5 w-48 h-14"><img src={appimg} alt="" /> App Store</button>
            </div>


            <img className="w-[482px] mx-auto"src={heroimg} alt="" />


            <div className="bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] w-100% h-[410px] mx-auto">

                <h1 className="flex items-center justify-center text-5xl text-white  pt-20">Trusted by Millions, Built for You</h1>
                
                <div className="flex justify-center gap-6 mt-10">
                    <div className="w-[400px] h-[152px]">
                        <p className="text-[16px] text-white flex justify-center">Total Downloads</p>
                        <p className="text-6xl text-white flex justify-center">29.6M</p>
                        <p className="text-[16px] text-white flex justify-center">21% more than last month</p>
                    </div>

                    <div className="w-[400px] h-[152px]:">
                        <p className="text-[16px] text-white flex justify-center">Total Reviews</p>
                        <p className="text-6xl text-white flex justify-center">906K</p>
                        <p className="text-[16px] text-white flex justify-center">46% more than last month</p>
                    </div>
                    
                    <div className="w-[400px] h-[152px]">
                        <p className="text-[16px] text-white flex justify-center">Active Apps</p>
                        <p className="text-6xl text-white flex justify-center">132+</p>
                        <p className="text-[16px] text-white flex justify-center">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;