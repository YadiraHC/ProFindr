import React, { useState } from 'react';
import { searchMunicipalities } from '../../utils/locationService';
import { searchJobCategories } from '../../utils/jobCategoryService';
import { searchServicesByOccupationAndLocation } from '../../services/serviceServices';

interface Job {
    serviceId: number;
    professionalId: number;
    serviceName: string;
    serviceDescription: string;
    state: string;
    municipality: string;
    hourlyRate: number;
    availability: string;
    createdAt: string;
    updatedAt: string;
    occupation: string;
    lineOfWork: string;
    averageJobRate: number;
}

interface SearchBarProps {
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setJobs }) => {
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

    const handleSearch = async () => {
        const [municipality, state] = locationQuery ? locationQuery.split(',').map(part => part.trim()) : ['', ''];
        const [lineOfWork, occupation] = jobQuery ? jobQuery.split(',').map(part => part.trim()) : ['', ''];

        const searchParams = {
            keywords: jobQuery ? `${lineOfWork}, ${occupation}` : '',
            location: locationQuery ? `${municipality}, ${state}` : '',
            state: state || '',
            municipality: municipality || ''
        };

        try {
            const searchResults = await searchServicesByOccupationAndLocation(searchParams);
            console.log('Search results:', searchResults); // Mostrar resultados en consola
            setJobs(searchResults);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="p-0 w-full lg:w-[80%] xl:w-[60%]">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mb-4">
                    <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[40%] relative">
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
                    <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[40%] relative">
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
                    <button
                        onClick={handleSearch}
                        className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full lg:w-[20%] lg:shrink-0 z-20"
                    >
                        Find Job
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
