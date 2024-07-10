// src/components/MyJobs/JobCard.tsx

import React from "react";

type JobProps = {
  job: {
    JobId: number;
    Title: string;
    Description: string;
    StartDate: string;
    EndsDate: string;/*  */
    Hourly: string
    HourlyRate: string;
    Days: string;
    State: string;
    Municipality: string;
  };
  openModal: () => void;
};

const JobCard: React.FC<JobProps> = ({ job, openModal }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
      <div className="flex space-x-4">
        <div className="flex-grow">
          <div className="mb-4">
            <span className="text-sm font-bold">{job.Title}</span>
            {/* <p className="text-gray-600 text-sm">Start day {job.StartDate}</p> */}
          </div>
          <div className="flex-grow mb-1">
            <button 
              className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
              onClick={openModal}
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
