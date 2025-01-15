import React, { useState } from "react";

interface BannerProps {
  title: string;
  description: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, image }) => {
  
  return (
    <div>
        <div id="root">
            <div className="conteiner">
            <div className="card">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
                <figure className="w-full">
                <img
                    alt={title}
                    src={"https://image.tmdb.org/t/p/w500/" + image}
                    className="banner img"
                />
                </figure>
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="text-gray-600 text-sm mt-2">
                    {description}
                </p>
            </div>
            </div>   
            </div> 
        </div>
    </div>
  );
};

export default Banner;
