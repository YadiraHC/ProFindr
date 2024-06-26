import React from "react";

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
};
const defaultImage = "https://cdn-icons-png.flaticon.com/128/9131/9131646.png"; // Aquí va tu imagen base64

export const NotificationCard: React.FC<NotificationProps> = ({
  notification,
}) => {
    // Asegurarse de que la imagen no esté vacía ni solo contenga espacios
    const imageSrc = notification.Image.trim() ? notification.Image : defaultImage;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex ">
      <div className="flex space-x-4">{/* para cambiar la linea de separacion de img con cards */}
        <div className="flex space-x-3 w-16 h-16 rounded-full mr-sm-0 md:w-8 md:h-8">
          <img
            src={imageSrc}
            alt="Notification Icon"
            className="w-8 h-8 md:w-6 md:h-6  rounded-full"
          />
        </div>
        <div className="flex-grow">
          <div>
            <span className="text-xs font-bold">{notification.title} </span>
            <span className="text-gray-600 text-xs">
              {notification.Message}{" "}
            </span>
            <span className="text-xs font-bold">
              {notification.location} {notification.report}
            </span>
            <br />
          </div>

          <div>
            <button className="bg-[#0A65CC] text-white px-3 py-1 rounded-lg mr-2">
              View
            </button>
            <button className="bg-[#FFFFFF] text-black px-3 py-1 rounded-lg border border-gray-300">
              Decline
            </button>
          </div>

          <div>
            <p className="text-gray-500 text-xs ">{notification.CreatedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
