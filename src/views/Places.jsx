import React from "react";
import Card from "../components/Card";
import { data2 } from "../constants";
import setting from "../assets/icons/setting.svg";
import Modal from "../components/Modal";

const Places = () => {
    return (
        <main className="mx-6 md:mx-12">
            <div className="flex justify-center ">
                <Modal />
            </div>
            <div className="flex items-center justify-between my-10">
                <ul className="list-none hidden xl:block">
                    <li className="inline-block mx-5 text-xl">Restaurant</li>
                    <li className="inline-block mx-5 text-xl">Cottage</li>
                    <li className="inline-block mx-5 text-xl">Castle</li>
                    <li className="inline-block mx-5 text-xl">
                        Fantastic city
                    </li>
                    <li className="inline-block mx-5 text-xl">Beach</li>
                    <li className="inline-block mx-5 text-xl">Cabins</li>
                    <li className="inline-block mx-5 text-xl">Off grid</li>
                    <li className="inline-block mx-5 text-xl">Farm</li>
                </ul>

                <select
                    name=""
                    id=""
                    className="xl:hidden w-[160px] box-border py-2 px-3 border rounded-lg border-gray-400"
                >
                    <option value="">Restaurant</option>
                    <option value="">Cottage</option>
                    <option value="">Castle</option>
                    <option value="">Beach</option>
                    <option value="">Cabins</option>
                    <option value="">Off grid</option>
                    <option value="">Farm</option>
                </select>
                <div className="flex justify-between w-[160px] box-border py-2 px-3 border rounded-lg border-gray-400">
                    <p className="text-base inline-block">Location</p>
                    <img src={setting} className="inline-block" alt="" />
                </div>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center my-10">
                {data2.map((item) => (
                    <Card img={item} />
                ))}
            </div>
        </main>
    );
};

export default Places;
