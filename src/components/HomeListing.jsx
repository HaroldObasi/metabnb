import React from "react";
import Card from "./Card";
import { data } from "../constants";

const HomeListing = () => {
    return (
        <section className="mx-6 md:mx-12 mb-16">
            <p className="font-bold text-4xl xl:text-[48px] text-center mb-5 md:mb-10">
                Inspiration for your next adventure
            </p>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-8 gap-y-5 justify-center bg-slate-500">
                {data.map((item) => (
                    <Card img={item} />
                ))}
            </div> */}
            <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center">
                {data.map((item) => (
                    <Card img={item} />
                ))}
            </div>
        </section>
    );
};

export default HomeListing;
