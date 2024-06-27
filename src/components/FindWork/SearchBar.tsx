import React from "react";

const SearchBar: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="p-0 w-full lg:w-[80%] xl:w-[60%]"> {/* Ajusta el ancho para diferentes tamaños de pantalla */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mb-4">
                    <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[40%]">
                        <span className="material-icons text-gray-400">search</span>
                        <input type="text" placeholder="Job title, keyword" className="focus:outline-none flex-grow px-2 text-sm lg:text-base border-0" />
                    </div>
                    <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[40%]">
                        <span className="material-icons text-gray-400">location_on</span>
                        <input type="text" placeholder="Your Location" className="focus:outline-none flex-grow px-2 text-sm lg:text-base border-0" />
                    </div>
                    <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full lg:w-[20%] lg:shrink-0">Find Job</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
