import React, { useState } from 'react';
import SideMenu from '../components/common/SideMenu';
import NavbarApp from '../components/common/NavbarApp';
import SearchBar from '../components/FindWork/SearchBar';
import TagsFilter from '../components/FindWork/TagsFilter';
import CardJob from '../components/FindWork/CardJobs';
import SeeDetailsModal from '../components/FindWork/SeeDetailsModal';

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

const FindWork: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const openModal = (job: Job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="lg:flex bg-[#F7F7F8] min-h-screen">
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
                    <TagsFilter />
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
                    {jobs.map((job) => (
                        <CardJob key={job.serviceId} job={job} openModal={() => openModal(job)} />
                    ))}
                </div>
            </div>
           {/*  {selectedJob && (
                <SeeDetailsModal isOpen={isModalOpen} closeModal={closeModal} job={selectedJob} />
            )} */}
        </div>
    );
};

export default FindWork;
