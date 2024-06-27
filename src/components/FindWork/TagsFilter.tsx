import React from "react";

const TagsFilter: React.FC = () => {
    return (
        <div className="p-4">
            <div className="flex flex-wrap justify-start space-x-4 space-y-4 md:space-y-0">
                <div className="flex items-center justify-center w-48 h-10 bg-[#0A65CC] border border-gray-200 rounded-full shadow hover:bg-gray-400">
                    <p className="font-normal text-white text-sm">Physiotherapist</p>
                </div>
                <div className="flex items-center justify-center w-48 h-10 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100">
                    <p className="font-normal text-gray-700 text-sm">Air conditioning installer</p>
                </div>
                <div className="flex items-center justify-center w-48 h-10 bg-[#0A65CC] border border-gray-200 rounded-full shadow hover:bg-gray-400">
                    <p className="font-normal text-white text-sm">Garden maintenance</p>
                </div>
                <div className="flex items-center justify-center w-48 h-10 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100">
                    <p className="font-normal text-gray-700 text-sm">Private investigator</p>
                </div>
                <div className="flex items-center ml-auto text-blue-500">
                    <a href="#">Clear Filters</a>
                </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
                <p className="mt-1 font-semibold">
                    Jobs For You 
                    <a href="/#" className="text-[#0A65CC] ml-3">Popular</a>
                </p>
                <div>
                    <p className="font-semibold flex items-center">
                        Sort: 
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="ml-3 text-black bg-slate-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                            Newest
                            <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdownHover" className="z-10 hidden bg-white divide-y rounded-lg shadow w-44">
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TagsFilter;
