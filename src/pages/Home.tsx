// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import SideMenu from '../components/common/SideMenu';
import ServiceCard from '../components/Home/ServiceCard';
import AddServiceModal from '../components/Home/AddServiceModal';
import { getServices, getServiceById, createService, updateService, deleteService } from '../services/serviceServices';

const Home: React.FC = () => {
    const [services, setServices] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const fetchServices = async () => {
        try {
            const fetchedServices = await getServices();
            setServices(fetchedServices);
        } catch (error) {
            console.error('Failed to fetch services:', error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleAddService = () => {
        setSelectedService(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleEditService = async (serviceId: number) => {
        try {
            const service = await getServiceById(serviceId);
            setSelectedService(service);
            setIsEditMode(true);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Failed to fetch service:', error);
        }
    };

    const handleDeleteService = async (serviceId: number) => {
        try {
            await deleteService(serviceId);
            fetchServices(); // Volver a cargar los servicios después de eliminar
        } catch (error) {
            console.error('Failed to delete service:', error);
        }
    };

    const handleSubmitService = async (service: any) => {
        try {
            if (isEditMode && selectedService) {
                await updateService(selectedService.serviceId, service);
                fetchServices(); // Volver a cargar los servicios después de editar
            } else {
                const newService = await createService(service);
                fetchServices(); // Volver a cargar los servicios después de agregar
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error('Failed to submit service:', error);
        }
    };

    return (
        <div className="flex bg-[#F7F7F8]">
            <div className="hidden md:block">
                <SideMenu />
            </div>
            <div className="flex-1 p-8 md:ml-64"> {/* Añadir md:ml-64 para el margen izquierdo en pantallas medianas y mayores */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Your Services</h1>
                    <button
                        className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg"
                        onClick={handleAddService}
                    >
                        Add Services
                    </button>
                </div>
                <div className="space-y-4">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                            onEdit={() => handleEditService(service.serviceId)}
                            onDelete={() => handleDeleteService(service.serviceId)}
                        />
                    ))}
                </div>
            </div>
            <AddServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmitService}
                initialService={selectedService}
            />
        </div>
    );
};

export default Home;
