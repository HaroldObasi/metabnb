import React from "react";
import heart from "../assets/icons/heart.svg";
import star from "../assets/icons/star.svg";

const Card = ({ img }) => {
    return (
        <div className="border border-gray-400 rounded-[15px] inline-block px-3 py-5">
            <img src={img} className="m-0 w-[260px] h-[265px]" alt="" />
            <img
                src={heart}
                className="relative bottom-[255px] left-[225px]"
                alt=""
            />
            <div className="flex justify-between mb-1">
                <p className="text-[12px]">Desert king</p>
                <p className="text-[12px] font-bold">1MBT per night</p>
            </div>
            <div className="flex justify-between">
                <p className="text-[12px]">2345km away</p>
                <p className="text-[12px]">available for 2 weeks stay</p>
            </div>
            <div className="space-x-2">
                <img src={star} className="inline-block" alt="" />
                <img src={star} className="inline-block" alt="" />
                <img src={star} className="inline-block" alt="" />
                <img src={star} className="inline-block" alt="" />
                <img src={star} className="inline-block" alt="" />
            </div>
        </div>
    );
};

export default Card;
