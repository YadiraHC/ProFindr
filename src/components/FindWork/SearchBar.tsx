import React, { useState } from 'react';
import { searchMunicipalities } from '../../utils/locationService';

const SearchBar: React.FC = () => {
    const [locationQuery, setLocationQuery] = useState('');
    const [suggestions, setSuggestions] = useState<{ state: string; municipalities: string[] }[]>([]);

    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setLocationQuery(query);

        if (query.length > 2) {
            const normalizedQuery = normalizeText(query);
            const results = searchMunicipalities(normalizedQuery);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (municipality: string, state: string) => {
        setLocationQuery(`${municipality}, ${state}`);
        setSuggestions([]);
    };

    return (
        <div className="flex justify-center">
            <div className="p-0 w-full lg:w-[80%] xl:w-[60%]"> {/* Ajusta el ancho para diferentes tamaños de pantalla */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mb-4">
                    <div className="flex items-center border border-none rounded-lg px-3 py-2 w-full lg:w-[40%]">
                        <span className="material-icons text-gray-400">search</span>
                        <input type="text" placeholder="Job title, keyword" className="focus:outline-none flex-grow px-2 text-sm lg:text-base border-0" />
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
                        {suggestions.length > 0 && (
                            <div className="suggestions-container bg-white border rounded-lg mt-2 p-2 absolute top-full left-0 right-0 z-10 max-h-40 overflow-y-auto">
                                {suggestions.map((suggestion, index) => (
                                    <div key={index}>
                                        <strong>{suggestion.state}</strong>
                                        <ul>
                                            {suggestion.municipalities.map((municipality, idx) => (
                                                <li 
                                                    key={idx}
                                                    onClick={() => handleSuggestionClick(municipality, suggestion.state)}
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
                    <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full lg:w-[20%] lg:shrink-0">Find Job</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
