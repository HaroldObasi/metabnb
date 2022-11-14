import React from "react";
import x from "../assets/icons/x.svg";
import metamask from "../assets/icons/metamaskColor.png";
import chevron from "../assets/icons/chevron.svg";
import walletConnect from "../assets/icons/walletConnect.png";

const Modal = () => {
    const close = () => {
        const sideMenu = document.getElementsByClassName("sideMenu")[0];
        const invisibleBackground =
            document.getElementsByClassName("invisibleBack")[0];
        const modal = document.getElementsByClassName("coinModal")[0];
        sideMenu.classList.add("hidden");
        invisibleBackground.classList.add("hidden");
        modal.classList.add("hidden");
    };

    return (
        //add back hidden
        <div className="w-[350px] md:w-[600px] h-[325px] rounded-2xl bg-white hidden fixed  coinModal z-20">
            <div className="flex py-6 px-8 justify-between border-b border-gray-300">
                <p className="font-bold text-[24px]">Connect Wallet</p>
                <button onClick={close}>
                    <img src={x} alt="" />
                </button>
            </div>
            <div className="py-7 px-8 space-y-3">
                <p className="text-base">Choose your preferred wallet: </p>
                <div className="flex items-center justify-between px-3 py-3 border rounded-xl border-gray-300 hover:bg-gray-200">
                    <div className="">
                        <img
                            className="inline-block mx-3"
                            src={metamask}
                            alt=""
                        />
                        <p className="inline-block text-base font-bold">
                            Metamask
                        </p>
                    </div>

                    <img src={chevron} alt="" />
                </div>
                <div className="flex items-center justify-between px-3 py-3 border rounded-xl border-gray-300 hover:bg-gray-200">
                    <div className="">
                        <img
                            className="inline-block mx-3"
                            src={walletConnect}
                            alt=""
                        />
                        <p className="inline-block text-base font-bold">
                            WalletConnect
                        </p>
                    </div>

                    <img src={chevron} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
