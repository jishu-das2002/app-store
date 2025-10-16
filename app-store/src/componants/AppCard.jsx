import React from "react";
import ratingsimg from "../assets/icon-ratings.png";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AppCard = ({ app, onInstall }) => {
  const { image, companyName, description, ratingAvg, downloads, id } = app;

  const handleInstall = () => {
    toast.success("Install successful");
    if (onInstall) {
      onInstall(app);
    }
  };

  return (
    <div className="card bg-base-100 border shadow-sm w-full h-[435px]">
      <figure>
        <img className="w-full " src={image} alt={companyName} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{companyName}</h2>
        <p>{description}</p>

        <div className="card-actions justify-between">
          <p>{downloads} downloads</p>
          <p className="flex items-center justify-end">
            <img
              className="w-[16px] h-[16px] mr-1"
              src={ratingsimg}
              alt="rating"
            />
            {ratingAvg}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 pb-3">
        <Link to={`/Apps/${id}`} className="text-blue-500">
          View Details
        </Link>
        <button
          onClick={handleInstall}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default AppCard;
