import React  from "react";

const installation = ({ installedApps = [] }) =>{
    return(
        <>
            <h1 className="text-center mt-20">Your Installed Apps</h1>
            <p className="text-center mt-2.5">Explore All Trending Apps on the Market developed by us</p>

            <div className="p-4 mt-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Installed Apps</h2>

                {installedApps.length === 0 ? (
                <p>No apps installed yet.</p>
                ) : (
                <ul>
                    {installedApps.map((app) => (
                    <li key={app.id} className="border p-2 mb-2 rounded">
                        {app.companyName}
                    </li>
                     ))}
                </ul>
                )}
            </div>
        </>);
};

export default installation;