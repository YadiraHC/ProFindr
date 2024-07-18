// src/components/FindWork/TagsFilter.tsx
import React, { useState } from "react";

interface TagsFilterProps {
    sortOrder: string;
    setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

const TagsFilter: React.FC<TagsFilterProps> = ({ sortOrder, setSortOrder }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSortChange = (order: string) => {
        setSortOrder(order);
        setIsDropdownOpen(false);
    };

    return (
        <div className="p-4">
            <div className="mt-3 flex justify-between items-center">
                <p className="mt-1 font-semibold">
                    Jobs For You 
                    <a href="/#" className="text-[#0A65CC] ml-3">Popular</a>
                </p>
                <div className="relative">
                    <p className="font-semibold flex items-center">
                        Sort: 
                        <button
                            id="dropdownHoverButton"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="ml-3 text-black bg-slate-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            type="button"
                        >
                            {sortOrder}
                            <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </p>
                    {isDropdownOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow">
                            <ul className="py-1 text-sm text-gray-700">
                                <li onClick={() => handleSortChange('Newest')} className="cursor-pointer hover:bg-gray-200 px-4 py-2">Newest</li>
                                <li onClick={() => handleSortChange('Oldest')} className="cursor-pointer hover:bg-gray-200 px-4 py-2">Oldest</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TagsFilter;
