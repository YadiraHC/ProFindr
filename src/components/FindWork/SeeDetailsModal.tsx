import React from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  job: {
    serviceName: string;
    averageJobRate: number;
    views: number;
    municipality: string;
    state: string;
    hourlyRate: number;
    occupation: string;
    serviceDescription: string;
    availability: string;
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
        <div className="sm:flex sm:flex-col sm:items-center"> {/* Top-left content */}
          <img className="w-24 h-24 rounded-full mb-5 mx-auto" src="./images/Twitter.png" alt="ProfilePicture" />
          <p className="text-2xl font-semibold text-blue-600">Noe Peréz Castillo</p>
          <p className="text-lg font-semibold text-black mb-7">{job.municipality}, {job.state}</p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row"> {/* Flex container for desktop layout */}
          <div className="md:w-1/2">
            <div className="mt-0 ml-2 text-left">
              <p className="text-lg font-semibold text-black mb-0 mt-9">Services Offered:</p>
              <p className="text-gray-600 mb-0">· {job.serviceName}</p>
              <p className="text-gray-600 mb-0">· {job.serviceDescription}</p>
              <p className="text-gray-600 mb-5">· {job.availability}</p>

              <p className="text-lg font-semibold text-black">Rates:</p>
              <p className="text-gray-600 mb-0">· Desde ${job.hourlyRate} por hora</p>
              <p className="text-gray-600 mb-5">· Paquetes mensuales disponibles para mantenimiento regular.</p>

              <div className="flex flex-row">
                <img className="w-20 h-4 mt-0.5" src=".\images\Start4.png" alt="Star" />
                <p className="text-gray-600 ml-1 mb-0">{job.averageJobRate}</p>
                <p className="text-gray-600 mb-3 ml-5">{job.views || 0} Views</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 ml-2">
            <div className="ml-2 text-left">
              <p className="text-lg font-semibold text-black">Type:</p>
              <p className="text-gray-600 mb-5">{job.occupation}</p>
              <p className="text-lg font-semibold text-black">About me:</p>
              <p className="text-gray-600">
                Soy un jardinero con más de 10 años de experiencia en el cuidado y mantenimiento de jardines residenciales y comerciales. Con un profundo amor por la naturaleza y un ojo para el diseño paisajístico, Me especializo en transformar espacios verdes en oasis de tranquilidad y belleza.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 mb-2 flex justify-between">
          <button
            className="w-48 p-2.5 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
            onClick={closeModal}
          >
            Apply Now
          </button>
          <button
            className="p-2.5 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
            style={{
              background: `url('./images/MessagesModal.png') no-repeat center center`,
              width: '52px',
              height: '48px',
            }}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default SeeDetailsModal;
