// src/components/Home/steps/Step1.tsx
import React from 'react';

const Step1: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Professional Info</h1>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Occupation</label>
                            <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                                <option>Select your occupation</option>
                                <option>Occupation 1</option>
                                <option>Occupation 2</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Line of Work</label>
                            <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                                <option>Select your Line of Work</option>
                                <option>Work 1</option>
                                <option>Work 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">About you</label>
                        <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" rows={3}></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Profile Picture</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="C://Users/username/images" />
                    </div>
                    <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full">Next</button>
                </form>
            </div>
        </div>
    );
};

export default Step1;