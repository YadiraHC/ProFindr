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
    Image: string; // Nueva propiedad opcional para la imagen específica de la notificación
  };
  onDelete: (id: number) => void;
};

const defaultImage = "https://cdn-icons-png.flaticon.com/128/9131/9131646.png"; // Aquí va tu imagen base64

export const NotificationCard: React.FC<NotificationProps> = ({
  notification,
  onDelete
}) => {
  const [showModal, setShowModal] = useState(false);

  // Asegurarse de que la imagen no esté vacía ni solo contenga espacios
  const imageSrc = notification.Image.trim() ? notification.Image : defaultImage;

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
        <div className="flex space-x-4">{/* para cambiar la linea de separacion de img con cards */}
          <div className="flex space-x-3 w-16 h-16 rounded-full md:w-8 md:h-8">
            <img
              src={imageSrc}
              alt="Notification Icon"
              className="w-8 h-8 md:w-6 md:h-6  rounded-full"
            />
          </div>

          <div className="flex-grow">
            <div className="mb-4">
              <span className="text-xs font-bold">{notification.title} </span>
              <span className="text-gray-600 text-xs">
                {notification.Message}{" "}
              </span>
              <span className="text-xs font-bold">
                {notification.location} {notification.report}
              </span>
              <br />
            </div>

            <div className="flex-grow mb-1">
              <button
                className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2"
                onClick={() => setShowModal(true)}
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
          <div className="bg-white md:rounded-lg shadow-lg p-8 w-full md:w-3/5 lg:w-1/2 max-h-full overflow-y-auto">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{notification.title}</h2>
              <p className="text-gray-600 mb-2">{notification.Message} {notification.location} {notification.report}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
