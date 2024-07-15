import React from 'react';

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

interface CardJobProps {
    job: Job;
    openModal: () => void;
}

const CardJob: React.FC<CardJobProps> = ({ job, openModal }) => {
    const occupationColors: { [key: string]: string } = {
        'Construction & Maintenance': '#DDF0FD',
        'Home Cleaning & Maintenance': '#FFE3D9',
        'Legal & Professional Services': '#FDF4D8',
        'Events & Entertainment': '#FFE1E7',
        'Transport & Removals': '#E3E5FF',
        'Account & Finance': '#E1FDDD',
        'Personal Care & Wellbeing': '#C6C6C6',
        'Beauty': '#E4BFFA'
    };

    const color = occupationColors[job.occupation] || '#FFFFFF';

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className="material-icons text-yellow-500">
                    {i <= rating ? 'star' : 'star_border'}
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="block w-full sm:w-64 p-3 bg-white rounded-3xl border border-gray-200 shadow-md">
            <div className="flex flex-col rounded-3xl" style={{ height: '250px', width: '100%', backgroundColor: color }}>
                <div className="flex flex-row mt-3">
                    <img className="object-scale-down w-9 h-9 ml-4" src="./images/Twitter.png" alt="Twitter" />
                    <img className="object-scale-down w-9 h-9 ml-auto mr-4" src="./images/Vector.png" alt="Vector" />
                </div>
                <div className="ml-3">
                    <h2 className="text-black text-xl font-normal mt-2">{job.serviceName}</h2>
                    <div className="flex mt-2">
                        {renderStars(job.averageJobRate)}
                        <p className="text-base mb-1 ml-2">{job.averageJobRate.toFixed(1)}</p>
                        <p className="text-base mb-1 ml-5 text-gray-700">{/* {job.views || 0} */} views</p>
                    </div>
                    <div className="flex mt-2 mb-2">
                        <span className="material-icons text-gray-400">location_on</span>
                        <p className="mb-1 text-gray-700">{job.municipality}, {job.state}</p>
                    </div>
                    <div className="bg-transparent border border-gray-500 rounded-3xl px-2 h-8 max-w-full overflow-hidden">
                        <p className="text-xs text-center mt-1.5 truncate">{job.occupation}</p>
                    </div>
                </div>
            </div>
            <div className="mt-2.5 flex flex-row">
                <p className="text-[#1c1e1f] text-lg mt-1.5 font-semibold ml-3">${job.hourlyRate}</p>
                <p className='mt-2'>/Hour</p>
                <button
                    type="button"
                    className="ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-normal rounded-lg text-sm px-3.5 py-2.5 me-2 dark:border-gray-700"
                    onClick={openModal}
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export default CardJob;
