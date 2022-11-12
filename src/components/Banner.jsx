import React from "react";
import mbToken from "../assets/sponsors/mbToken.svg";
import metamask from "../assets/sponsors/metamask.svg";
import opensea from "../assets/sponsors/opensea.svg";

const Banner = () => {
    return (
        <div className="purpleGradient flex flex-col space-y-16 items-center md:space-y-0 md:flex-row justify-around mt-12 py-3">
            <img className="w-[200px]" src={mbToken} alt="mb Token" />
            <img className="w-[200px]" src={metamask} alt="METAMASK" />
            <img className="w-[200px]" src={opensea} alt="Opensea" />
        </div>
    );
};

export default Banner;
