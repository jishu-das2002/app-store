import React from "react";
import ratingsimg from '../assets/icon-ratings.png';

const AppCard = ({app}) => {
    const {image,companyName,description,ratingAvg,downloads} = app
    return(
        <>
            <div>
                <div className="card bg-base-100 border shadow-sm">
                <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{companyName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                    <p>{downloads}</p>
                    <p className="flex justify-end"><img className="w-[16px] h-[16px] mr-1" src={ratingsimg} alt="" />{ratingAvg}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
export default AppCard;