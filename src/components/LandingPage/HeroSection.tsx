import React, { useState } from 'react';
import { searchMunicipalities } from '../../utils/locationService';
import { searchJobCategories } from '../../utils/jobCategoryService';

const HeroSection: React.FC = () => {
    const [locationQuery, setLocationQuery] = useState('');
    const [jobQuery, setJobQuery] = useState('');
    const [locationSuggestions, setLocationSuggestions] = useState<{ state: string; municipalities: string[] }[]>([]);
    const [jobSuggestions, setJobSuggestions] = useState<{ category: string; subcategories: string[] }[]>([]);

    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setLocationQuery(query);

        if (query.length > 2) {
            const normalizedQuery = normalizeText(query);
            const results = searchMunicipalities(normalizedQuery);
            setLocationSuggestions(results);
        } else {
            setLocationSuggestions([]);
        }
    };

    const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setJobQuery(query);

        if (query.length > 2) {
            const normalizedQuery = normalizeText(query);
            const results = searchJobCategories(normalizedQuery);
            setJobSuggestions(results);
        } else {
            setJobSuggestions([]);
        }
    };

    const handleLocationSuggestionClick = (municipality: string, state: string) => {
        setLocationQuery(`${municipality}, ${state}`);
        setLocationSuggestions([]);
    };

    const handleJobSuggestionClick = (subcategory: string, category: string) => {
        setJobQuery(`${subcategory}, ${category}`);
        setJobSuggestions([]);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
                <div className="xl:w-[50%]">
                    <h1 className="text-4xl lg:text-6xl font-medium leading-tight mb-4">
                        Find a job that suits your interest & skills.
                    </h1>
                    <p className="text-gray-600 mb-8">
                        There are jobs for everyone; the question is whether you're willing to work.
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 mb-4">
                        <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[35%] relative">
                            <span className="material-icons text-gray-400">search</span>
                            <input
                                type="text"
                                placeholder="Job title, keyword"
                                value={jobQuery}
                                onChange={handleJobChange}
                                className="focus:outline-none flex-grow px-2 text-sm lg:text-base border-0"
                            />
                            {jobSuggestions.length > 0 && (
                                <div className="suggestions-container bg-white border rounded-lg mt-2 p-2 absolute top-full left-0 right-0 z-10 max-h-40 overflow-y-auto">
                                    {jobSuggestions.map((suggestion, index) => (
                                        <div key={index}>
                                            <strong>{suggestion.category}</strong>
                                            <ul>
                                                {suggestion.subcategories.map((subcategory, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleJobSuggestionClick(subcategory, suggestion.category)}
                                                        className="cursor-pointer hover:bg-gray-200"
                                                    >
                                                        {subcategory}, {suggestion.category}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[35%] relative">
                            <span className="material-icons text-gray-400">location_on</span>
                            <input
                                type="text"
                                placeholder="Your Location"
                                value={locationQuery}
                                onChange={handleLocationChange}
                                className="focus:outline-none flex-grow px-2 text-sm lg:text-base border-0"
                            />
                            {locationSuggestions.length > 0 && (
                                <div className="suggestions-container bg-white border rounded-lg mt-2 p-2 absolute top-full left-0 right-0 z-10 max-h-40 overflow-y-auto">
                                    {locationSuggestions.map((suggestion, index) => (
                                        <div key={index}>
                                            <strong>{suggestion.state}</strong>
                                            <ul>
                                                {suggestion.municipalities.map((municipality, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleLocationSuggestionClick(municipality, suggestion.state)}
                                                        className="cursor-pointer hover:bg-gray-200"
                                                    >
                                                        {municipality}, {suggestion.state}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className="bg-[#0A65CC] text-white px-6 py-2 rounded-lg w-full lg:w-[25%] lg:shrink-0">Find Job</button>
                    </div>
                    <p className="text-gray-500">
                        Suggestion: <span className="text-[#0A65CC]">Construction worker</span>, <span className="text-[#0A65CC]">Plumber</span>, <span className="text-blue-500">Electrician</span>, <span className="text-blue-500">Cleaning</span>, <span className="text-blue-500">Mechanics</span>.
                    </p>
                </div>
                <div className="hidden lg:block xl:w-[45%] mt-12 lg:mt-0 justify-center ">
                    <img src="./images/Professionals.png" alt="Professionals" className="w-full lg:w-3/4" />
                </div>
            </div>
            <div className=" hidden lg:grid container mx-auto px-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center ">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <span className="material-icons text-[#0A65CC]">work_outline</span>
                    </div>
                    <div className="text-left">
                        <p className="text-2xl font-medium">1,75,324</p>
                        <p className="text-gray-600">Live Job</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <span className="material-icons text-[#0A65CC]">business</span>
                    </div>
                    <div className="text-left">
                        <p className="text-2xl font-medium">97,354</p>
                        <p className="text-gray-600">Companies</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center ">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <span className="material-icons text-[#0A65CC]">people</span>
                    </div>
                    <div className="text-left">
                        <p className="text-2xl font-medium">38,47,154</p>
                        <p className="text-gray-600">Candidates</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center ">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <span className="material-icons text-[#0A65CC]">new_releases</span>
                    </div>
                    <div className="text-left">
                        <p className="text-2xl font-medium">7,532</p>
                        <p className="text-gray-600">New Jobs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
