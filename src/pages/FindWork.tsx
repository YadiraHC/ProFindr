import React, { useState, useEffect, useCallback } from 'react';
import SideMenu from '../components/common/SideMenu';
import NavbarApp from '../components/common/NavbarApp';
import SearchBar from '../components/FindWork/SearchBar';
import TagsFilter from '../components/FindWork/TagsFilter';
import CardJob from '../components/FindWork/CardJobs';
import SeeDetailsModal from '../components/FindWork/SeeDetailsModal';
import { getServiceProfessionalInfo } from '../services/serviceServices';

interface Job {
    serviceId: number;
    professionalId: number;
    serviceName: string;
    serviceDescription: string;
    state: string;
    municipality: string;
    hourlyRate: number;
    availability: string;
    createdAt: string;
    updatedAt: string;
    occupation: string;
    lineOfWork: string;
    averageJobRate: number;
}

interface DetailedJob extends Job {
    professionalFullName: string;
    professionalDescription: string;
    profileImage: string; // Añadir aquí
}

const FindWork: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [sortedJobs, setSortedJobs] = useState<Job[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<DetailedJob | null>(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState('Newest');

    const sortJobs = useCallback((jobs: Job[], order: string) => {
        return [...jobs].sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return order === 'Newest' ? dateB - dateA : dateA - dateB;
        });
    }, []);

    useEffect(() => {
        setSortedJobs(sortJobs(jobs, sortOrder));
    }, [jobs, sortOrder, sortJobs]);

    const openModal = async (job: Job, profileImage: string) => {
        try {
            const detailedJob = await getServiceProfessionalInfo(job.serviceId, job.professionalId);
            console.log("Click desde see details", detailedJob)
            setSelectedJob({ ...job, ...detailedJob, profileImage });
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="lg:flex bg-[#F7F7F8] min-h-screen relative">
            <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
            <div className="hidden md:block fixed">
                <SideMenu isOpen={true} onClose={() => setIsSideMenuOpen(false)} />
            </div>
            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
            <div className="lg:flex-1 p-8 md:ml-64 overflow-auto">
                <div>
                    <SearchBar setJobs={setJobs} />
                </div>
                <div className="hidden md:block">
                    <TagsFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    <style>
                        {`
                            @media (min-width: 1024px) and (max-width: 1360px) {
                                .grid {
                                    grid-template-columns: repeat(3, minmax(0, 1fr));
                                }
                            }
                        `}
                    </style>
                    {sortedJobs.map((job) => (
                        <CardJob key={job.serviceId} job={job} openModal={openModal} />
                    ))}
                </div>
            </div>
            {selectedJob && (
                <SeeDetailsModal isOpen={isModalOpen} closeModal={closeModal} job={selectedJob} />
            )}
        </div>
    );
};

export default FindWork;
