import React from "react";
import Banner from "../componants/Banner";
import TrendingApp from "../componants/TrendingApp";
import Apps from "../pages/Apps/Apps";
import { useLoaderData } from "react-router";
import AppCard from "../componants/AppCard";
import { NavLink } from "react-router";

    const Home = () => { 
        const Apps = useLoaderData()
        const showApps = Apps.slice(0,6)
    return(
        <>
        <Banner></Banner>
        <TrendingApp></TrendingApp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 mt-10">
             {
                showApps.map(app =>(
                <AppCard key={app.id} app={app}></AppCard> 
                ))
                
            }
        </div>
            <div className="flex justify-center mb-20">
                <NavLink to='/Apps' className="btn bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] text-white rounded-[4px]">Show All</NavLink>
            </div>
        </>
    );
};

export default Home;