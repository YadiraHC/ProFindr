import React, { useState } from 'react';

type JobCategories = {
    [key: string]: string[];
};

const jobCategories: JobCategories = {
    'Construction & Maintenance': [
        'Bricklayer',
        'Carpenter',
        'Electrician',
        'Plumber',
        'Painter',
        'Roofer',
        'Window Installer',
        'Welder',
        'Locksmith',
        'HVAC Technician'
    ],
    'Home Cleaning & Maintenance': [
        'Residential Cleaner',
        'Office Cleaner',
        'Gardener',
        'Janitor',
        'Carpet Cleaner',
        'Window Cleaner',
        'Pool Maintenance',
        'Car Washer',
        'Post-Construction Cleaner',
        'Chimney Cleaner'
    ],
    'Legal & Professional Services': [
        'Lawyer',
        'Accountant',
        'Business Consultant',
        'Human Resources Consultant',
        'Financial Advisor',
        'Life Coach',
        'IT Consultant',
        'Marketing Advisor',
        'Project Management Consultant',
        'Immigration Consultant'
    ],
    'Events & Entertainment': [
        'Event Planner',
        'DJ',
        'Photographer',
        'Videographer',
        'Caterer',
        'Florist',
        'Party Entertainer',
        'Event Decorator',
        'Sound Technician',
        'Lighting Technician'
    ],
    'Transport & Removals': [
        'Taxi Driver',
        'Delivery Driver',
        'Moving Truck Driver',
        'Moving Helper',
        'Vehicle Transporter',
        'Courier',
        'Personal Chauffeur',
        'Car Rental Service',
        'International Moving Service',
        'Professional Packer'
    ],
    'Account & Finance': [
        'Bookkeeper',
        'Tax Preparer',
        'Financial Planner',
        'Investment Advisor',
        'Payroll Specialist',
        'Credit Counselor',
        'Financial Analyst',
        'Auditor',
        'Budget Consultant',
        'Insurance Agent'
    ],
    'Personal Care & Well-being': [
        'Personal Trainer',
        'Yoga Instructor',
        'Nutritionist',
        'Massage Therapist',
        'Life Coach',
        'Health Coach',
        'Chiropractor',
        'Physical Therapist',
        'Mental Health Counselor',
        'Wellness Consultant'
    ],
    'Beauty': [
        'Hair Stylist',
        'Barber',
        'Makeup Artist',
        'Manicurist/Pedicurist',
        'Esthetician',
        'Tattoo Artist',
        'Skincare Specialist',
        'Beauty Consultant',
        'Eyelash Technician',
        'Waxing Specialist'
    ]
};

const Step1: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [profilePicture, setProfilePicture] = useState<string>('');

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        setSelectedSubCategory('');
    };

    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubCategory(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfilePicture(e.target.value);
    };

    const isFormValid = selectedCategory && selectedSubCategory && description;

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Professional Info</h1>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Occupation</label>
                            <select 
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">Select your occupation</option>
                                {Object.keys(jobCategories).map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Line of Work</label>
                            <select 
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                value={selectedSubCategory}
                                onChange={handleSubCategoryChange}
                                disabled={!selectedCategory}
                            >
                                <option value="">Select your Line of Work</option>
                                {selectedCategory && jobCategories[selectedCategory].map((subCategory) => (
                                    <option key={subCategory} value={subCategory}>{subCategory}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">About you</label>
                        <textarea 
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                            rows={3}
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Profile Picture</label>
                        <input 
                            type="text" 
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                            placeholder="C://Users/username/images"
                            value={profilePicture}
                            onChange={handleProfilePictureChange}
                        />
                    </div>
                    <button 
                        type="button"
                        className={`bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isFormValid}
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step1;
