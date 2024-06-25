// src/components/Home/ServiceCard.tsx

import React, { useState, useRef, useEffect } from 'react';

interface ServiceCardProps {
    service: {
        title: string;
        location: string;
        views: number;
        date: string;
        type: string;
        rating?: number;
        applications?: number;
        team: string;
        price: number;
    };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
            <div className="flex-grow">
                <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-1">{service.location} • {service.views} views</p>
                <p className="text-gray-600 mb-1">{service.date} • {service.type} • {service.rating ? `${service.rating} ★` : ''}</p>
                {service.applications && (
                    <p className="text-gray-600 mb-1">{service.applications} applied</p>
                )}
            </div>
            <div className="flex-shrink-0 text-right">
                <p className="text-gray-600 mb-1">Team</p>
                <p className="text-gray-800 mb-2">{service.team}</p>
                <p className="text-[#0A65CC] font-bold text-lg">{`$${service.price} /hour`}</p>
            </div>
            <div className="relative">
                <button className="material-icons text-gray-600" onClick={toggleDropdown}>more_vert</button>
                {isDropdownOpen && (
                    <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                        <button className="block px-4 py-2 text-left w-full">Edit</button>
                        <button className="block px-4 py-2 text-left w-full">View</button>
                        <button className="block px-4 py-2 text-left w-full text-red-500">Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
