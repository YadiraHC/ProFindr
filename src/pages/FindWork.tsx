import React from 'react';
import SideMenu from '../components/common/SideMenu';
import SearchBar from '../components/FindWork/SearchBar';
import TagsFilter from '../components/FindWork/TagsFilter';
import CardJobs from '../components/FindWork/CardJobs';

const jobs = [
    { title: 'Construction & Maintenance', location: 'Cancún, Q. Roo', views: 150, type: 'Full-time', price: 600, rating: 4.5, color: '#DDF0FD' },
    { title: 'Home Cleaning & Maintenance', location: 'Cancún, Q. Roo', views: 90, type: 'Part-time', price: 400, rating: 4.2, color: '#FFE3D9' },
    { title: 'Legal & Professional Services', location: 'Cancún, Q. Roo', views: 200, type: 'Contract', price: 800, rating: 4.8, color: '#FDF4D8' },
    { title: 'Events & Entertainment', location: 'Cancún, Q. Roo', views: 150, type: 'Full-time', price: 600, rating: 4.5, color: '#FFE1E7' },
    { title: 'Transport & Removals', location: 'Cancún, Q. Roo', views: 150, type: 'Full-time', price: 600, rating: 4.5, color: '#E3E5FF' },
    { title: 'Account & Finance', location: 'Cancún, Q. Roo', views: 150, type: 'Full-time', price: 600, rating: 4.5, color: '#E1FDDD' },
    { title: 'Personal Care & Wellbeing', location: 'Cancún, Q. Roo', views: 90, type: 'Part-time', price: 400, rating: 4.2, color: '#C6C6C6' },
    { title: 'Beauty', location: 'Cancún, Q. Roo', views: 200, type: 'Contract', price: 800, rating: 4.8, color: '#E4BFFA' },
];


const FindWork: React.FC = () => {
    return (
        <div className="flex bg-[#F7F7F8]">
            <div className="hidden md:block">
                <SideMenu />
            </div>
            <div className="flex flex-col space-y-4 p-10 w-full">
                <div>
                    <SearchBar />
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
                    {jobs.map((job, index) => (
                        <CardJobs key={index} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindWork;
