// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import SideMenu from '../components/common/SideMenu';
import NavbarApp from '../components/common/NavbarApp';
import ServiceCard from '../components/Home/ServiceCard';
import AddServiceModal from '../components/Home/AddServiceModal';
import Step1 from '../components/Home/steps/Step1';
import Step2 from '../components/Home/steps/Step2';
import Step3 from '../components/Home/steps/Step3';
import Step4 from '../components/Home/steps/Step4';
import Stepper from '../components/Home/steps/Stepper';
import { getServices, getServiceById, createService, updateService, deleteService } from '../services/serviceServices';
import { getProfessionalInfo, createProfessional } from '../services/professionalService';
import { toast, ToastContainer } from 'react-toastify';

const Home: React.FC = () => {
    const [services, setServices] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const fetchServices = async () => {
        try {
            const response = await getServices();
            console.log('Fetched services:', response); // Log the fetched services
            if (Array.isArray(response)) {
                setServices(response);
            } else {
                setServices(response.services || []);
            }
        } catch (error) {
            console.error('Failed to fetch services:', error);
        }
    };
    

    const fetchProfessionalInfo = async () => {
        try {
            const response = await getProfessionalInfo();
            console.log('Professional info:', response);
            if (response.professional && response.professional.occupation) {
                localStorage.setItem('occupation', response.professional.occupation);
            }
            if (!response.professionalInfo) {
                setCurrentStep(1);
            } else if (response.professionalInfo && response.certificationsInfo && !response.servicesInfo) {
                setCurrentStep(3);
            } else if (response.professionalInfo && !response.certificationsInfo) {
                setCurrentStep(2);
            } else if (response.professionalInfo && response.certificationsInfo && response.servicesInfo) {
                setCurrentStep(5);
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
            const newService = await createService(service);
            fetchServices(); // Volver a cargar los servicios después de agregar
            toast.success('Service created successfully!');
            setCurrentStep(4);
            setTimeout(async () => {
                await fetchProfessionalInfo();
            }, 5000);
        } catch (error) {
            console.error('Failed to submit service:', error);
        }
    };

    const handleSubmitServiceModal = async (service: any) => {
        try {
            if (isEditMode && selectedService) {
                await updateService(selectedService.serviceId, { ...service, serviceId: selectedService.serviceId });
                fetchServices(); // Volver a cargar los servicios después de editar
            } else {
                await createService(service);
                fetchServices(); // Volver a cargar los servicios después de agregar
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error('Failed to submit service:', error);
        }
    };

    const handleSubmitProfessional = async (professional: any) => {
        try {
            await createProfessional(professional);
            toast.success('Professional created successfully!');
            fetchProfessionalInfo();
        } catch (error) {
            console.error('Failed to create professional:', error);
        }
    };

    const handleSubmitCertification = async () => {
        try {
            await fetchProfessionalInfo();
            
        } catch (error) {
            console.error('Failed to create certification', error);
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
                {currentStep === 1 ? (
                    <>
                        <Stepper step={1} />
                        <Step1 onSubmit={handleSubmitProfessional} />
                    </>
                ) : currentStep === 2 ? (
                    <>
                        <Stepper step={2} />
                        <Step2 onSubmit={handleSubmitCertification} />
                    </>
                ) : currentStep === 3 ? (
                    <>
                        <Stepper step={3} />
                        <Step3 onSubmit={handleSubmitService} />
                    </>
                ) : currentStep === 4 ? (
                    <>
                        <Stepper step={4} />
                        <Step4 />
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
                onSubmit={handleSubmitServiceModal}
                initialService={selectedService}
            />
            <ToastContainer />
        </div>
    );
};

export default Home;
