import React, { useState } from "react";

type NotificationProps = {
  notification: {
    NotificationId: number;
    UserId: number;
    title: string;
    Message: string;
    location: string;
    report: string;
    IsRead: boolean;
    CreatedAt: string;
    Image: string;
    isVisible: boolean;
    ProfessionalId: number;
    ServiceName: string;
    ServiceDescription: string;
    State: string;
    Municipality: string;
    HourlyRate: string;
    Availability: string;
    UpdatedAt: string;
    Address: string; // Añadido el campo de dirección
  };
  onDelete: (id: number) => void;
  onModalOpen: (isOpen: boolean) => void;
};

const defaultImage = "https://cdn-icons-png.flaticon.com/128/9131/9131646.png";

const NotificationCard: React.FC<NotificationProps> = ({
  notification,
  onDelete,
  onModalOpen,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    onModalOpen(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onModalOpen(false);
  };

  const imageSrc = notification.Image.trim() ? notification.Image : defaultImage;

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
        <div className="flex space-x-4">
          <div className="flex space-x-3 w-16 h-16 rounded-full md:w-8 md:h-8">
            <img
              src={imageSrc}
              alt="Notification Icon"
              className="w-8 h-8 md:w-6 md:h-6 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <div className="mb-4">
              <span className="text-xs font-bold">{notification.title} </span>
              <span className="text-gray-600 text-xs">{notification.Message} </span>
              <span className="text-xs font-bold">
                {notification.location} {notification.report}
              </span>
              <br />
            </div>
            <div className="flex-grow mb-1">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={handleOpenModal}
              >
                View
              </button>
              <button
                className="bg-[#FFFFFF] text-black px-3 py-1 rounded-lg border border-gray-300"
                onClick={() => onDelete(notification.NotificationId)}
              >
                Decline
              </button>
            </div>
            <div className="flex-grow">
              <p className="text-gray-500 text-xs ">{notification.CreatedAt}</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="modal bg-white md:rounded-lg shadow-lg p-8 w-full md:w-3/5 lg:w-1/2 max-h-full overflow-y-auto relative">
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleCloseModal}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="text-justify">
              <h2 className="text-2xl font-bold mb-4  text-center">{notification.title}</h2>
              <p className="text-gray-600 mb-2"><strong>Message:</strong> {notification.Message}</p>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {notification.location}</p>
              <p className="text-gray-600 mb-2"><strong>Report:</strong> {notification.report}</p>
              <p className="text-gray-600 mb-2"><strong>Service Name:</strong> {notification.ServiceName}</p>
              <p className="text-gray-600 mb-2"><strong>Service Description:</strong> {notification.ServiceDescription}</p>
              <p className="text-gray-600 mb-2"><strong>State:</strong> {notification.State}</p>
              <p className="text-gray-600 mb-2"><strong>Municipality:</strong> {notification.Municipality}</p>
              <p className="text-gray-600 mb-2"><strong>Hourly Rate:</strong> {notification.HourlyRate}</p>
              <p className="text-gray-600 mb-2"><strong>Availability:</strong> {notification.Availability}</p>
              <p className="text-gray-600 mb-2"><strong>Updated At:</strong> {notification.UpdatedAt}</p>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> {notification.Address}</p>
            </div>
            <div className="flex justify-end mt-4 absolute bottom-4 left-4 right-4">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={handleCloseModal}
              >
                Accept
              </button>
              <button
                className="bg-[#FFFFFF] text-black px-3 py-1 rounded-lg border border-gray-300"
                onClick={() => {
                  onDelete(notification.NotificationId);
                  handleCloseModal();
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
