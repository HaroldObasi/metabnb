import React from "react";
import logo2 from "../assets/logo2.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
function Footer() {
    return (
        <footer>
            <div className="px-6 pt-10 md:px-12 bg-[#1D1D1E] text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-10 lg:space-y-0">
                    <div className="flex flex-col justify-between space-y-5">
                        <a href="/">
                            <img
                                className="w-[233px] col-span-2"
                                src={logo2}
                                alt=""
                            />
                        </a>
                        <div className="flex justify-between w-[120px]">
                            <a href="https://facebook.com">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://instagram.com">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://twitter.com">
                                <img src={twitter} alt="" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="text-[18px] mb-4">Community</p>
                        <ul className="space-y-3 text-[14px] font-light">
                            <li>NFT</li>
                            <li>Tokens</li>
                            <li>Landlord</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[18px] mb-4">Places</p>
                        <ul className="space-y-3 text-[14px] font-light">
                            <li>Castle</li>
                            <li>Farms</li>
                            <li>Beach</li>
                            <li>Learn more</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[18px] mb-4">About us</p>
                        <ul className="space-y-3 text-[14px] font-light">
                            <li>Road map</li>
                            <li>Creators</li>
                            <li>Career</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <div className="py-10">
                    <p className="">© 2022 Metabnb</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
