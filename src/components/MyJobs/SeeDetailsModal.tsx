// src/components/MyJobs/SeeDetailsModal.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  job: {
    Title: string;
    Description: string;
    StartDate: string;
    EndsDate: string;/*  */
    Hourly: string
    HourlyRate: string;
    Days: string;
    State: string;
    Municipality: string;
    CustomerName: string;
  };
}

const SeeDetailsModal: React.FC<ModalProps> = ({ isOpen, closeModal, job }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white md:rounded-lg shadow-lg p-8 w-full md:w-3/5 lg:w-1/2 max-h-full overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{job.Title}</h2>
          <p className="text-gray-600 mb-2"><strong>Description: </strong> {job.Description}</p>
          <p className="text-gray-600 mb-2"><strong>Start Date: </strong> {job.StartDate}</p>
          <p className="text-gray-600 mb-2"><strong>Ends Date: </strong> {job.EndsDate}</p>
          <p className="text-gray-600 mb-2"><strong>Hourly: </strong> {job.Hourly}</p>
          <p className="text-gray-600 mb-2"><strong>Hourly Rate: </strong> {job.HourlyRate}</p>
          <p className="text-gray-600 mb-2"><strong>Days:</strong> {job.Days}</p>
          <p className="text-gray-600 mb-2"><strong>State:</strong> {job.State}</p>
          <p className="text-gray-600 mb-2"><strong>Municipality:</strong> {job.Municipality}</p>
          <p className="text-gray-600 mb-2"><strong>Cusmoter Name:</strong> {job.CustomerName}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeDetailsModal;
