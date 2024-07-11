// src/components/Home/steps/Step3.tsx
import React, { useState } from 'react';

interface Step3Props {
    onSubmit: (service: any) => void;
}

const Step3: React.FC<Step3Props> = ({ onSubmit }) => {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [state, setState] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [days, setDays] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

        onSubmit(newService);
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Create your first service</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Service name</label>
                        <input
                            type="text"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            value={serviceDescription}
                            onChange={(e) => setServiceDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            rows={3}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Select your state</label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="">Dropdown menu for states</option>
                                <option value="State1">State1</option>
                                <option value="State2">State2</option>
                                <option value="State3">State3</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Select your municipality</label>
                            <select
                                value={municipality}
                                onChange={(e) => setMunicipality(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="">Dropdown menu for municipalities</option>
                                <option value="Municipality1">Municipality1</option>
                                <option value="Municipality2">Municipality2</option>
                                <option value="Municipality3">Municipality3</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Hourly Rate</label>
                            <input
                                type="text"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(e.target.value)}
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
                        className={`w-full md:w-[50%] px-4 py-2 rounded-lg mt-4 ${!serviceName || !serviceDescription || !state || !municipality || !hourlyRate || days.length === 0 ? 'bg-[#0A65CC] bg-opacity-50 cursor-not-allowed' : 'bg-[#0A65CC] hover:bg-[#084a9b] text-white'}`}
                        disabled={!serviceName || !serviceDescription || !state || !municipality || !hourlyRate || days.length === 0}
                    >
                        Create Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step3;
