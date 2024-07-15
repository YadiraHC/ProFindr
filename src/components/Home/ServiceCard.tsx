// src/components/Home/ServiceCard.tsx
import React, { useState, useRef, useEffect } from 'react';
import { getTimeSinceUpdate } from '../../utils/dateUtils';
import { formatNumberWithCommas } from '../../utils/numberUtils';

interface ServiceCardProps {
    service: {
        serviceId: number;
        serviceName: string;
        municipality: string;
        state: string;
        hourlyRate: number;
        availability: string;
        createdAt: string;
        updatedAt: string;
        occupation: string;
        lineOfWork: string;
        views?: number;
    };
    onEdit: () => void;
    onDelete: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEdit, onDelete }) => {
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

    const handleEdit = () => {
        setIsDropdownOpen(false);
        onEdit();
    };

    const handleDelete = () => {
        setIsDropdownOpen(false);
        onDelete();
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
            <div className="flex-grow">
                <h2 className="text-lg font-bold mb-2">{service.serviceName}</h2>
                <p className="text-gray-600 mb-1">{service.municipality}, {service.state} • {formatNumberWithCommas(service.views || 0)} views</p>
                <p className="text-gray-600 mb-1">{getTimeSinceUpdate(service.updatedAt)} • Full-time • 5 ★</p>
            </div>
            <div className="flex-shrink-0 text-right hidden md:block">
                <p className="text-gray-600 mb-1">Team</p>
                <p className="text-gray-800 mb-2">{service.occupation}</p>
                <p className="text-[#0A65CC] font-bold text-lg">{`$${formatNumberWithCommas(service.hourlyRate)} /hour`}</p>
            </div>
            <div className="relative">
                <button className="material-icons text-gray-600" onClick={toggleDropdown}>more_vert</button>
                {isDropdownOpen && (
                    <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                        <button className="block px-4 py-2 text-left w-full" onClick={handleEdit}>Edit</button>
                        <button className="block px-4 py-2 text-left w-full">View</button>
                        <button className="block px-4 py-2 text-left w-full text-red-500" onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
