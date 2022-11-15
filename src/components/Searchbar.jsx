import React from "react";

function Searchbar() {
    return (
        <div class="py-2 relative ">
            <input
                class="border w-[190px] lg:w-[350px] h-10 pl-2 sm:pl-5 lg:pr-16 rounded-l-lg text-sm focus:outline-none"
                placeholder="Search for"
            />
            <button class="inline-block mr-4 px-10 lg:px-20 py-2 purpleGradient text-[14px] sm:text-[16px] rounded-r-lg  text-white">
                Submit
            </button>
        </div>
    );
}

export default Searchbar;
