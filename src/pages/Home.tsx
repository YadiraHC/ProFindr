import React, { useState, useEffect } from 'react';
import SideMenu from '../components/common/SideMenu';
import NavbarApp from '../components/common/NavbarApp';
import ServiceCard from '../components/Home/ServiceCard';
import AddServiceModal from '../components/Home/AddServiceModal';
import Step1 from '../components/Home/layout/Step1';
import Stepper from '../components/Home/layout/Stepper';
import { getServices, getServiceById, createService, updateService, deleteService } from '../services/serviceServices';
import { getProfessionalInfo } from '../services/professionalService';

const Home: React.FC = () => {
    const [services, setServices] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [showStep1, setShowStep1] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const fetchServices = async () => {
        try {
            const fetchedServices = await getServices();
            console.log('Fetched services:', fetchedServices); // Log the fetched services
            setServices(fetchedServices);
        } catch (error) {
            console.error('Failed to fetch services:', error);
        }
    };

    const fetchProfessionalInfo = async () => {
        try {
            const response = await getProfessionalInfo();
            console.log('Professional info:', response);
            if (!response.professionalInfo) {
                setShowStep1(true);
            } else {
                setShowStep1(false);
                fetchServices();
            }
        } catch (error) {
            console.error('Failed to fetch professional info:', error);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfessionalInfo();
    }, []);

    const handleAddService = () => {
        setSelectedService(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleEditService = async (serviceId: number) => {
        try {
            const service = await getServiceById(serviceId);
            console.log('Editing service:', service); // Log the selected service
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
                await updateService(selectedService.serviceId, { ...service, serviceId: selectedService.serviceId });
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div className="flex bg-[#F7F7F8] min-h-screen">
                <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
                <div className="hidden md:block">
                    <SideMenu isOpen={true} onClose={() => setIsSideMenuOpen(false)} />
                </div>
                <div className="flex-1 p-8 md:ml-64 overflow-auto">
                    <div className="text-red-500">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:flex bg-[#F7F7F8] min-h-screen">
            <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
            <div className="hidden md:block">
                <SideMenu isOpen={true} onClose={() => setIsSideMenuOpen(false)} />
            </div>
            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
            <div className="lg:flex-1 p-8 md:ml-64 overflow-auto">
                {showStep1 ? (
                    <>
                        <Stepper step={1} />
                        <Step1 />
                    </>
                ) : (
                    <>
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
                    </>
                )}
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
