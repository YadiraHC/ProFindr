// src/components/Home/AddServiceModal.tsx

import React, { useState, useEffect } from 'react';

interface AddServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (service: any) => void;
}

const AddServiceModal: React.FC<AddServiceModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [serviceName, setServiceName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [rate, setRate] = useState('');
    const [days, setDays] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDayToggle = (day: string) => {
        setDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const handleSubmit = () => {
        onSubmit({ serviceName, description, state, municipality, rate, days });
        handleClose();
    };

    const handleClose = () => {
        onClose();
        resetForm();
    };

    const resetForm = () => {
        setServiceName('');
        setDescription('');
        setState('');
        setMunicipality('');
        setRate('');
        setDays([]);
    };

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen]);

    const isFormValid = () => {
        return serviceName && description && state && municipality && rate && days.length > 0;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white md:rounded-lg shadow-lg p-8 w-full h-full md:h-auto md:max-w-3xl md:mx-4 lg:mx-0 ">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Create your services</h2>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
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
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
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
                        className={`w-full md:w-[50%] bg-[#0A65CC] text-white px-4 py-2 rounded-lg mt-4 ${isFormValid() ? 'hover:bg-[#084a9b]' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isFormValid()}
                    >
                        Create Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddServiceModal;
