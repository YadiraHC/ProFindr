import React from 'react';

interface CardJobProps {
    job: {
        title: string;
        rating?: number;
        views: number;
        location: string;
        type: string;
        price: number;
        color: string;
    };
    openModal: () => void;
}

const CardJob: React.FC<CardJobProps> = ({ job, openModal }) => {
    return (
        <div className="block w-full sm:w-64 p-3 bg-white rounded-3xl border border-gray-200 shadow-md">
            <div className="flex flex-col rounded-3xl" style={{ height: '250px', width: '100%', backgroundColor: job.color }}>
                <div className="flex flex-row mt-3">
                    <img className="object-scale-down w-9 h-9 ml-4" src="./images/Twitter.png" alt="Twitter" />
                    <img className="object-scale-down w-9 h-9 ml-auto mr-4" src="./images/Vector.png" alt="Vector" />
                </div>
                <div className="ml-3">
                    <h2 className="text-black text-xl font-normal mt-2">{job.title}</h2>
                    <div className="flex mt-2">
                        <img className="h-4 w-20 mt-0.5" src="./images/Start4.png" alt="Start4" />
                        <p className="text-base mb-1 mr-5">{job.rating}</p>
                        <p className="text-base mb-1 text-gray-700">{job.views} views</p>
                    </div>
                    <div className="flex mt-2 mb-2">
                        <img src="./images/location.png" alt="location" />
                        <p className="mb-1 text-gray-700">{job.location}</p>
                    </div>
                    <div className="bg-transparent border border-gray-500 rounded-3xl w-20 h-8">
                        <p className="text-xs text-center mt-1.5">{job.type}</p>
                    </div>
                </div>
            </div>
            <div className="mt-2.5 flex flex-row">
                <p className="text-[#1c1e1f] text-lg mt-1.5 font-semibold ml-3">${job.price}</p>
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
