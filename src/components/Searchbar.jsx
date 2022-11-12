import React from "react";

function Searchbar() {
    return (
        <div class="p-2 relative mx-auto">
            <input
                class="border border-gray-300 h-10 px-5 pr-16 rounded-l-lg text-sm focus:outline-none"
                placeholder="Search for"
            />
            <button class="mr-4 px-20 py-2 purpleGradient text-[16px] rounded-r-lg  text-white">
                Submit
            </button>
        </div>
    );
}

export default Searchbar;
