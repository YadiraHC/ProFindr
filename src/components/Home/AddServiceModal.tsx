import React, { useState, useEffect } from 'react';
import { StatesAndMunicipalities } from '../../types/locationTypes';
import statesAndMunicipalities from '../../data/statesAndMunicipalities.json';

interface AddServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (service: any) => void;
    initialService?: any;
}

const AddServiceModal: React.FC<AddServiceModalProps> = ({ isOpen, onClose, onSubmit, initialService }) => {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [state, setState] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [days, setDays] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [serviceNameTouched, setServiceNameTouched] = useState(false);
    const [serviceDescriptionTouched, setServiceDescriptionTouched] = useState(false);

    useEffect(() => {
        if (initialService) {
            setServiceName(initialService.serviceName || '');
            setServiceDescription(initialService.serviceDescription || '');
            setState(initialService.state || '');
            setMunicipality(initialService.municipality || '');
            setHourlyRate(initialService.hourlyRate || '');
            setDays(initialService.availability ? initialService.availability.split(', ') : []);
        } else {
            resetForm();
        }
    }, [initialService, isOpen]);

    const resetForm = () => {
        setServiceName('');
        setServiceDescription('');
        setState('');
        setMunicipality('');
        setHourlyRate('');
        setDays([]);
    };

    const handleDayToggle = (day: string) => {
        setDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const handleSubmit = () => {
        const availability = days.join(', ');

        const newService = {
            serviceName,
            serviceDescription,
            state,
            municipality,
            hourlyRate: parseFloat(hourlyRate),
            availability,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        console.log("Submitting service:", newService);

        onSubmit(newService);
        onClose();
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState(e.target.value);
        setMunicipality('');
    };

    const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            setHourlyRate(value);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white md:rounded-lg shadow-lg p-8 w-full h-full md:h-auto md:max-w-3xl md:mx-4 lg:mx-0 sm:rounded-none sm:p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{initialService ? 'Edit Service' : 'Create your services'}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Service name</label>
                        <input
                            type="text"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                            onBlur={() => setServiceNameTouched(true)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            maxLength={50}
                        />
                        {serviceNameTouched && serviceName.length < 10 && (
                            <p className="text-red-500 text-sm mt-1">Minimum 10 characters</p>
                        )}
                        {serviceName.length === 50 && (
                            <p className="text-red-500 text-sm mt-1">Maximum 50 characters</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            value={serviceDescription}
                            onChange={(e) => setServiceDescription(e.target.value)}
                            onBlur={() => setServiceDescriptionTouched(true)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            rows={3}
                            maxLength={500}
                        />
                        {serviceDescriptionTouched && serviceDescription.length < 20 && (
                            <p className="text-red-500 text-sm mt-1">Minimum 20 characters</p>
                        )}
                        {serviceDescription.length === 500 && (
                            <p className="text-red-500 text-sm mt-1">Maximum 500 characters</p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Select your state</label>
                            <select
                                value={state}
                                onChange={handleStateChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="">Dropdown menu for states</option>
                                {Object.keys(statesAndMunicipalities).map((stateKey) => (
                                    <option key={stateKey} value={stateKey}>
                                        {stateKey}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Select your municipality</label>
                            <select
                                value={municipality}
                                onChange={(e) => setMunicipality(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                disabled={!state}
                            >
                                <option value="">Dropdown menu for municipalities</option>
                                {state &&
                                    (statesAndMunicipalities as StatesAndMunicipalities)[state].map((municipality) => (
                                        <option key={municipality} value={municipality}>
                                            {municipality}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Hourly Rate</label>
                            <input
                                type="text"
                                value={hourlyRate}
                                onChange={handleHourlyRateChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="relative">
                            <label className="block text-gray-700 mb-1">Disponibility</label>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-left"
                            >
                                Select available days
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-full bg-white border rounded shadow-lg z-50">
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                                        <div key={day} className="flex items-center px-4 py-2">
                                            <input
                                                type="checkbox"
                                                checked={days.includes(day)}
                                                onChange={() => handleDayToggle(day)}
                                                className="mr-2"
                                            />
                                            <label className="text-gray-700">{day}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className={`w-full md:w-[50%] px-4 py-2 rounded-lg mt-4 ${!serviceName || !serviceDescription || !state || !municipality || !hourlyRate || days.length === 0 || serviceName.length < 10 || serviceDescription.length < 20 ? 'bg-[#0A65CC] bg-opacity-50 cursor-not-allowed' : 'bg-[#0A65CC] hover:bg-[#084a9b] text-white'}`}
                        disabled={!serviceName || !serviceDescription || !state || !municipality || !hourlyRate || days.length === 0 || serviceName.length < 10 || serviceDescription.length < 20}
                    >
                        {initialService ? 'Update' : 'Create'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddServiceModal;
