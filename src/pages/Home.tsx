// src/pages/Home.tsx

import React, { useState } from 'react';
import SideMenu from '../components/common/SideMenu';
import ServiceCard from '../components/Home/ServiceCard';
import AddServiceModal from '../components/Home/AddServiceModal';

const servicesData = [
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
    const [services, setServices] = useState(servicesData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddService = (service: any) => {
        setServices([...services, service]);
    };

    return (
        <div className="flex bg-[#F7F7F8]">
            <div className="hidden md:block">
                <SideMenu />
            </div>
            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Your Services</h1>
                    <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(true)}>
                        Add Services
                    </button>
                </div>
                <div className="space-y-4">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
            <AddServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddService} />
        </div>
    );
};

export default Home;
