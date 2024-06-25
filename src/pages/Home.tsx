// src/pages/Home.tsx

import React from 'react';
import SideMenu from '../components/common/SideMenu';
import Header from '../components/LandingPage/Header';

const services = [
    {
        title: 'Mantenimiento general del jardín',
        location: 'Cancún, Quintana Roo',
        views: 240,
        date: 'Yesterday',
        type: 'Full-time',
        rating: 5,
        team: 'Construction & Maintenance',
        price: 400
    },
    {
        title: 'Instalación de sistemas de riego',
        location: 'Cancún, Quintana Roo',
        views: 120,
        date: '3 days ago',
        type: 'Full-time',
        rating: 4,
        team: 'Construction & Maintenance',
        price: 400
    },
    {
        title: 'Asesoramiento sobre el cuidado de plantas',
        location: 'Cancún, Quintana Roo',
        views: 440,
        date: '5 days ago',
        type: 'Full-time',
        applications: 34,
        team: 'Construction & Maintenance',
        price: 500
    }
];

const Home: React.FC = () => {
    return (
        <div className="flex">
            <SideMenu />
            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Your Services</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Services</button>
                </div>
                <div className="space-y-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                                <p className="text-gray-600 mb-1">{service.location} • {service.views} views</p>
                                <p className="text-gray-600 mb-1">{service.date} • {service.type} • {service.rating} ★</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-600 mb-1">Team</p>
                                <p className="text-gray-800 mb-2">{service.team}</p>
                                <p className="text-blue-500 font-bold text-lg">{`$${service.price} /hour`}</p>
                            </div>
                            <div className="relative">
                                <button className="material-icons text-gray-600">more_vert</button>
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                    <button className="block px-4 py-2 text-left w-full">Edit</button>
                                    <button className="block px-4 py-2 text-left w-full">View</button>
                                    <button className="block px-4 py-2 text-left w-full text-red-500">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;



/* import React from 'react';
import Header from '../components/LandingPage/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            
        </div>
    );
    
};

export default Home;
 */