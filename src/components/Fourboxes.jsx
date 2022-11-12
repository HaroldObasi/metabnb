import React from "react";
import image_3 from "../assets/images/image_3.png";
import image_4 from "../assets/images/image_4.png";
import image_5 from "../assets/images/image_5.png";
import image_6 from "../assets/images/image_6.png";

const Fourboxes = () => {
    return (
        <div className="flex h-[460px] basis-1/2 justify-around xl:justify-center space-x-4">
            <div className="mt-auto space-y-2">
                <img src={image_4} alt="" />
                <img src={image_6} alt="" />
            </div>
            <div className="space-y-2">
                <img src={image_3} alt="" />
                <img src={image_5} alt="" />
            </div>
        </div>
    );
};

export default Fourboxes;
