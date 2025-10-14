import React, { useState } from "react";
import { useLoaderData, Outlet } from "react-router";
import AppCard from "../../componants/AppCard";
import { toast } from "react-toastify";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((app) =>
        app.companyName.toLowerCase().includes(term)
      )
    : apps;

  const handleInstall = (app) => {
    toast.success(`${app.companyName} installed successfully!`);
  };

  return (
    <>
      <h1 className="mt-20 text-center text-5xl">Our All Applications</h1>
      <p className="mt-2.5 text-center text-2xl">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>

      <div className="flex justify-between mb-5 mt-6 px-6">
        <h1>
          <span>({searchApps.length})</span> Apps found
        </h1>
        <label>
          <input
            className="border shadow-2xl rounded-2xl p-1.5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 mt-10 px-6">
        {searchApps.map((app) => (
          <AppCard key={app.id} app={app} onInstall={handleInstall} />
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Apps;
