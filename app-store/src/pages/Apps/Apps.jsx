import React from"react";
import { useLoaderData } from "react-router";
import AppCard from "../../componants/AppCard";

const Apps = () =>{
   
       const Apps = useLoaderData()
        console.log(Apps);
    return(      
    <>
        <h1 className="mt-20 text-center text-5xl">Our All Applications</h1>
        <p className="mt-2.5 text-center text-2xl">Explore All Apps on the Market developed by us. We code for Millions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 mt-10">
            {
                Apps.map(app =>(
                <AppCard key={app.id} app={app}></AppCard> 
                ))
                
            }
        </div>
    </>
    );
};

export default Apps;