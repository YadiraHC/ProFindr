import React, { useState } from 'react';
import { createProfessional } from '../../../services/professionalService';
import { toast } from 'react-toastify';

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

const MAX_DESCRIPTION_LENGTH = 500;
const MIN_DESCRIPTION_LENGTH = 30;

const Step1: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [profilePicture, setProfilePicture] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        setSelectedSubCategory('');
    };

    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubCategory(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= MAX_DESCRIPTION_LENGTH) {
            setDescription(e.target.value);
        }
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfilePicture(e.target.value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const newProfessional = {
            occupation: selectedCategory,
            lineOfWork: selectedSubCategory,
            description,
            profilePicture
        };

        try {
            const response = await createProfessional(newProfessional);
            toast.success('Professional created successfully!');
            console.log('Professional created:', response);
        } catch (error) {
            toast.error('Failed to create professional');
            console.error('Error creating professional:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = selectedCategory && selectedSubCategory && description.length >= MIN_DESCRIPTION_LENGTH;
    const descriptionLengthPercentage = Math.min((description.length / MIN_DESCRIPTION_LENGTH) * 100, 100);

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Professional Info</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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
                        <div className="flex justify-between items-center">
                            <label className="block text-gray-700 mb-1">About you</label>
                            {description.length >= MAX_DESCRIPTION_LENGTH && (
                                <span className="text-red-500 text-sm">Max 500 characters</span>
                            )}
                        </div>
                        <textarea 
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                            rows={3}
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                        <div className="relative mt-2">
                            <svg className="w-6 h-6 absolute top-1 right-1" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#dcdcdc"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831"
                                    fill="none"
                                    stroke="#0A65CC"
                                    strokeWidth="2"
                                    strokeDasharray={`${descriptionLengthPercentage}, 100`}
                                />
                            </svg>
                        </div>
                        {description.length < MIN_DESCRIPTION_LENGTH && (
                            <p className="text-red-500 text-sm mt-1">Description must be at least 30 characters long.</p>
                        )}
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
                        type="submit"
                        className={`bg-[#0A65CC] text-white px-4 py-2 rounded-lg w-full ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isFormValid || isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Next'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step1;
